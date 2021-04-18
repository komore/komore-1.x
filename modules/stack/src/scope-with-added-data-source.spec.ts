import { TerraformDataSource } from 'cdktf';
import { expectTypeOf } from 'expect-type';
import type { DataSourceMap } from './data-source-map';
import type { ResourceMap } from './resource-map';
import type { Scope } from './scope';
import type { ScopeWithAddedDataSource } from './scope-with-added-data-source';
import type { TypedLocal } from './typed-local';
import type { TypedOutput } from './typed-output';
import type { TypedVariable } from './typed-variable';
import type { Types } from './types';

class TestDataSource extends TerraformDataSource {}

describe('Scope with added data source', () => {
  it('defines a scope type with the data source', () => {
    given: 'a generic scope';
    type ScopeType = Scope;
    when: 'defining a scope type with an additional data source';
    type NewScopeType = ScopeWithAddedDataSource<ScopeType, 'ds_type', TestDataSource, 'ds_id'>;
    expect: 'the defined scope to include the additional data source';
    expectTypeOf<NewScopeType['dataSources']['ds_type']['ds_id']>().toEqualTypeOf<TestDataSource>();
  });

  it('keeps existing properties of the scope', () => {
    given: 'a scope type with def';
    class ExistingDataSource extends TerraformDataSource {}
    type TestScope = Scope<
      Record<string, TypedVariable<keyof Types>>,
      Record<string, TypedLocal<keyof Types>>,
      Record<string, TypedOutput<keyof Types>>,
      Record<string, ResourceMap<string>>,
      Record<'existing_ds_type', DataSourceMap<'existing_ds_id', ExistingDataSource>>
    >;
    when: 'defining a scope type with an additional data source';
    type NewScope = ScopeWithAddedDataSource<TestScope, 'ds_type', TestDataSource, 'ds_id'>;
    expect: 'the defined scope to have kept the existing scope properties';
    expectTypeOf<NewScope['locals']>().toEqualTypeOf<TestScope['locals']>();
    expectTypeOf<NewScope['resources']>().toEqualTypeOf<TestScope['resources']>();
    expectTypeOf<NewScope['outputs']>().toEqualTypeOf<TestScope['outputs']>();
    expectTypeOf<NewScope['variables']>().toEqualTypeOf<TestScope['variables']>();
    expectTypeOf<NewScope['dataSources']['existing_ds_type']['existing_ds_id']>().toEqualTypeOf<ExistingDataSource>();
  });
});
