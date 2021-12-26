import { expectTypeOf } from 'expect-type';
import { type TypeSchema } from './type-schema';
import { type TypeSchemaTypeName } from './type-schema-type-name';

describe('Type schema type name', () => {
  it('can infer the type name of a type schema', () => {
    given: 'a type name'
    type SchemaTypeName = 'test-schema-type-name';
    and: 'a type schema using that name'
    type TestTypeSchema = TypeSchema<SchemaTypeName, boolean>;
    expect: 'the type name to be inferred from the type schema'
    expectTypeOf<TypeSchemaTypeName<TestTypeSchema>>().toEqualTypeOf<SchemaTypeName>();
  });
});
