import { type TerraformResource } from 'cdktf';
import { type Construct } from 'constructs';
import { mock } from 'jest-mock-extended';
import { addResource } from './add-resource';
import { createScope } from './create-scope';

describe('Add resource', () => {
  it('adds a resource to a scope', () => {
    given: 'a scope';
    const testConstruct = mock<Construct>();
    const testScope = createScope(testConstruct);
    when: 'adding a resource to the scope';
    const testResource = mock<TerraformResource>();
    const scope = addResource(testScope, 'test_type', 'test_id', testResource);
    expect: 'the resource to have properly been added to the scope';
    expect(scope.resources.test_type.test_id).toBe(testResource);
    and: 'the other scope properties to have been preserved';
    expect(scope.construct).toBe(testScope.construct);
    expect(scope.dataSources).toBe(testScope.dataSources);
    expect(scope.locals).toBe(testScope.locals);
    expect(scope.outputs).toBe(testScope.outputs);
    expect(scope.variables).toBe(testScope.variables);
  });

  it('preserves existing resource types', () => {
    given: 'a scope with existing resource of another type';
    const testConstruct = mock<Construct>();
    const existingResource = mock<TerraformResource>();
    const testScope = addResource(createScope(testConstruct), 'existing_type', 'existing_id', existingResource);
    when: 'adding a resource to the scope';
    const testResource = mock<TerraformResource>();
    const scope = addResource(testScope, 'test_type', 'test_id', testResource);
    expect: 'the resource to have properly been added to the scope';
    expect(scope.resources.test_type.test_id).toBe(testResource);
    and: 'the existing resource type to have been preserved';
    expect(scope.resources.existing_type.existing_id).toBe(existingResource);
  });

  it('preserves existing resources', () => {
    given: 'a scope with an existing resource of the same type';
    const testConstruct = mock<Construct>();
    const resourceType = 'test_type';
    const existingResource = mock<TerraformResource>();
    const existingScope = addResource(createScope(testConstruct), resourceType, 'existing_id', existingResource);
    when: 'adding a resource to the scope';
    const testResource = mock<TerraformResource>();
    const scope = addResource(existingScope, resourceType, 'test_id', testResource);
    expect: 'the resource to have properly been added to the scope';
    expect(scope.resources.test_type.test_id).toBe(testResource);
    and: 'the existing resource to have been preserved';
    expect(scope.resources.test_type.existing_id).toBe(existingResource);
  });
});
