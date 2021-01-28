import { factory } from 'typescript';
import { ElementDefinition } from '../definition/element-definition';
import { createElementClassDeclaration } from './create-element-class-declaration';
import { createElementClassSource } from './create-element-class-source';

describe('Create element class source', () => {
  it('works', () => {
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className: 'TestElement',
      tagName: 'test-element'
    };
    const classDeclaration = createElementClassDeclaration(factory, elementDefinition, undefined, undefined);
    createElementClassSource(factory, classDeclaration);
  });
});
