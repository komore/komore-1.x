# Element slots

TODO:

Similar to ng-content

But the user selects the destination

```html
<!-- component.html -->
<ng-content select="some-selector"></ng-content>
<ng-content></ng-content>
<!-- usage.html -->
<example-component>
  <some-selector></some-selector>
  <something-else></something-else>
</example-component>
```

=>

```html
<!-- element.html -->
<slot name="target"></slot>
<slot></slot>
<!-- usage.html -->
<example-component>
  <some-selector slot="target"></some-selector>
  <something-else></something-else>
</example-component>
```
