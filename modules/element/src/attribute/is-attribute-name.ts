import { type ElementAttributeChangedEvent } from './element-attribute-changed-event';

/**
 * Returns a function that tests whether an element attribute changed event refers to a specific attribute name
 *
 * @param attributeName Attribute name
 * @returns Function that tests whether an element attribute changed event refers to the specific attribute name
 */
export function isAttributeName<AttributeName extends string>(
  attributeName: AttributeName
): (event: ElementAttributeChangedEvent<string>) => event is ElementAttributeChangedEvent<AttributeName> {
  return (event): event is ElementAttributeChangedEvent<AttributeName> => event.attributeName === attributeName;
}
