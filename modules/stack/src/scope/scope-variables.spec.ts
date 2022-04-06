import { type ReadonlyRecord } from '@komore/typescript';
import { expectTypeOf } from 'expect-type';
import { type EmptyScope } from './empty-scope';
import { type ScopeVariables } from './scope-variables';
import { type ScopeWithAddedVariable } from './scope-with-added-variable';

describe('Scope variables', () => {
  it('can extract the variable types from an empty scope', () => {
    given: 'an empty scope';

    when: 'getting the variable types';
    type VariableTypes = ScopeVariables<EmptyScope>;

    expect: 'a object with the variable and its type';
    expectTypeOf<VariableTypes>().toEqualTypeOf<ReadonlyRecord<string, never>>();
  });

  it('can extract the variable types from a scope with a variable', () => {
    given: 'an scope with variables';
    type ScopeWithVariables = ScopeWithAddedVariable<EmptyScope, 'testVariable', string>;

    when: 'getting the variable types';
    type VariableTypes = ScopeVariables<ScopeWithVariables>;

    expect: 'an empty object type';
    expectTypeOf<VariableTypes>().toEqualTypeOf<{ readonly testVariable: string }>();
  });
});
