# Best Practices

## Scripts

## Styles


### Block style

A custom element has an `inline` display style by default.

When necessary, the display style can be change on the host:

```css
:host:not([hidden]) {
  display: flex;
}
```

The `not([hidden])` selector should be included as it ensures the default behavior for elements with a `hidden`
attribute - `display: none` - does not get overriden.

## Templates

## Useful links

- [Google Web Fundamentals Best Practices]

[google web fundamentals best practices]: https://developers.google.com/web/fundamentals/web-components/best-practices
