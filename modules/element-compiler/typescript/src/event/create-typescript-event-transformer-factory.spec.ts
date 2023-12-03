import { mock, type MockProxy } from 'jest-mock-extended';
import { type EmptyStatement, type NodeFactory, type TransformationContext } from 'typescript';
import { createTypeScriptEventTransformerFactory } from './create-typescript-event-transformer-factory';

describe('Create TypeScript event transformer factory', () => {
  let mockTransformationContext: MockProxy<TransformationContext> & TransformationContext;
  const mockEmptyStatement = mock<EmptyStatement>();

  beforeEach(() => {
    mockTransformationContext = mock<TransformationContext>();
    (mockTransformationContext as any).factory = mock<NodeFactory>();
    mockTransformationContext.factory.createEmptyStatement.mockReturnValueOnce(mockEmptyStatement);
  });

  it('todo', () => {
    createTypeScriptEventTransformerFactory(() => {});
  });
});
