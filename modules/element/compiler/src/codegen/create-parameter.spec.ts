import { factory } from 'typescript';
import { createParameter } from './create-parameter';

describe('Create parameter', () => {
  it('can create parameters', () => {
    // given: a parameter name and type
    const parameterName = 'testParameter';
    const parameterType = factory.createTypeReferenceNode('TestType');
    // when: creating a parameter
    const parameterDeclaration = createParameter(factory, parameterName, parameterType);
    // then: the correct parameter declaration is created
    expect(parameterDeclaration).toBeInlineSource('testParameter: TestType');
  });

  it('can create optional parameters', () => {
    // given: a parameter name and type
    const parameterName = 'testParameter';
    const parameterType = factory.createTypeReferenceNode('TestType');
    // when: creating an optional parameter
    const parameterDeclaration = createParameter(factory, parameterName, parameterType, true);
    // then: the correct parameter declaration is created
    expect(parameterDeclaration).toBeInlineSource('testParameter?: TestType');
  });

  it ('can create parameters with default values', () => {
    // given: a parameter name, type and initializer
    const parameterName = 'testParameter';
    const parameterType = factory.createTypeReferenceNode('TestType');
    const initializer = factory.createNumericLiteral(42);
    // when: creating a parameter with an initializer
    const parameterDeclaration = createParameter(factory, parameterName, parameterType, false, initializer);
    // then: the correct parameter declaration is created
    expect(parameterDeclaration).toBeInlineSource('testParameter: TestType = 42');
  });
})
