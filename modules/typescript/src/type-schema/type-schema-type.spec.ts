import { expectTypeOf } from 'expect-type';
import type { _TypeSchema } from './type-schema';
import type { _TypeSchemaType } from './type-schema-type';

describe('Type schema type', () => {
  it('can infer the type name of a type schema', () => {
    given: 'a schema type'
    type SchemaType = boolean;
    and: 'a type schema using that schema type'
    type TypeSchema = _TypeSchema<'test', SchemaType>;
    expect: 'the schema type to be inferred from the type schema'
    expectTypeOf<_TypeSchemaType<TypeSchema>>().toEqualTypeOf<SchemaType>();
  });
});
