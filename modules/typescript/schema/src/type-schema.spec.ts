import { expectTypeOf } from 'expect-type';
import type { TypeSchema } from './type-schema';
import { typeSchema } from './type-schema';
import { typeSchemaTypeName } from './type-schema-symbol';

describe('_typeSchema function', () => {
  it('can define a type schema', () => {
    given: 'a schema type name and type'
    const schemaTypeName = 'test-type' as const;
    type SchemaType = { x: number };
    when: 'creating a type schema'
    const schema = typeSchema<typeof schemaTypeName, { x: number }>(schemaTypeName);
    expect: 'a property typed type schema to be created'
    expect(schema[typeSchemaTypeName]).toBe(schemaTypeName);
    expectTypeOf(typeSchema).toEqualTypeOf<TypeSchema<'test-type', SchemaType>>();
  });
});
