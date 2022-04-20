import { createCliFlag } from './create-cli-flag';

describe('Create CLI flag', () => {
  it('works', () => {
    given: 'a flag type name';
    const type = 'string';
    and: 'a description';
    const description = 'Test flag';

    given: 'creating a CLI flag';
    const cliFlag = createCliFlag({
      type,
      description,
    });

    then: 'the CLI flag has the correct type and description';
    expect(cliFlag.type).toBe(type);
    expect(cliFlag.description).toBe(description);
    and: 'the CLI flag is not required';
    expect(cliFlag.required).toBe(false);
  });
});
