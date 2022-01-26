import { filter, map, startWith, type Observable } from '@komore/reactive';
import { type ElementAttributeChangedEvent } from './element-attribute-changed-event';
import { type FromAttribute } from './from-attribute';
import { isAttributeName } from './is-attribute-name';

/**
 * Returns a function that returns an observable attribute for a host element
 * @param hostElement Host element
 * @param attributeChanged Attribute changed events observable
 * @param AttributeName Attribute name
 * @returns Function that returns an observable attribute for the host element
 */
export function toAttributeFrom<AttributeName extends string>(
  hostElement: Element,
  attributeChanged: Observable<ElementAttributeChangedEvent<AttributeName>>
): FromAttribute<AttributeName> {
  return attributeName =>
    attributeChanged.pipe(
      filter(isAttributeName(attributeName)),
      map(({ newValue }) => newValue),
      startWith(hostElement.getAttribute(attributeName))
    );
}
