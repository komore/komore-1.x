import { expectTypeOf } from 'expect-type';
import { type EmptyScope } from './empty-scope';
import { type ScopeVariables } from './scope-variables';
import { type ScopeWithAddedVariable } from './scope-with-added-variable';
import { type ScopeWithAddedVariables } from './scope-with-added-variables';

describe('Scope with added variables', () => {
  it('can add variables to an empty scope', () => {
    given: 'an empty scope';

    when: 'adding variables to the scope';
    type ScopeWithVariable = ScopeWithAddedVariables<
      EmptyScope,
      {
        readonly testVariable1: string;
        readonly testVariable2: number;
      }
    >;

    expect: 'the variable and its type to have been added';
    type VariableTypes = ScopeVariables<ScopeWithVariable>;
    expectTypeOf<VariableTypes>().toEqualTypeOf<{
      readonly testVariable1: string;
      readonly testVariable2: number;
    }>();
  });

  it('can add a variable to a scope that already features variables', () => {
    given: 'a scope that already features variables';
    type ScopeWithVariable = ScopeWithAddedVariable<EmptyScope, 'existingVariable', boolean>;

    when: 'adding variables to the scope';
    type ScopeWithExtraVariables = ScopeWithAddedVariables<
      ScopeWithVariable,
      {
        readonly testVariable1: string;
        readonly testVariable2: number;
      }
    >;

    expect: 'the variables and their types to have been added';
    type VariableTypes = ScopeVariables<ScopeWithExtraVariables>;
    expectTypeOf<VariableTypes>().toEqualTypeOf<{
      readonly existingVariable: boolean;
      readonly testVariable1: string;
      readonly testVariable2: number;
    }>();
  });
});
