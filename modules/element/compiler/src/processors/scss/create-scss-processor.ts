import { of } from 'rxjs';
import type { StyleProcessor } from '../style-processor';

/**
 * Creates an SCSS processor
 * @param options Options
 */
export function createScssProcessor(_: unknown): StyleProcessor {
  return _ => {
    //console.log('scss', content);
    return of(undefined);
  };
}
