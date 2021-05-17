import { factory } from 'typescript';
import { createParameter } from './create-parameter';

describe('Create parameter', () => {
  it('can create parameters', () => {
    given: 'a parameter name and type';
    const parameterName = 'testParameter';
    const parameterType = 'TestType';
    const parameterTypeNode = factory.createTypeReferenceNode(parameterType);
    when: 'creating a parameter';
    const [declaration, identifier] = createParameter(factory, parameterName, parameterTypeNode);
    expect: 'a correct parameter declaration with the right name and type to have been created';
    expect(declaration).toBeInlineSource(`${parameterName}: ${parameterType}`);
    expect(identifier.text).toBe(parameterName);
  });

  it('can create optional parameters', () => {
    given: 'a parameter name and type';
    const parameterName = 'testParameter';
    const parameterType = 'TestType';
    const parameterTypeNode = factory.createTypeReferenceNode(parameterType);
    when: 'creating an optional parameter';
    const [declaration, identifier] = createParameter(factory, parameterName, parameterTypeNode, true);
    expect: 'a correct parameter declaration with a question token to have been created';
    expect(declaration).toBeInlineSource(`${parameterName}?: ${parameterType}`);
    expect(identifier.text).toBe(parameterName);
  });

  it('can create parameters with default values', () => {
    given: 'a parameter name, type and initializer';
    const parameterName = 'testParameter';
    const parameterType = 'TestType';
    const parameterTypeNode = factory.createTypeReferenceNode(parameterType);
    const initialValue = 42;
    const initializer = factory.createNumericLiteral(initialValue);
    when: 'creating a parameter with an initializer';
    const [declaration, identifier] = createParameter(factory, parameterName, parameterTypeNode, false, initializer);
    expect: 'a correct parameter declaration with an initializer expression to have been created';
    expect(declaration).toBeInlineSource(`${parameterName}: ${parameterType} = ${initialValue}`);
    expect(identifier.text).toBe(parameterName);
  });
});
