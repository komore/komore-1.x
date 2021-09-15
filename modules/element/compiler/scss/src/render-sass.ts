import { Observable } from '@komore/reactive';
import type { Options, Result } from 'sass';
import { render } from 'sass';

/**
 * Renders a SASS
 * @param options Options
 * @returns Result
 */
export function renderSass(options: Options): Observable<Result> {
  return new Observable<Result>(subscriber => {
    render(options, (exception, result) => {
      if (exception) {
        subscriber.error(exception);
      } else {
        subscriber.next(result);
        subscriber.complete();
      }
    });
  });
}
