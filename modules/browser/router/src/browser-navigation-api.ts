// TODO: remove when available via TypeScript DOM types

declare global {
  interface Window extends WindowNavigation {}

  interface WindowNavigation {
    readonly navigation?: Navigation;
  }

  interface Navigation extends EventTarget {
    readonly canGoBack: boolean;
    readonly canGoForward: boolean;
    readonly currentEntry?: NavigationHistoryEntry;
    readonly transition?: NavigationTransition;

    oncurrententrychange: ((this: Navigation, ev: NavigationEventMap['currententrychange']) => any) | null;
    onnavigate: ((this: Navigation, ev: NavigationEventMap['navigate']) => any) | null;
    onnavigatesuccess: ((this: Navigation, ev: NavigationEventMap['navigatesuccess']) => any) | null;
    onnavigateerror: ((this: Navigation, ev: NavigationEventMap['navigateerror']) => any) | null;

    addEventListener<K extends keyof NavigationEventMap>(
      type: K,
      listener: (this: Navigation, ev: NavigationEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    back(options?: NavigationOptions): NavigationResult;
    entries(): Array<NavigationHistoryEntry>;
    forward(options?: NavigationOptions): NavigationResult;
    navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
    reload(options?: NavigationReloadOptions): NavigationResult;
    removeEventListener<K extends keyof NavigationEventMap>(
      type: K,
      listener: (this: Navigation, ev: NavigationEventMap[K]) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    traverseTo(key: string, options?: NavigationOptions): NavigationResult;
    updateCurrentEntry(options: NavigationUpdateCurrentEntryOptions): void;
  }

  interface NavigationEventMap {
    navigate: NavigateEvent;
    navigatesuccess: Event;
    navigateerror: ErrorEvent;
    currententrychange: NavigationCurrentEntryChangeEvent;
  }

  interface NavigateEvent extends Event {
    readonly canIntercept: boolean;
    readonly destination: NavigationDestination;
    readonly downloadRequest: string | null;
    readonly formData: FormData | null;
    readonly hashChange: boolean;
    readonly hasUAVisualTransition: boolean;
    readonly info: unknown;
    readonly navigationType: NavigationApiNavigationType;
    readonly signal: AbortSignal;
    readonly sourceElement: Element | null;
    readonly userInitiated: boolean;

    intercept(options?: NavigationInterceptOptions): void;
    scroll(): void;
  }

  const NavigateEvent: {
    prototype: NavigateEvent;
    new (type: string, eventInit: NavigateEventInit): Event;
  };

  interface NavigateEventInit extends EventInit {
    canIntercept?: boolean;
    destination: NavigationDestination;
    downloadRequest?: string | null;
    formData?: FormData | null;
    hashChange?: boolean;
    hasUAVisualTransition?: boolean;
    info?: any;
    navigationType?: NavigationApiNavigationType;
    signal: AbortSignal;
    userInitiated?: boolean;
  }

  interface NavigationCurrentEntryChangeEvent extends Event {
    readonly from: NavigationHistoryEntry;
    readonly navigationType?: NavigationApiNavigationType;
  }

  const NavigationCurrentEntryChangeEvent: {
    prototype: NavigationCurrentEntryChangeEvent;
    new (type: string, eventInit: NavigationCurrentEntryChangeEventInit): Event;
  };

  interface NavigationCurrentEntryChangeEventInit extends EventInit {
    destination: NavigationHistoryEntry;
    navigationType?: NavigationApiNavigationType;
  }

  interface NavigationHistoryEntry extends EventTarget {
    readonly id: string;
    readonly index: number;
    readonly key: string;
    readonly sameDocument: boolean;
    readonly url: string | null;

    getState(): unknown;

    ondispose: ((this: NavigationHistoryEntry, ev: Event) => any) | null;

    addEventListener(
      type: 'dispose',
      callback: (this: NavigationHistoryEntry, ev: Event) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      callback: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener(
      type: 'dispose',
      callback: (this: NavigationHistoryEntry, ev: Event) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      callback: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
  }

  interface NavigationDestination {
    readonly id: string | null;
    readonly index: number;
    readonly key: string | null;
    readonly sameDocument: boolean;
    readonly url: string;

    getState(): unknown;
  }

  interface NavigationUpdateCurrentEntryOptions {
    state: unknown;
  }

  interface NavigationOptions {
    info?: unknown;
  }

  interface NavigationNavigateOptions extends NavigationOptions {
    history?: NavigationHistoryBehavior;
    state?: unknown;
  }

  interface NavigationReloadOptions extends NavigationOptions {
    state?: unknown;
  }

  interface NavigationTransition {
    readonly finished: Promise<void>;
    readonly from: NavigationHistoryEntry;
    readonly navigationType: NavigationApiNavigationType;
  }

  interface NavigationResult {
    committed: Promise<NavigationHistoryEntry>;
    finished: Promise<NavigationHistoryEntry>;
  }

  interface NavigationInterceptOptions {
    focusReset?: NavigationFocusReset;
    handler?: NavigationInterceptHandler;
    scroll?: NavigationScrollBehavior;
  }

  type NavigationApiNavigationType = 'reload' | 'push' | 'replace' | 'traverse';
  type NavigationFocusReset = 'after-transition' | 'manual';
  type NavigationHistoryBehavior = 'auto' | 'push' | 'replace';
  type NavigationInterceptHandler = () => Promise<void>;
  type NavigationScrollBehavior = 'after-transition' | 'manual';
}
