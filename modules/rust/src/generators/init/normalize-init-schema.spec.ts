import { type InitSchema } from './init-schema';
import { normalizeInitSchema } from './normalize-init-schema';

describe('Normalize init schema', () => {
  it('provides default values when properties are not set', () => {
    given: 'a schema without properties';
    const schema: Partial<InitSchema> = {};
    when: 'normalizing the schema';
    const normalizedSchema = normalizeInitSchema(schema);
    expect: 'default values to have been provided in the normalized schema';
    expect(normalizedSchema.channel).toBe('stable');
  });

  it('does not replace properties that have been set', () => {
    given: 'a schema with properties set';
    const schema: InitSchema = {
      channel: 'test-channel'
    };
    when: 'normalizing the schema';
    const normalizedSchema = normalizeInitSchema(schema);
    expect: 'existing properties not to have been replaced';
    expect(normalizedSchema.channel).toBe(schema.channel);
  });
});
