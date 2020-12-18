import { Observable, Observer, of, Subject } from 'rxjs';
import { catchError, defaultIfEmpty, map, mergeMap } from 'rxjs/operators';

/**
 * Function call
 * @template FunctionParameterTypes Function parameter t ypes
 * @template FunctionReturnType Function return type
 */
type FunctionCall<FunctionParameterTypes extends ReadonlyArray<any>, FunctionReturnType> = Readonly<{
  emitted?: boolean;
  functionParameters: FunctionParameterTypes;
  reject: (error: any) => void;
  resolve: (value: FunctionReturnType | void) => void;
}>;

/**
 * Function value
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
type FunctionValue<FunctionParameterTypes extends ReadonlyArray<any>, FunctionReturnType> = FunctionCall<
  FunctionParameterTypes,
  FunctionReturnType
> &
  Readonly<{
    index: number;
    result?: FunctionReturnType;
    error?: any;
  }>;

/**
 * Function observer
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
class FunctionObserver<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<any>,
  FunctionReturnType
> implements Observer<FunctionValue<FunctionParameterTypes, FunctionReturnType>> {
  constructor(private readonly functionName: FunctionName) {}

  next({ resolve, reject, result, error, index }: FunctionValue<FunctionParameterTypes, FunctionReturnType>): void {
    if (index > 0) {
      console.warn(`Function ${this.functionName}'s pipe emission #${index + 1} ignored`, result, error);
      return;
    }

    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  }

  error(error: any): void {
    console.error(`Function ${this.functionName} threw an error: no further invocations will be handled`, error);
  }

  complete(): void {
    console.error(`Function ${this.functionName} completed: no further invocations will be handled`);
  }
}

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
  FunctionParameterTypes extends ReadonlyArray<any>,
  FunctionReturnType
>(
  functionName: FunctionName,
  project: (observable: Observable<FunctionParameterTypes>) => Observable<FunctionReturnType>
): (...functionParameters: FunctionParameterTypes) => Promise<FunctionReturnType | void> {
  const subject = new Subject<FunctionCall<FunctionParameterTypes, FunctionReturnType>>();
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
