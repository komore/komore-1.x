import { expectTypeOf } from 'expect-type';
import { type EmptyScope } from './empty-scope';
import { type ScopeVariables } from './scope-variables';
import { type ScopeWithAddedVariable } from './scope-with-added-variable';

describe('Scope with added variable', () => {
  it('can add a variable to an empty scope', () => {
    given: 'an empty scope';

    when: 'adding a variable to the scope';
    type ScopeWithVariable = ScopeWithAddedVariable<EmptyScope, 'testVariable', string>;

    expect: 'the variable and its type to have been added';
    type VariableTypes = ScopeVariables<ScopeWithVariable>;
    expectTypeOf<VariableTypes>().toEqualTypeOf<{ readonly testVariable: string }>();
  });

  it('can add a variable to a scope that already features variables', () => {
    given: 'a scope that already features variables';
    type ScopeWithVariable = ScopeWithAddedVariable<EmptyScope, 'testVariable', string>;

    when: 'adding a variable to the scope';
    type ScopeWithExtraVariable = ScopeWithAddedVariable<ScopeWithVariable, 'testOtherVariable', number>;

    expect: 'the variable and its type to have been added';
    type VariableTypes = ScopeVariables<ScopeWithExtraVariable>;
    expectTypeOf<VariableTypes>().toEqualTypeOf<{
      readonly testOtherVariable: number;
      readonly testVariable: string;
    }>();
  });
});
