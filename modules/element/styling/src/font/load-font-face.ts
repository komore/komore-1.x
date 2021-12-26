import { defer, fromPromise, type Observable } from '@komore/reactive';

/**
 * Loads a font face
 * @param fontFace Font face
 * @returns Font face once it has been loaded
 */
export function loadFontFace(fontFace: FontFace): Observable<FontFace> {
  return defer(() => {
    fontFace.load();
    return fromPromise(fontFace.loaded);
  });
}
