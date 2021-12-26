import { type Observer } from '@komore/reactive';

/**
 * Form control
 * @template ValueType Value type
 * @template ElementType HTML element type
 */
export interface FormControl<ValueType, ElementType extends HTMLElement> extends Observer<ValueType> {
  /**
   * HTML element the form control is bound to
   */
  readonly htmlElement: ElementType;
}
