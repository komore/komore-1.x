import { forkJoin, Observable, of } from 'rxjs';
import type { ScriptResourceLoader } from './script-resource-loader';

/**
 * Parses script elements, loading them from external sources if necessary
 * @param htmlElements HTML elements
 * @param scriptResourceLoader Script resource loader
 * @returns List of HTML script elements
 */
export function parseScriptElements(
  scriptElements: ReadonlyArray<HTMLScriptElement>,
  scriptResourceLoader: ScriptResourceLoader
): Observable<ReadonlyArray<HTMLScriptElement>> {
  const loadScriptElements = scriptElements.map(loadScriptElement(scriptResourceLoader));
  // TODO: remove block once https://github.com/ReactiveX/rxjs/pull/5922 is merged
  if (loadScriptElements.length === 0) {
    return of([]);
  }
  return forkJoin(loadScriptElements);
}

/**
 * Loads a script element, if necessary
 * @param scriptResourceLoader Script resource loader
 */
function loadScriptElement(scriptResourceLoader: ScriptResourceLoader) {
  return (scriptElement: HTMLScriptElement): Observable<HTMLScriptElement> => {
    const src = scriptElement.getAttribute('src');
    return src === null ? of(scriptElement) : scriptResourceLoader(src);
  };
}
