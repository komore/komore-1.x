import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { attributeStringValue } from './attribute-string-value';
import { AbstractTemplatePart } from './abstract-template-part';

/**
 * Attribute string part
 * @template ValueType Value type
 * @template ElementType Element type
 */
export class AttributeStringPart<ValueType, ElementType extends Element> extends AbstractTemplatePart<ValueType> {
  /**
   * Class constructor
   * @param value$ Observable value
   * @param element Element
   * @param attributeName Attribute name
   */
  constructor(value$: Observable<ValueType>, element: ElementType, attributeName: string) {
    super(
      value$
        .pipe(map(attributeStringValue), distinctUntilChanged())
        .subscribe(stringValue => element.setAttribute(attributeName, stringValue))
    );
  }
}
