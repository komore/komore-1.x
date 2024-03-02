import { catchError, defaultIfEmpty, map, mergeMap, of, Subject } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type FunctionCallInformation } from './observer/function-call-information';
import { FunctionObserver } from './observer/function-observer';

/**
 * Creates a function
 *
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
  FunctionReturnType = void,
>(
  functionName: FunctionName,
  project: (parameters$: Observable<FunctionParameterTypes>) => Observable<FunctionReturnType>
): (...functionParameters: FunctionParameterTypes) => Promise<FunctionReturnType> {
  const subject = new Subject<FunctionCallInformation<FunctionParameterTypes, FunctionReturnType>>();
  const subscription = subject
    .asObservable()
    .pipe(
      mergeMap(functionCall =>
        project(of(functionCall.functionParameters)).pipe(
          map(result => ({ result, error: undefined })),
          catchError(error => of({ result: undefined, error })),
          map((result, index) => ({
            ...functionCall,
            ...result,
            index,
          })),
          defaultIfEmpty({
            ...functionCall,
            index: 0,
          })
        )
      )
    )
    .subscribe(new FunctionObserver(functionName));

  const namedFunctionWrapper = {
    [functionName](...functionParameters: FunctionParameterTypes): Promise<FunctionReturnType> {
      return new Promise<FunctionReturnType>((resolve, reject) => {
        if (subscription.closed) {
          console.error(`Function ${functionName} completed: invocation ignored`, ...functionParameters);
          reject();
          return;
        }

        subject.next({
          functionParameters,
          resolve,
          reject,
        });
      });
    },
  } as NamedFunctionWrapper<FunctionName, FunctionParameterTypes, FunctionReturnType>;

  return namedFunctionWrapper[functionName];
}

type NamedFunctionWrapper<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<unknown>,
  FunctionReturnType,
> = ReadonlyRecord<FunctionName, (...parameters: FunctionParameterTypes) => Promise<FunctionReturnType>>;
