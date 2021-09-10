import { factory } from 'typescript';
import type { CompilerContext } from '../codegen/compiler-context';
import { createFromAttributeFunction } from './create-from-attribute-function';

describe('Create fromAttribute function', () => {
  it('can create a fromAttribute arrow function', () => {
    given: 'a subject expression';
    const subjectName = 'testSubject';
    const subjectExpression = factory.createIdentifier(subjectName);
    and: 'a compiler context';
    const filterImportName = 'testFilter';
    const filterImport = factory.createIdentifier(filterImportName);
    const compilerContext: CompilerContext = {
      factory,
      import: jest.fn(() => filterImport)
    };
    when: 'creating a fromAttribute function';
    const arrowFunction = createFromAttributeFunction(compilerContext, subjectExpression);
    expect: 'a correct fromAttribute function implementation to have been created';
    expect(arrowFunction).toBeSource(`
      name => ${subjectName}.pipe(${filterImportName}(({ attributeName }) => attributeName === name))
    `);
    and: 'a context import to have been made for the filter operator function';
    expect(compilerContext.import).toHaveBeenCalledTimes(1);
    expect(compilerContext.import).toHaveBeenCalledWith({ path: '@komore/reactive/operators', name: 'filter' });
  });
});
