import { map as rxjsMap } from 'rxjs';
import { type OperatorFunction } from '../operator-function';

/**
 * Applies a mapping function to each value emitted by the source observable, and emits those mapped values
 * @param project Mapping function
 * @template InputType Input type
 * @template OutputType Output type
 */
export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType>;

/**
 * Applies a mapping function to individual elements in the tuple emitted by the source observable, and emits those
 * mapped values
 * @param project 
 */
// TODO: map([toX, toY]) => Observable<[X, Y]>
export function map<
  InputType extends ReadonlyArray<unknown>,
  Project extends { [K in keyof InputType]: (value: InputType[K], tuple: InputType, index: number) => unknown }
>(project: Project): OperatorFunction<InputType, { [K in keyof InputType]: unknown }>;

// TODO: map({x: toX, y: toY}) => Observable<{x: X, y: Y}>
export function map<
  InputType extends Record<string, unknown>,
  Project extends { [K in keyof InputType]?: (value: InputType[K], object: InputType, index: number) => unknown }
>(
  project: Project
): OperatorFunction<
  InputType,
  { [K in keyof InputType]: Project[K] extends undefined ? InputType[K] : ReturnType<Project[K]> }
>;

export function map<InputType, OutputType>(
  project: (value: InputType, index: number) => OutputType
): OperatorFunction<InputType, OutputType> {
  if (typeof project === 'function') {
    return rxjsMap(project);
  } else if (Array.isArray(project)) {
    return mapUsingTuple(project);
  } else {
    return mapUsingRecord(project);
  }
}

function mapUsingTuple<InputType, OutputType>(project): OperatorFunction<InputType, OutputType> {}

function mapUsingRecord<
  InputType extends Record<string, unknown>,
  Project extends { [K in keyof InputType]?: (value: InputType[K], object: InputType, index: number) => unknown }
>(
  project: Project
): OperatorFunction<
  InputType,
  { [K in keyof InputType]: Project[K] extends undefined ? InputType[K] : ReturnType<Project[K]> }
> {}


type OutputFromRecordMapping<
  InputType extends Record<string, unknown>,
  Project extends { [K in keyof InputType]?: (value: InputType[K], object: InputType, index: number) => unknown }
> = { [K in keyof InputType]: OutputPropertyFromRecordMapping<InputType, K, Project[K]>; };

type OutputPropertyFromRecordMapping<
  InputType extends Record<string, unknown>,
  K extends keyof InputType,
  T extends ((value: InputType[K], object: InputType, index: number) => unknown) | undefined
> = T extends (value: InputType[K], object: InputType, index: number) => unknown ? ReturnType<T> : InputType[K];


type X = {
  'hello': boolean;
  'world': number;
}

const mappers = {
  'world': () => 'weee' as const;
}

type Y = OutputPropertyFromRecordMapping<X, 'world', undefined>;

let y: Y | undefined = undefined;
y;