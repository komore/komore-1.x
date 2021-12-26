import { catchErrorIf, type Observable, type OperatorFunction } from '@komore/reactive';

/**
 * Catches an HTTP network failure, returning a new observable or throwing a new error
 * @param selector Selector function
 * @returns Operator function that catches thrown HTTP network failures
 */
export function catchHttpNetworkFailure<T>(
  selector: (error: TypeError, caught: Observable<Response>) => Observable<T>
): OperatorFunction<Response, Response | T> {
  return catchErrorIf(
    (error): error is TypeError => error instanceof TypeError,
    (error, caught) => selector(error, caught)
  );
}
