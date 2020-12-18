import { Subject } from 'rxjs';
import { ElementLifecycleEvent, ElementLifecycleEventObservable } from './lifecycle/element-lifecycle-event';

/**
 * Komore element
 */
export class KomoreElement extends HTMLElement {
  private readonly _lifecycle$ = new Subject<
    | ElementLifecycleEvent<'adopted'>
    | ElementLifecycleEvent<'connected'>
    | ElementLifecycleEvent<'disconnected'>
    | ElementLifecycleEvent<'attributeChanged'>
  >();

  readonly lifecycle$: ElementLifecycleEventObservable = this._lifecycle$.asObservable();

  /**
   * Class constructor
   */
  constructor() {
    super();
  }

  adoptedCallback(): void {
    this._lifecycle$.next({
      type: 'adopted'
    });
  }

  attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void {
    this._lifecycle$.next({
      type: 'attributeChanged',
      attributeName,
      oldValue,
      newValue
    });
  }

  connectedCallback(): void {
    this._lifecycle$.next({
      type: 'connected'
    });
  }

  disconnectedCallback(): void {
    this._lifecycle$.next({
      type: 'disconnected'
    });
  }
}
