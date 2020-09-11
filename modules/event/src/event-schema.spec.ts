import { schema } from './event-schema';

/**
 * Event schema specification
 */
describe('Event schema', () => {
  it('can define a schema', () => {
    // given: a schema
    const s = schema<{}>();
    // expect: the schema object to be properly created
    expect(s._t).toBe('schema');
    expect(s._s).toBeUndefined();
  });
});
