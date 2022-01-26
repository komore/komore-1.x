import { createMockElementCompilerContext } from '../test-helpers.spec';
import { createFromAttributeVariableStatement } from './create-from-attribute-variable-statement';

describe('Create a fromAttribute variable statement', () => {
  it('creates a fromAttribute variable statement', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an attribute changed event observable';
    const attributeChangedName = 'attributeChanged';
    const attributeChanged = context.factory.createIdentifier(attributeChangedName);
    when: 'creating a fromAttribute variable statement';
    const variableName = 'testVariableName';
    const [variableStatement, identifier] = createFromAttributeVariableStatement(
      context,
      variableName,
      attributeChanged
    );
    expect: 'a variable initialized with the result of a toAttributeOf call to have been created';
    expect(variableStatement).toBeInlineSource(
      `const ${variableName} = toAttributeFrom(this, ${attributeChangedName});`
    );
    and: 'the variable to have the correct name';
    expect(identifier.text).toBe(variableName);
    and: 'the toAttributeOf function to have been imported from @komore/element';
    expect(context.resolveImport).toHaveBeenCalledTimes(1);
    expect(context.resolveImport).toHaveBeenCalledWith({ name: 'toAttributeFrom', path: '@komore/element' });
  });
});
