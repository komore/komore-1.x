import { factory } from 'typescript';
import { compileSource } from './compile-source';

const fileContent = `
<script class="MyHtmlElement">
  import { BehaviorSubject } from 'rxjs';
  import type { x } from '@komore/y';
  import from '@komore/some-other-thing';
  export let foo: string; // element property
  export const foo = new BehaviorSubject<string>('helloworld'); // Subject<?> === element property, but readonly
  export const fooReadOnly = of(123); // Observable<?> === readonly property

  let variable = 42;

  function doThis() {
    const value: string = 'abc';
    alert('woot woot', foo + value);
  }

  export function xyz() {
    // element method
    return 1234;
  }
</script>
<style type="text/scss">
  body {
    margin: 0px;
  }
</style>
<hello-world>
  <div>
    <test-element
      #elementReference
      +\${directiveFactory}
      attributeName=\${attributeValue}
      ?attributeName=\${attributeValueBoolean}
      .propertyName=\${propertyValue}
      @event1=\${doThis}
    >
    </test-element>
  </div>
</hello-world>
`;

describe('Compile source', () => {
  it('works', () => {
    compileSource(factory, fileContent);
  });
});
