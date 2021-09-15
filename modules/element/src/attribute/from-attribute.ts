import type { Observable } from '@komore/reactive';

/**
 * Function that returns an observable attribute
 * @param attributeName Attribute name
 * @returns Observable attribute
 * @template AttributeMap Attribute map
 */
export interface FromAttribute<AttributeMap extends Record<string, unknown>> {
  <AttributeName extends keyof AttributeMap>(attributeName: AttributeName): Observable<string | null>;
}
