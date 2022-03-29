import { map as rxjsMap } from 'rxjs';
import { type OperatorFunction } from '../operator-function';

/**
 * Applies a mapping function to individual elements of the tuple emitted by the source observable, and emits those
 * mapped values
 * @param project Tuple of projection functions where the index is the tuple index targetted by the projection function
 * @template InputType Input type
 * @template ProjectTypes Projection types
 */
/*export function map<InputType extends ReadonlyArray<unknown>, ProjectTypes extends TupleProjectType<InputType>>(
  project: ProjectTypes
): OperatorFunction<InputType, TupleOutputType<InputType, ProjectTypes>>;*/

/**
 * Applies a mapping function to individual properties of the object emitted by the source observable, and emits those
 * mapped values
 * @param project Map of projection functions where the key is the property name targetted by the projection function
 * @template InputType Input type
 * @template ProjectTypes Projection types
 */
/*export function map<InputType extends Record<string, unknown>, ProjectTypes extends Partial<RecordProjectType<InputType>>>(
  project: ProjectTypes
): OperatorFunction<InputType, RecordOutputType<InputType, ProjectTypes>>;*/

/**
 * Applies a mapping function to each value emitted by the source observable, and emits those mapped values
 * @param project Mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
/*export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType>;*/

export function map<InputType, OutputType>(
  project: ((value: InputType, index: number) => OutputType)// | RecordProjectType<InputType>
): OperatorFunction<InputType, OutputType> {
  return rxjsMap(project);

    /*
    : rxjsMap((value, index) => {
        const projected = Object.entries(project).reduce(
          (acc, [propertyName, propertyProject]) => ({
            ...acc,
            [propertyName]: propertyProject(acc[propertyName], index, value),
          }),
          value
        );
        return projected as RecordOutputType<InputType, ProjectTypes>;
      });*/
}

/*type RecordProjectType<InputType extends Record<string, unknown>> = {
  [K in keyof InputType]: (propertyValue: InputType[K], index: number, value: InputType) => unknown;
};

type RecordOutputType<InputType extends Record<string, unknown>, ProjectType extends Partial<RecordProjectType<InputType>>> = {
  [K in keyof InputType]: RecordOutputPropertyType<InputType, ProjectType, K>;
};

type RecordOutputPropertyType<InputType extends Record<string, unknown>, ProjectType extends Partial<RecordProjectType<InputType>>, K extends keyof InputType> = ProjectType[K] extends undefined ? InputType[K] : ProjectType[K];

type TupleProjectType<InputType extends ReadonlyArray<unknown>> = {
  [Index in keyof InputType]: (propertyValue: InputType[Index], index: Index, value: InputType) => unknown;
} & { length: InputType['length'] };

type TupleOutputType<InputType extends ReadonlyArray<unknown>, ProjectType extends TupleProjectType<InputType>> = {
  [Index in keyof InputType]: ProjectType[Index] extends undefined ? InputType[Index] : ReturnType<ProjectType[Index]>;
} & { length: InputType['length'] };

type X = {
  x: number;
  y: string;
};

type Y = Partial<RecordProjectType<X>>;
const _y: Y = {
  x: 42,
  y: 
};

map({
  x: (p: number) => 4
});*/
