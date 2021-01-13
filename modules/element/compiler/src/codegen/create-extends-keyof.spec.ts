import { factory } from 'typescript';
import { createExtendsKeyof } from './create-extends-keyof';

describe('Create extends keyof', () => {
  it('creates an extends keyof type parameter declaration', () => {
    // given: a key name and extend type
    const keyName = 'K';
    const type = factory.createTypeReferenceNode('T');
    // when: creating an extends keyof parameter declaration
    const [typeParameterDeclaration, typeReferenceNode] = createExtendsKeyof(factory, keyName, type);
    // then: the correct type parameter declaration is created
    expect(typeParameterDeclaration).toBeInlineSource('K extends keyof T');
    expect(typeReferenceNode).toBeInlineSource('K');
  });
});
