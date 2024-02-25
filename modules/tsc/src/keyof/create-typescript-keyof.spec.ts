import { factory } from 'typescript';

import { createTypeScriptKeyof } from './create-typescript-keyof';

import { feature } from '@komore/testing';

feature('Create TypeScript keyof', {
  'creates a keyof type operator'() {
    given: 'a type';
    const type = factory.createTypeReferenceNode('T');

    when: 'creating a keyof type operator';
    const typeOperator = createTypeScriptKeyof(factory)(type);

    expect: 'the correct type operator to have been created';
    expect(typeOperator).toBeInlineSource('keyof T');
  },
});
