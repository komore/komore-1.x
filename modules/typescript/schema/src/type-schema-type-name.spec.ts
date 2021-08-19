import { expectTypeOf } from 'expect-type';
import type { _TypeSchema } from './type-schema';
import type { _TypeSchemaTypeName } from './type-schema-type-name';

describe('Type schema type name', () => {
  it('can infer the type name of a type schema', () => {
    given: 'a type name'
    type SchemaTypeName = 'test-schema-type-name';
    and: 'a type schema using that name'
    type TypeSchema = _TypeSchema<SchemaTypeName, boolean>;
    expect: 'the type name to be inferred from the type schema'
    expectTypeOf<_TypeSchemaTypeName<TypeSchema>>().toEqualTypeOf<SchemaTypeName>();
  });
});
