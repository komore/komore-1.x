import { factory } from 'typescript';

import { feature } from '@komore/testing';

import { createTypeScriptExtendsKeyof } from './create-typescript-extends-keyof';

feature('Create extends keyof', {
  'creates an extends keyof type parameter declaration'() {
    given: 'a key name and extend type';
    const keyName = 'K';
    const type = factory.createTypeReferenceNode('T');

    when: 'creating an extends keyof parameter declaration';
    const [typeParameterDeclaration, typeReferenceNode] = createTypeScriptExtendsKeyof(factory)({ keyName, type });

    expect: 'the correct type parameter declaration to have been created';
    expect(typeParameterDeclaration).toBeInlineSource('K extends keyof T');
    expect(typeReferenceNode).toBeInlineSource('K');
  },
});
