import type { MockProxy } from 'jest-mock-extended';
import { mock } from 'jest-mock-extended';
import type { EmptyStatement, NodeFactory, TransformationContext } from 'typescript';
import type { ElementMethodDefinition } from '../../../definition/element-method-definition';
import { createTypeScriptMethodTransformerFactory } from './create-typescript-method-transformer-factory';

describe('Create TypeScript method transformer factory', () => {
  let mockTransformationContext: MockProxy<TransformationContext> & TransformationContext;
  const mockEmptyStatement = mock<EmptyStatement>();
  
  beforeEach(() => {
    mockTransformationContext = mock<TransformationContext>();
    (mockTransformationContext as any).factory = mock<NodeFactory>();
    mockTransformationContext.factory.createEmptyStatement.mockReturnValueOnce(mockEmptyStatement);
  });
  
  it('todo', () => {
    given: 'a method definition recorder'
    const mockMethodDefinitionRecorder = jest.fn<void, [methodDefinition: ElementMethodDefinition]>();
    and: 'a method transformer'
    const transformerFactory = createTypeScriptMethodTransformerFactory(mockMethodDefinitionRecorder);
    const transformer = transformerFactory(mockTransformationContext);
    and: 'a source with an exported function'
    const functionName = 'testMethod';
    const sourceFile = createTestSource(`
      export function ${functionName}(): void {}
    `);
    transformer(sourceFile); // TODO: test returned source file node
    expect: 'the method definition recorder to have been called with the method definition'
    expect(mockMethodDefinitionRecorder).toHaveBeenCalledTimes(1);
    const methodDefinition = mockMethodDefinitionRecorder.mock.calls[0][0];
    expect(methodDefinition.functionName).toBe(functionName);
    expect(methodDefinition.functionDeclaration).toBeInlineSource(`export function ${functionName}(): void { }`);
  });

  it('ignores functions that are not exported', () => {
    given: 'a method definition recorder'
    const mockMethodDefinitionRecorder = jest.fn<void, [methodDefinition: ElementMethodDefinition]>();
    and: 'a method transformer'
    const transformerFactory = createTypeScriptMethodTransformerFactory(mockMethodDefinitionRecorder);
    const transformer = transformerFactory(mockTransformationContext);
    and: 'a source with a function that is not exported'
    const functionName = 'testMethod';
    const sourceFile = createTestSource(`
      export function ${functionName}(): void {}
    `);
    transformer(sourceFile); // TODO: test returned source file node
    expect: 'the method definition recorder to have been called with the method definition'
    expect(mockMethodDefinitionRecorder).toHaveBeenCalledTimes(1);
    const methodDefinition = mockMethodDefinitionRecorder.mock.calls[0][0];
    expect(methodDefinition.functionName).toBe(functionName);
    expect(methodDefinition.functionDeclaration).toBeInlineSource(`export function ${functionName}(): void { }`);
  });
});
