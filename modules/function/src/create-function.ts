import type { Observable } from '@komore/reactive';
import { createImmediateFunction } from './create-immediate-function';
import { createProjectedFunction } from './create-projected-function';

/**
 * Creates a function
 * @param functionName Function name
 * @returns Function
 * @template FunctionName Function name
 * @template FunctionParameterType Function parameter types
 */
export function createFunction<FunctionName extends string, FunctionParameterTypes extends ReadonlyArray<unknown> = []>(
  functionName: FunctionName
): (
  ...functionParameters: FunctionParameterTypes
) => Promise<FunctionParameterTypes extends [] ? void : FunctionParameterTypes>;

/**
 * Creates a function with a projection that defines its implementation
 * @param functionName Function name
 * @param project Projection function that returns an observable function result
 * @returns Function
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
export function createFunction<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<unknown> = [],
  FunctionReturnType = void
>(
  functionName: FunctionName,
  project: (observable: Observable<FunctionParameterTypes>) => Observable<FunctionReturnType>
): (
  ...functionParameters: FunctionParameterTypes
) => ReturnType<typeof project> extends Observable<never> ? void : Promise<FunctionReturnType>;

/**
 * Creates either an immediate or a projected function
 * @param functionName Function name
 * @param project Optional projection
 * @returns Function
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
export function createFunction<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<unknown>,
  FunctionReturnType
>(
  functionName: FunctionName,
  project?: (
    observable: Observable<FunctionParameterTypes>
  ) => Observable<FunctionReturnType | FunctionParameterTypes | void>
): (...functionParameters: FunctionParameterTypes) => Promise<FunctionReturnType | FunctionParameterTypes | void> {
  if (project === undefined) {
    return createImmediateFunction(functionName);
  } else {
    return createProjectedFunction(functionName, project);
  }
}
