import { factory } from 'typescript';
import type { ElementPropertyDefinition } from '../../../definition/element-property-definition';
import { createTypeScriptPropertyTransformerFactory } from './create-typescript-property-transformer-factory';

describe('Create TypeScript property transformer factory', () => {
  it('works', () => {
    given: 'a property definition recorder'
    const mockPropertyDefinitionRecorder = jest.fn<void, [propertyDefinition: ElementPropertyDefinition]>();
    and: 'a TypeScript property transformer'
    const transformerFactory = createTypeScriptPropertyTransformerFactory(mockPropertyDefinitionRecorder);
    const transformer = transformerFactory(transformationContext);
    and: 'a source with a property definition'
    const sourceFile = createTestSource(`
      import { BehaviorSubject } from 'rxjs';
      export const testProperty = new BehaviorSubject<string | undefined>('test-value');
      const localProperty = 'not-exported';
    `);
    when: 'transforming the source'
    transformer(sourceFile);
    expect: 'property definition recorder to have been called'
    const expectedPropertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createTypeReferenceNode(''),
      isOptional: true,
      isReadOnly: false
    };
    expect(mockPropertyDefinitionRecorder).toHaveBeenCalledTimes(1);
    expect(mockPropertyDefinitionRecorder).toHaveBeenCalledWith(expectedPropertyDefinition);
  });
});
