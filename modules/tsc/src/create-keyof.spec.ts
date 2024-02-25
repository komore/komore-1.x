import { factory } from 'typescript';
import { createKeyof } from './create-keyof';

describe('Create keyof', () => {
  it('creates a keyof type operator', () => {
    given: 'a type';
    const type = factory.createTypeReferenceNode('T');
    when: 'creating a keyof type operator';
    const typeOperator = createKeyof(factory, type);
    expect: 'the correct type operator to have been created';
    expect(typeOperator).toBeInlineSource('keyof T');
  });
});
