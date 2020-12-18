import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { AbstractTemplatePart } from './abstract-template-part';
import { attributeBooleanValue } from './attribute-boolean-value';

/**
 * Attribute boolean part
 * @template ValueType Value type
 * @template ElementType Element type
 */
export class AttributeBooleanPart<ValueType, ElementType extends Element> extends AbstractTemplatePart<ValueType> {
  /**
   * Class constructor
   * @param value$ Observable value
   * @param element Element
   * @param attributeName Attribute name
   */
  constructor(
    value$: Observable<ValueType>,
    private readonly element: ElementType,
    private readonly attributeName: string
  ) {
    super(
      value$.pipe(map(attributeBooleanValue), distinctUntilChanged()).subscribe(booleanValue => {
        if (booleanValue) {
          this.element.setAttribute(this.attributeName, '');
        } else {
          this.element.removeAttribute(this.attributeName);
        }
      })
    );
  }
}
