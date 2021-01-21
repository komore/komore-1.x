import { factory } from 'typescript';
import { createElementAttributeChangedCallback } from './create-element-attribute-changed-callback';

describe('Create element attribute changed callback', () => {
  it('creates a correct attributeChangedCallback method definition', () => {
    when: 'creating an element attribute changed callback'
    const methodDeclaration = createElementAttributeChangedCallback(factory);
    then: 'a declaration for an attributeChangedCallback method is created'
    expect(methodDeclaration).toBeSource(`
      attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void {
        const attr$ = this._k_attrs[name];
        attr$.next(newValue ?? undefined);
      }
    `);
  });
});
