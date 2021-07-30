import type { Observable, OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * Catches an HTTP error in a response
 *
 * When a minimum status number is not specified, any status equal or above 400 is considered an error.
 * @param selector 
 * @param minimumStatus 
 * @param maximumStatus 
 */
export function catchHttpResponseErrorIf<T>(
  predicate: (response: Response) => boolean,
  selector: (response: Response) => Observable<T>,
  minimumStatus?: number,
  maximumStatus?: number
): OperatorFunction<Response, Response | T>;

export function catchHttpErrorIf(statusCodes: ReadonlyArray<number>): MonoTypeOperatorFunction<Response>;

export function catchHttpErrorIf(
  statusCodesOrMinimum: number | ReadonlyArray<number>,
  maximumStatus?: number
): MonoTypeOperatorFunction<Response> {
  if (typeof statusCodesOrMinimum === 'number') {
    const minimumStatus = statusCodesOrMinimum;
    return map(response => {
      if ()
    });
  } else {
    const statusCodes = statusCodesOrMinimum;

    return map(response => {

    });
  }
}
