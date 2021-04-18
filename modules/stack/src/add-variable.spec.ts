import type { Construct } from 'constructs';
import { expectTypeOf } from 'expect-type';
import { mock } from 'jest-mock-extended';
import { addVariable } from './add-variable';
import { createScope } from './create-scope';
import type { TypedVariable } from './typed-variable';

describe('Add variable', () => {
  it('adds a variable to a scope', () => {
    given: 'a scope';
    const testConstruct = mock<Construct>();
    const testScope = createScope(testConstruct);
    when: 'adding a variable to the scope';
    const testVariable = mock<TypedVariable<'string'>>();
    const scope = addVariable(testScope, 'test_id', testVariable);
    expect: 'the varaible to have properly been added to the scope';
    expect(scope.variables.test_id).toBe(testVariable);
    expectTypeOf(scope.variables.test_id).toEqualTypeOf<TypedVariable<'string'>>();
    and: 'the other scope properties to have been preserved';
    expect(scope.construct).toBe(testScope.construct);
    expect(scope.dataSources).toBe(testScope.dataSources);
    expect(scope.locals).toBe(testScope.locals);
    expect(scope.outputs).toBe(testScope.outputs);
    expect(scope.resources).toBe(testScope.resources);
  });

  it('preserves existing variables', () => {
    given: 'a scope with existing variables';
    const testConstruct = mock<Construct>();
    const existingVariable = mock<TypedVariable<'number'>>();
    const testScope = addVariable(createScope(testConstruct), 'existing_id', existingVariable);
    when: 'adding a variable to the scope';
    const testVariable = mock<TypedVariable<'string'>>();
    const scope = addVariable(testScope, 'test_id', testVariable);
    expect: 'the varaible to have properly been added to the scope';
    expect(scope.variables.test_id).toBe(testVariable);
    expectTypeOf(scope.variables.test_id).toEqualTypeOf<TypedVariable<'string'>>();
    and: 'the existing variable to have been preserved';
    expect(scope.variables.existing_id).toBe(existingVariable);
    expectTypeOf(scope.variables.existing_id).toEqualTypeOf<TypedVariable<'number'>>();
  });
});
