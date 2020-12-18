import { Observable } from 'rxjs';

/**
 * Attribute changed event parameters
 */
export type AttributeChangedEventParameters = Readonly<{
  attributeName: string;
  oldValue: string | null;
  newValue: string | null;
}>;

/**
 * Element lifecycle event parameters mapping
 */
export interface ElementLifecycleEventParametersMapping {
  adopted: undefined;
  attributeChanged: AttributeChangedEventParameters;
  connected: undefined;
  disconnected: undefined;
}

/**
 * Element lifecycle event
 * @template LifecycleEventType Lifecycle event type
 */
export type ElementLifecycleEvent<LifecycleEventType extends keyof ElementLifecycleEventParametersMapping> = Readonly<{
  type: LifecycleEventType;
}> &
  (ElementLifecycleEventParametersMapping[LifecycleEventType] extends undefined
    ? {}
    : ElementLifecycleEventParametersMapping[LifecycleEventType]);

/**
 * Element lifecycle event observable
 */
export type ElementLifecycleEventObservable = Observable<
  | ElementLifecycleEvent<'adopted'>
  | ElementLifecycleEvent<'connected'>
  | ElementLifecycleEvent<'disconnected'>
  | ElementLifecycleEvent<'attributeChanged'>
>;
