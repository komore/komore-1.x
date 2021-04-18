import type { Observable } from '@komore/reactive';
import { of, Subject } from '@komore/reactive';
import { catchError, defaultIfEmpty, map, mergeMap } from '@komore/reactive/operators';
import type { FunctionCallInformation } from './function-call-information';
import { FunctionObserver } from './function-observer';

/**
 * Creates a function
 * @param functionName Function name
 * @param functionTriggerTypes Function trigger types
 * @param project Projection function describing the implementation as a pipeline
 * @returns Function
 * @template FunctionName Function name
 * @template FunctionTriggerTypes Function trigger types
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
export function createProjectedFunction<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<unknown>,
  FunctionReturnType
>(
  functionName: FunctionName,
  project: (observable: Observable<FunctionParameterTypes>) => Observable<FunctionReturnType>
): (...functionParameters: FunctionParameterTypes) => Promise<FunctionReturnType | void> {
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
            index
          })),
          defaultIfEmpty({
            ...functionCall,
            index: 0
          })
        )
      )
    )
    .subscribe(new FunctionObserver(functionName));

  const wrapper = {
    [functionName](...functionParameters: FunctionParameterTypes): Promise<FunctionReturnType | void> {
      return new Promise<FunctionReturnType | void>((resolve, reject) => {
        if (subscription.closed) {
          console.error(`Function ${functionName} completed: invocation ignored`, ...functionParameters);
          reject();
          return;
        }

        subject.next({
          functionParameters,
          resolve,
          reject
        });
      });
    }
  };

  return wrapper[functionName];
}
