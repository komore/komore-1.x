import { expectTypeOf } from 'expect-type';
import type { TypeSchema } from './type-schema';
import type { TypeSchemaType } from './type-schema-type';

describe('Type schema type', () => {
  it('can infer the type name of a type schema', () => {
    given: 'a schema type';
    type SchemaType = boolean;
    and: 'a type schema using that schema type';
    type TestTypeSchema = TypeSchema<'test', SchemaType>;
    when: 'getting the type from a type schema';
    type Result = TypeSchemaType<TestTypeSchema>;
    expect: 'the type to have been inferred from the type schema';
    expectTypeOf<Result>().toEqualTypeOf<SchemaType>();
  });
});
