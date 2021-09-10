/**
 * Element attribute changed event
 */
export interface ElementAttributeChangedEvent {
  readonly attributeName: string;
  readonly newValue: string | null;
  readonly oldValue: string | null;
}
