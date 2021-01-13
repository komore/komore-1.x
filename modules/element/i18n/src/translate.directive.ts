import { createDirective } from '@komore/element';
import { concatMap, map } from 'rxjs/operators';
import type { LocalizedZoneElement } from './localized-zone.element';
import type { TranslateParameters } from './translate-parameters';

/**
 * Translate directive
 */
export const translate = createDirective<HTMLElement, TranslateParameters>((element$, _parameters) => element$.pipe(
  switch
));
