import { type StyleProcessor } from '@komore/element-compiler/processor';
import { toCssStyleSheet } from '@komore/element/style';
import { map, of, switchMap } from '@komore/reactive';

import { type CssProcessorOptions } from './css-processor-options';

/**
 * Creates a CSS style processor
 *
 * @param options Options
 * @returns CSS style processor
 */
export function createCssProcessor(_: CssProcessorOptions): Observable<StyleProcessor> {
  const cssProcessor: StyleProcessor = content =>
    content.pipe(
      switchMap(toCssStyleSheet()),
      map(cssStyleSheet => ({
        propertyDefinitions: [],
        referencedProperties: new Set(),
        cssStyleSheet,
      }))
    );
  return of(cssProcessor);
}
