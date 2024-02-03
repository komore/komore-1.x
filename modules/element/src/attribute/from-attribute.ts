/**
 * Function that returns an observable attribute
 *
 * @param attributeName Attribute name
 * @returns Observable attribute
 * @template AttributeName Attribute name
 */
export interface FromAttribute<AttributeName extends string> {
  (attributeName: AttributeName): Observable<string | null>;
}
