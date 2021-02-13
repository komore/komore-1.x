import type { MockProxy } from 'jest-mock-extended';
import { mock } from 'jest-mock-extended';
import type { EmptyStatement, NodeFactory, TransformationContext } from 'typescript';
import { factory } from 'typescript';
import type { ElementPropertyDefinition } from '../../../definition/element-property-definition';
import { createTypeScriptPropertyTransformerFactory } from './create-typescript-property-transformer-factory';

describe('Create TypeScript property transformer factory', () => {
  let mockTransformationContext: MockProxy<TransformationContext> & TransformationContext;
  const mockEmptyStatement = mock<EmptyStatement>();

  beforeEach(() => {
    mockTransformationContext = mock<TransformationContext>();
    (mockTransformationContext as any).factory = mock<NodeFactory>();
    mockTransformationContext.factory.createEmptyStatement.mockReturnValueOnce(mockEmptyStatement);
  });

  it.skip('works', () => {
    given: 'a property definition recorder'
    const mockPropertyDefinitionRecorder = jest.fn<void, [propertyDefinition: ElementPropertyDefinition]>();
    and: 'a property transformer'
    const transformerFactory = createTypeScriptPropertyTransformerFactory(mockPropertyDefinitionRecorder);
    const transformer = transformerFactory(mockTransformationContext);
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
