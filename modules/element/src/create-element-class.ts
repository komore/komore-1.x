import { Subject } from 'rxjs';
import { ElementLifecycleEvent, ElementLifecycleEventObservable } from './lifecycle/element-lifecycle-event';
import { CssTemplate } from './template/css-template';
import { ElementTemplate } from './template/element-template';

// TODO: remove once the type definitions are up to date
declare global {
  interface ShadowRoot {
    adoptedStyleSheets: ReadonlyArray<CSSStyleSheet>;
  }
}

/**
 * Creates an element class
 * @param baseClass Base class
 * @template BaseType Base class type
 */
export function createElementClass<BaseType extends HTMLElement>(
  baseClass: new () => BaseType,
  elementTemplate: ElementTemplate<BaseType, any>,
  cssTemplates: ReadonlyArray<CssTemplate>
): typeof HTMLElement {
  const templateElement = elementTemplate.templateElement;
  const elementClass = class extends baseClass {
    private readonly _lifecycle$ = new Subject<
      | ElementLifecycleEvent<'adopted'>
      | ElementLifecycleEvent<'connected'>
      | ElementLifecycleEvent<'disconnected'>
      | ElementLifecycleEvent<'attributeChanged'>
    >();

    readonly lifecycle$: ElementLifecycleEventObservable = this._lifecycle$.asObservable();
    readonly events: ElementEvents<>;

    /**
     * Class constructor
     */
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open'});
      shadowRoot.adoptedStyleSheets = cssTemplates.map(({ styleSheet }) => styleSheet);
      shadowRoot.appendChild(templateElement.content.cloneNode(true));
      console.log('shadow root', shadowRoot);
    }

    adoptedCallback(): void {
      console.log('adopted callback');
      this._lifecycle$.next({
        type: 'adopted'
      });
    }

    attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void {
      console.log('attribute changed', attributeName, oldValue, newValue);
      this._lifecycle$.next({
        type: 'attributeChanged',
        attributeName,
        oldValue,
        newValue
      });
    }

    connectedCallback(): void {
      console.log('connected');
      this._lifecycle$.next({
        type: 'connected'
      });
    }

    disconnectedCallback(): void {
      this._lifecycle$.next({
        type: 'disconnected'
      });
    }

    private 
  };

  return elementClass;
}
