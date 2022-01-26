[//]: #title 'Element Function'
[//]: #description 'komore element compiler design: element function'
[//]: #keyword 'element'
[//]: #keyword 'compiler'
[//]: #keyword 'design'
[//]: #keyword 'function'
[//]: #keyword '@komore/element'
[//]: #keyword '@komore/element/compiler'
[//]: #path 'modules/element/compiler/design/function'

# Element function

## Overview

An element's behavior is defined via its script block.

An element script block may contain:

- Imports
- Exported properties and methods
- The script implementation itself

Following komore's functional programming principles, an element's behavior is defined via a single function.

## Function signature

The function signature depends on the overall element implementation:

- The function input is based on the ambient functions used by the implementation
- The function output is based on the properties, methods and observables defined by the implementation

### this context

The element function exists outside the custom element class.

However, the host element is accessible via `this` as it would be within the class implementation:

```html
<script>
  this.setAttribute('attr1', 'value1');
</script>
```

```ts
function elementName(this: ElementName): void {
  this.setAttribute('attr1', 'value1');
}
```

### Imports

A script block may import anything a normal module would.

Imports are moved outside the function.

```html
<script>
  import { x } from 'y';
  x();
</script>
```

```ts
import { x } from 'y';

function elementName(this: ElementName): void {
  x();
}
```

### Arguments

A number of ambient functions are made available to the element script block: `fromAttribute`, `fromChild`,
`fromHostEvent`, `fromSlot`, etc.

The ambient functions used within the script block determine the shape of the function input interface.

```html
<script>
  const attr1$ = fromAttribute('attr1');
  const slot1$ = fromSlot('slot1');
</script>
```

```ts
interface ϰElementNameInput {
  readonly fromAttribute: FromAttribute<keyof ElementNameAttributeMap>;
  readonly fromSlot: FromSlot<keyof ElementNameSlotMap>;
}

function elementName(this: ElementName, { fromAttribute, fromSlot }: ϰElementNameInput): void {
  const attr1$ = fromAttribute('attr1');
  const slot1$ = fromSlot('slot1');
}
```

The function input interface name is based on the name of the element class.

### Return value

An element script block may export variables and functions, which are turned into [properties] and [methods].

The exported variables and functions determine the shape of the function output interface.

```html
<script>
  export const property1 = (new BehaviorSubject() < string) | (undefined > undefined);

  export function method1() {
    property1.next('example');
  }
</script>
```

```ts
interface ϰElementNameProperties {
  readonly property1: BehaviorSubject<string | undefined>;
}

interface ϰElementNameOutput {
  readonly ϕ: ϰElementNameProperties;
}

function elementName(this: ElementName): ϰElementNameOutput {
  const property1 = new BehaviorSubject<string | undefined>(undefined);

  function method1() {
    property1.next('example');
  }

  return {
    ϕ: {
      property1
    },
    µ: {
      method1
    }
  };
}
```

An element script may also define observables that will be managed by the element compiler.

Such observables use the `$` label and are merged into a single observable that gets added to the function output.

```html
<script>
  import { timer, tap } from '@komore/reactive';

  $: timer(0, 1000).pipe(tap(i => console.log('timer 1', i)));

  $: timer(0, 400).pipe(tap(i => console.log('timer 2', i)));
</script>
```

```ts
import { merge, timer, tap } from '@komore/reactive';

interface ϰElementNameOutput {
  readonly $: Observable<unknown>;
}

function elementName(this: ElementName): ϰElementNameOutput {
  const ϰ$: Array<Observable<unknown>> = [];

  ϰ$.push(timer(0, 1000).pipe(tap(i => console.log('timer 1', i))));

  ϰ$.push(timer(0, 400).pipe(tap(i => console.log('timer 2', i))));

  return {
    $: merge(ϰ$)
  };
}
```

## Lifecycle

The function is called once, when the element is instantiated.

### Preparing inputs

Before calling the function, its inputs are prepared.

```html
<script>
  import { timer, tap } from '@komore/reactive';

  export const property1 = (new BehaviorSubject() < string) | (undefined > undefined);

  export function method1() {
    property1.next('example');
  }

  $: timer(0, 1000).pipe(tap(i => console.log('timer 1', i)));
</script>
```

```ts
class ElementName {
  #ϰ: {
    readonly ϕ: ϰElementNameProperties;
  };

  constructor() {
    const fromAttribute =
  }

  readonly
}
```

### Storing outputs

After calling the function, its outputs are stored.

```html
<script>
  import { timer, tap } from '@komore/reactive';

  export const property1 = (new BehaviorSubject() < string) | (undefined > undefined);

  export function method1() {
    property1.next('example');
  }

  $: timer(0, 1000).pipe(tap(i => console.log('timer', i)));
</script>
```

```ts
class ElementName {
  #ϰ: {
    readonly ϕ: ϰElementNameProperties;
  };

  constructor() {
    const { $, ϕ, µ } = elementName.apply(this);
    this.#ϰ = { ϕ, $ };
    this.method1 = µ.method1;
  }

  readonly method1: () => void;
}
```

### Subscription management

An element script block may delegate the management of observables to the element compiler.

The subscription to the merged observables is created when the element is added to the DOM.

The subscription is released when the element is removed from the DOM.

```html
<script>
  import { timer, tap } from '@komore/reactive';

  $: timer(0, 1000).pipe(tap(i => console.log('timer', i)));
</script>
```

```ts
class ElementName {
  #ϰ: {
    s?: Subscription;
    readonly $: Observable<unknown>;
  };

  constructor() {
    const { $ } = elementName.apply(this);
    this.#ϰ = { ϕ, $ };
    this.method1 = µ.method1;
  }

  connectedCallback(): void {
    this.#ϰ.s = this.#ϰ.$.subscribe();
  }

  disconnectedCallback(): void {
    this.#ϰ.s?.unsubscribe();
  }
}
```

## Testing

TODO

[methods]: ./methods.md
[properties]: ./properties.md
