import { Observable } from '@komore/reactive';
import { type Options, render, type Result } from 'sass';

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
