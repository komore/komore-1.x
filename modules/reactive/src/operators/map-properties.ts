import { type OperatorFunction } from '../operator-function';
import { map } from './map';

// TODO: merge into map(), also same feature for filter()

/**
 * Applies a mapping function to individual properties of the object emitted by the source observable, and emits those
 * mapped values
 * @param project Map of projection functions where the key is the property name targetted by the project function
 * @template InputType Input type
 * @template ProjectTypes Projection types
 */
export function mapProperties<
  InputType extends Record<string, unknown>,
  ProjectTypes extends RecordProjectType<InputType>
>(project: ProjectTypes): OperatorFunction<InputType, RecordOutputType<InputType, ProjectTypes>> {
  return map((value, index) => {
    const projected = Object.entries(project).reduce(
      (acc, [propertyName, propertyProject]) => ({
        ...acc,
        [propertyName]: propertyProject(acc[propertyName], index, value)
      }),
      value
    );
    return projected as RecordOutputType<InputType, ProjectTypes>;
  });
}

type RecordProjectType<InputType extends Record<string, unknown>> = {
  [K in keyof InputType]: (propertyValue: InputType[K], index: number, value: InputType) => unknown;
};

type RecordOutputType<InputType extends Record<string, unknown>, ProjectType extends RecordProjectType<InputType>> = {
  [K in keyof InputType]: ProjectType[K] extends undefined ? InputType[K] : ReturnType<ProjectType[K]>;
};
