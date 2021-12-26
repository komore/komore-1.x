import { factory } from 'typescript';
import { type CompilerContext } from '../codegen/compiler-context';
import { createFromAttributeVariableStatement } from './create-from-attribute-variable-statement';

describe('Create fromAttribute variable statement', () => {
  it('can create a fromAttribute variable statement', () => {
    given: 'a variable name and type';
    const variableName = 'testName';
    const variableTypeName = 'TestType';
    const variableType = factory.createTypeReferenceNode(variableTypeName);
    and: 'a subject expression';
    const subjectName = 'testSubject';
    const subjectExpression = factory.createIdentifier(subjectName);
    and: 'a compiler context';
    const filterImportName = 'testFilter';
    const filterImport = factory.createIdentifier(filterImportName);
    const compilerContext: CompilerContext = {
      factory,
      import: jest.fn(() => filterImport)
    };
    when: 'creating a fromAttribute variable declaration';
    const [declaration, identifier] = createFromAttributeVariableStatement(
      compilerContext,
      variableName,
      variableType,
      subjectExpression
    );
    expect: 'a correctly typed fromAttribute function declaration to have been created';
    expect(declaration).toBeSource(`
      const ${variableName}: ${variableTypeName} = name => ${subjectName}.pipe(${filterImportName}(({ attributeName }) => attributeName === name));
    `);
    expect(identifier.text).toBe(variableName);
  });
});
