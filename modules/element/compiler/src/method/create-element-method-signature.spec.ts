import { type ElementMethodDefinition } from '@komore/element/compiler/processor';
import { factory, type ParameterDeclaration, SyntaxKind, type TypeParameterDeclaration } from 'typescript';
import { createElementMethodSignature } from './create-element-method-signature';

describe('Create element method signature', () => {
  const functionName = 'testFunction';
  const returnType = 'number';

  function createMethodDefinition(
    parameters?: ReadonlyArray<ParameterDeclaration>,
    typeParameters?: ReadonlyArray<TypeParameterDeclaration>
  ): ElementMethodDefinition {
    const type = factory.createKeywordTypeNode(SyntaxKind.NumberKeyword);
    const body = factory.createBlock([], true);
    const functionDeclaration = factory.createFunctionDeclaration(
      undefined,
      undefined,
      undefined,
      functionName,
      typeParameters,
      parameters ?? [],
      type,
      body
    );
    return {
      functionDeclaration,
      functionName
    };
  }

  it('can create a simple element method signature', () => {
    given: 'a simple element method definition';
    const methodDefinition = createMethodDefinition();
    when: 'creating an element method signature';
    const [methodSignature, methodIdentifier] = createElementMethodSignature(factory, methodDefinition);
    expect: 'the method signature to match the function it is based on';
    expect(methodSignature).toBeInlineSource(`${functionName}(): ${returnType};`);
    and: 'the method identifier to be the same as the function it is based on';
    expect(methodIdentifier.text).toBe(functionName);
  });

  it('can create an element method signature from a function with parameters', () => {
    given: 'an element method definition with a parameter';
    const parameterName = 'testParam';
    const parameterDeclaration = factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      parameterName,
      undefined,
      factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      undefined
    );
    const methodDefinition = createMethodDefinition([parameterDeclaration]);
    when: 'creating an element method signature';
    const [methodSignature] = createElementMethodSignature(factory, methodDefinition);
    expect: 'the method signature to include the parameters matching the function it is based on';
    expect(methodSignature).toBeInlineSource(`${functionName}(${parameterName}: string): ${returnType};`);
  });

  it('can create an element method signature from a function with parameters', () => {
    given: 'an element method definition with a parameter';
    const parameterName = 'testParam';
    const parameterDeclaration = factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      parameterName,
      undefined,
      factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      undefined
    );
    const methodDefinition = createMethodDefinition([parameterDeclaration]);
    when: 'creating an element method signature';
    const [methodSignature] = createElementMethodSignature(factory, methodDefinition);
    expect: 'the method signature to include the parameters matching the function it is based on';
    expect(methodSignature).toBeInlineSource(`${functionName}(${parameterName}: string): ${returnType};`);
  });
});
