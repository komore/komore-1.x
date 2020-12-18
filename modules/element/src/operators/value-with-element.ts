/**
 * Value with element
 * @template E Element type
 */
export type ValueWithElement<E extends HTMLElement> = Readonly<{
  element: E;
}>;
