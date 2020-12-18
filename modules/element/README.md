# komore Element

Reactive, observable [custom elements].

```ts
defineElement('my-custom-element', {
  // blah attributes/props/events/state schemas
})`
  <div>
    ${x where x is T | Observable<T> | (state: Observable<State>) => Observable<T>}
  </div>
`
```

## Templates

Templates - HTML, SVG and CSS - use TypeScript tagged templates.

```ts
html`<element>${contentValue}</element>`
```

```ts
html`<element attributeName=${attributeValue}>`
html`<element ?attributeName=${booleanAttributePresence}>`
```

```ts
html`<element .propertyName=${propertyValue}>`
```

```ts
html`<element @eventType=${event => {}}>`
html`<element @eventType=${{ handler: event => {}, options }}>`
```

```ts
html`<element ${directive}>`
```



[custom elements]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
