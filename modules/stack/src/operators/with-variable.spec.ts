import { firstValueFrom, of } from '@komore/reactive';
import { type GenericScope, type TypedVariable } from '@komore/stack';
import { type Construct } from 'constructs';
import { expectTypeOf } from 'expect-type';
import { mock } from 'jest-mock-extended';
import { withVariable } from './with-variable';
jest.mock('cdktf');

describe('With variable', () => {
  const construct = mock<Construct>();

  it('can add a string variable', async () => {
    given: 'a scope';
    const variableName = 'test';
    const scope: GenericScope = {
      construct,
      variables: {},
      resources: {}
    };
    const scope$ = of(scope);
    when: 'adding a string variable to the scope';
    const $ = scope$.pipe(
      withVariable(variableName, String)
    );
    const updatedScope = await firstValueFrom($);
    expect: 'the variable to have been added to the scope';
    expect(updatedScope.variables.test).toBeDefined();
    const variable = updatedScope.variables.test;
    expect(variable.name).toBe(variableName);
    expect(variable.type).toBe('string');
    expect(variable.terraformVariable).toBeDefined();
    and: 'the scope variable to be properly typed';
    expectTypeOf(updatedScope.variables.test).toEqualTypeOf<TypedVariable<'string'>>();
  });

  it('can add a number variable', async () => {
    given: 'a scope';
    const variableName = 'test';
    const scope: GenericScope = {
      construct,
      variables: {},
      resources: {}
    };
    const scope$ = of(scope);
    when: 'adding a number variable to the scope';
    const $ = scope$.pipe(
      withVariable(variableName, Number)
    );
    const updatedScope = await firstValueFrom($);
    expect: 'the variable to have been added to the scope';
    expect(updatedScope.variables.test).toBeDefined();
    const variable = updatedScope.variables.test;
    expect(variable.name).toBe(variableName);
    expect(variable.type).toBe('number');
    expect(variable.terraformVariable).toBeDefined();
    and: 'the scope variable to be properly typed';
    expectTypeOf(updatedScope.variables.test).toEqualTypeOf<TypedVariable<'number'>>();
  });

  it('can add a boolean variable', async () => {
    given: 'a scope';
    const variableName = 'test';
    const scope: GenericScope = {
      construct,
      variables: {},
      resources: {}
    };
    const scope$ = of(scope);
    when: 'adding a boolean variable to the scope';
    const $ = scope$.pipe(
      withVariable(variableName, Boolean)
    );
    const updatedScope = await firstValueFrom($);
    expect: 'the variable to have been added to the scope';
    expect(updatedScope.variables.test).toBeDefined();
    const variable = updatedScope.variables.test;
    expect(variable.name).toBe(variableName);
    expect(variable.type).toBe('boolean');
    expect(variable.terraformVariable).toBeDefined();
    and: 'the scope variable to be properly typed';
    expectTypeOf(updatedScope.variables.test).toEqualTypeOf<TypedVariable<'boolean'>>();
  });
});
