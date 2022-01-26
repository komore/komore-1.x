/**
 * Element attribute changed event
 * @param AttributeName Attribute name
 */
export interface ElementAttributeChangedEvent<AttributeName extends string> {
  readonly attributeName: AttributeName;
  readonly newValue: string | null;
  readonly oldValue: string | null;
}
