# Element properties

## Design

### Best practices

The following best practices are taken into account in the design:

- [Properties set before an element is upgraded should be kept]

## Implementation

Exported subjects are turned into public getters and setters for properties in the custom element class.

A reference to the subject is kept as a private property so that it may be referenced by said getters and setters.

The subject type determines what gets generated:

- a setter for a [`Subject`] or a [`ReplaySubject`]
- a setter and a getter for a [`BehaviorSubject`]
- a getter for a [`BehaviorSubject`] turned into an [`Observable`]

```ts
// source
export const exampleProperty = new BehaviorSubject<string>('example');
export const optionalProperty = new BehaviorSubject<string | undefined>(undefined);
export const writeOnlyProperty = new Subject<string>();
export const readOnlyProperty = exampleProperty.asObservable();
```

```ts
// definition
export interface ExampleCustomElement extends HTMLElement {
  exampleProperty: string;
  optionaProperty?: string;
  writeOnlyProperty: string;
  readonly readOnlyProperty: string;
}
```

```ts
// implementation
interface ExampleCustomProperties {
  readonly exampleProperty: BehaviorSubject<string>;
  readonly optionalProperty: BehaviorSubject<string | undefined>;
  readonly writeOnlyProperty: Subject<string>;
};

export class ExampleCustomElement extends HTMLElement {
  #kp: ExampleCustomProperties;

  constructor() {
    super();
    const exampleProperty = new BehaviorSubject<string>('example');
    const optionalProperty = new BehaviorSubject<string | undefined>(undefined);
    const writeOnlyProperty = new Subject<string>();
    this.#kp = {
      exampleProperty,
      optionalProperty,
      writeOnlyProperty
    };
  }

  set exampleProperty(exampleProperty: string) {
    this.#exampleProperty.next(exampleProperty);
  }

  get exampleProperty(): string {
    return this.#exampleProperty.value;
  }

  set optionalProperty(optionalProperty: string | undefined) {
    this.#optionalProperty.next(optionalProperty);
  }

  get optionalProperty(): string | undefined {
    return this.#optionalProperty.value;
  }

  set writeOnlyProperty(writeOnlyProperty: string) {
    this.#writeOnlyProperty.next(writeOnlyProperty);
  }

  get readOnlyProperty(): string {
    return this.#exampleProperty.value;
  }
}
```


[Properties set before an element is upgraded should be kept]: https://developers.google.com/web/fundamentals/web-components/best-practices#consider-checking-for-properties-that-may-have-been-set-before-the-element-upgraded.