import { recordLogEvent } from '@komore/observability/logging';
import type { Observer } from '@komore/reactive';
import { functionInvocationIgnored, functionObservableCompleted, functionObservableError } from './function-logs';
import type { FunctionValue } from './function-value';

/**
 * Function observer
 * @template FunctionName Function name
 * @template FunctionParameterTypes Function parameter types
 * @template FunctionReturnType Function return type
 */
export class FunctionObserver<
  FunctionName extends string,
  FunctionParameterTypes extends ReadonlyArray<unknown>,
  FunctionReturnType
> implements Observer<FunctionValue<FunctionParameterTypes, FunctionReturnType>>
{
  /**
   * Class constructor
   * @param functionName Function name
   */
  constructor(private readonly functionName: FunctionName) {}

  next({ resolve, reject, result, error, index }: FunctionValue<FunctionParameterTypes, FunctionReturnType>): void {
    if (index > 0) {
      recordLogEvent(
        functionInvocationIgnored({
          functionName: this.functionName,
          index: index + 1,
          result
        })
      );
      return;
    }

    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  }

  error(error: unknown): void {
    recordLogEvent(
      functionObservableError({
        functionName: this.functionName,
        error
      })
    );
  }

  complete(): void {
    recordLogEvent(
      functionObservableCompleted({
        functionName: this.functionName
      })
    );
  }
}
