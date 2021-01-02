import type { HTMLElement } from 'node-html-parser';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';

/**
 * Generates a template
 * @param templateElement Template element
 */
export function generateTemplate(templateElement: HTMLElement): Observable<unknown> {
  //console.log('template', templateElement);
  const type = templateElement.getAttribute('type') ?? 'text/html';
  const elementName = templateElement.rawTagName;
  console.log('element', elementName, type);
  return of(undefined);
}
