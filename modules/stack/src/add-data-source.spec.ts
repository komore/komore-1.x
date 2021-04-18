import { TerraformDataSource } from 'cdktf';
import type { Construct } from 'constructs';
import { mock } from 'jest-mock-extended';
import { addDataSource } from './add-data-source';
import { createScope } from './create-scope';

describe('Add data source', () => {
  it('adds a data source to a scope', () => {
    given: 'a scope';
    const testConstruct = mock<Construct>();
    const testScope = createScope(testConstruct);
    when: 'adding a data source to the scope';
    const testDataSource = mock<TerraformDataSource>();
    const scope = addDataSource(testScope, 'test_type', 'test_id', testDataSource);
    expect: 'the data source to have properly been added to the scope';
    expect(scope.dataSources.test_type.test_id).toBe(testDataSource);
    and: 'the other scope properties to have been preserved';
    expect(scope.construct).toBe(testScope.construct);
    expect(scope.locals).toBe(testScope.locals);
    expect(scope.outputs).toBe(testScope.outputs);
    expect(scope.resources).toBe(testScope.resources);
    expect(scope.variables).toBe(testScope.variables);
  });

  it('preserves existing data source types', () => {
    given: 'a scope with existing data source of another type';
    const testConstruct = mock<Construct>();
    const existingDataSource = mock<TerraformDataSource>();
    const testScope = addDataSource(createScope(testConstruct), 'existing_type', 'existing_id', existingDataSource);
    when: 'adding a data source to the scope';
    const testDataSource = mock<TerraformDataSource>();
    const scope = addDataSource(testScope, 'test_type', 'test_id', testDataSource);
    expect: 'the data source to have properly been added to the scope';
    expect(scope.dataSources.test_type.test_id).toBe(testDataSource);
    and: 'the existing data source type to have been preserved';
    expect(scope.dataSources.existing_type.existing_id).toBe(existingDataSource);
  });

  it('preserves existing data sources', () => {
    given: 'a scope with an existing data source of the same type';
    const testConstruct = mock<Construct>();
    const dataSourceType = 'test_type';
    const existingDataSource = mock<TerraformDataSource>();
    const existingScope = addDataSource(createScope(testConstruct), dataSourceType, 'existing_id', existingDataSource);
    when: 'adding a data source to the scope';
    class TestDataSource extends TerraformDataSource {}
    const dataDataSource = mock<TestDataSource>();
    const scope = addDataSource(existingScope, dataSourceType, 'test_id', dataDataSource);
    expect: 'the data source to have properly been added to the scope';
    expect(scope.dataSources.test_type.test_id).toBe(dataDataSource);
    and: 'the existing data sources to have been preserved';
    expect(scope.dataSources.test_type.existing_id).toBe(existingDataSource);
  });
});
