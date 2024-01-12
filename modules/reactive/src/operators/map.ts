import { map as rxjsMap } from 'rxjs';

import { isArray } from '@komore/collection';
import { objectToEntries } from '@komore/functional';
import { type Expand, type ReadonlyRecord } from '@komore/typescript';

import { type OperatorFunction } from '../operator-function';

/**
 * Applies a mapping function to individual elements of the tuple emitted by the source observable, and emits those
 * mapped values
 *
 * @param project Tuple of projection functions where the index is the tuple index targetted by the projection function
 * @template InputType Input type
 * @template ProjectTypes Projection types
 */
export function map<InputType extends ReadonlyArray<any>, ProjectTypes extends TupleProjectType<InputType>>(
  project: ProjectTypes
): OperatorFunction<InputType, TupleOutputType<InputType, ProjectTypes>>;

/**
 * Applies a mapping function to individual properties of the object emitted by the source observable, and emits those
 * mapped values
 *
 * @param project Map of projection functions where the key is the property name targetted by the projection function
 * @template InputType Input type
 * @template ProjectTypes Projection types
 */
export function map<
  InputType extends ReadonlyRecord<string, unknown>,
  ProjectTypes extends Partial<RecordProjectType<InputType>>,
>(project: ProjectTypes): OperatorFunction<InputType, Expand<RecordOutputType<InputType, ProjectTypes>>>;

/**
 * Applies a mapping function to each value emitted by the source observable, and emits those mapped values
 *
 * @param project Mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType>;

export function map<InputType extends ReadonlyArray<unknown>, OutputType>(
  project:
    | TupleProjectType<InputType>
    | Partial<RecordProjectType<InputType>>
    | ((value: InputType, index: number) => OutputType)
): OperatorFunction<InputType, OutputType> {
  if (typeof project === 'function') {
    return rxjsMap(project);
  } else if (isArray(project)) {
    return mapTuple(project) as OperatorFunction<InputType, OutputType>;
  } else {
    return mapRecord(project) as unknown as OperatorFunction<InputType, OutputType>;
  }
}

function mapTuple<InputType extends ReadonlyArray<unknown>, ProjectTypes extends TupleProjectType<InputType>>(
  tupleProjections: ProjectTypes
): OperatorFunction<InputType, TupleOutputType<InputType, ProjectTypes>> {
  return rxjsMap((value, index) => {
    return value.map((element, elementIndex) => {
      const elementProjection = tupleProjections[elementIndex];
      return elementProjection !== undefined ? elementProjection(element, value, index) : element;
    }) as unknown as TupleOutputType<InputType, ProjectTypes>;
  });
}

/**
 * Implementation for the record projection map overload
 *
 * @param recordProjections Record projections
 * @template InputType Input type
 * @template ProjectTypes Projection types
 */
function mapRecord<
  InputType extends ReadonlyRecord<string, unknown>,
  ProjectTypes extends Partial<RecordProjectType<InputType>>,
>(recordProjections: ProjectTypes): OperatorFunction<InputType, Expand<RecordOutputType<InputType, ProjectTypes>>> {
  const projectionEntries = objectToEntries(recordProjections);
  return rxjsMap((value, index) => {
    const projected = projectionEntries.reduce((acc, [propertyKey, project]) => {
      const propertyValue = acc[propertyKey] as Parameters<NonNullable<typeof project>>[0];
      return {
        ...acc,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [propertyKey]: project !== undefined ? project(propertyValue as any, value, index) : undefined,
      };
    }, value);
    return projected as Expand<RecordOutputType<InputType, ProjectTypes>>;
  });
}

/**
 * Given an input type, create a similar object made of ampping functions for each tuple element
 *
 * @template InputType Input type
 */
type TupleProjectType<InputType extends ReadonlyArray<unknown>> = {
  [Index in keyof InputType]?: (propertyValue: InputType[Index], value: InputType, index: number) => unknown;
} & { readonly length: InputType['length'] };

/**
 * Given an input type and a tuple projection type, create a tuple where:
 *
 * - the elements from the input type that are projected take the type returned by the projection
 * - the elements from the input type that are not projected keep their type
 *
 * @template InputType Input type
 * @template ProjectType Projection type
 */
type TupleOutputType<InputType extends ReadonlyArray<unknown>, ProjectType extends TupleProjectType<InputType>> = {
  [Index in keyof InputType]: TupleOutputPropertyType<InputType, ProjectType, Index>;
} & { readonly length: InputType['length'] };

/**
 * Select an output property type based on whether or not the projection type has a mapper for each input type element
 */
type TupleOutputPropertyType<
  InputType extends ReadonlyArray<unknown>,
  ProjectType extends TupleProjectType<InputType>,
  K extends keyof InputType,
> = ProjectType[K] extends (...arg: never[]) => unknown ? ReturnType<ProjectType[K]> : InputType[K];

/**
 * Given an input type, create a similar object made of mapping functions for each property
 *
 * @template InputType Input type
 */
type RecordProjectType<InputType> = {
  [K in keyof InputType]: (propertyValue: InputType[K], value: InputType, index: number) => unknown;
};

/**
 * Given an input type and a record projection type, create an object where:
 *
 * - the properties from the input type that are projected take the type returned by the projection
 * - the properties from the input type that are not projected keep their type
 *
 * @template InputType Input type
 * @template ProjectType Projection type
 */
type RecordOutputType<
  InputType extends ReadonlyRecord<string, unknown>,
  ProjectType extends Partial<RecordProjectType<InputType>>,
> = {
  [K in keyof InputType]: RecordOutputPropertyType<InputType, ProjectType, K>;
};

/**
 * Select an output property type based on whether or not the projection type has a mapper for each input type property
 *
 * @template InputType Input type
 * @template ProjectType Projection type
 * @template K Input type property key
 */
type RecordOutputPropertyType<
  InputType extends ReadonlyRecord<string, unknown>,
  ProjectType extends Partial<RecordProjectType<InputType>>,
  K extends keyof InputType,
> = ProjectType[K] extends (...arg: never[]) => unknown ? ReturnType<ProjectType[K]> : InputType[K];
