import { compileSource } from './compile-source';

const fileContent = `
<script class="MyHtmlElement">
  declare class 
  import type { x } from '@komore/y';
  import from '@komore/some-other-thing';
  export let foo: string; // element property
  export const fooReadOnly = 'helloworld'; // element property, but readonly

  export function doThis() {
    alert('woot woot', foo);
  }
</script>
<style type="text/scss">
  body {
    margin: 0px;
  }
</style>
<hello-world>
  <div>
    Div1
  </div>
  <div>
    Div2
  </div>
</hello-world>
`;

describe('Compile source', () => {
  it('works', () => {
    compileSource(fileContent);
  });
});
