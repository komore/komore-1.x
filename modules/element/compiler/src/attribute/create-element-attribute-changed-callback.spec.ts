import { factory } from 'typescript';
import { createElementAttributeChangedCallback } from './create-element-attribute-changed-callback';

describe('Create element attribute changed callback', () => {
  it('creates a correct attributeChangedCallback method definition', () => {
    // given:
    // when:
    const methodDeclaration = createElementAttributeChangedCallback(factory);
    // then:
    expect(methodDeclaration).toBeSource(`
      attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void {
        const attr$ = this._k_attrs[name];
        attr$.next(newValue ?? undefined);
      }
    `);
  });
});
