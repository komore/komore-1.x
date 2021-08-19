import { buildNodeHostOptions } from './build-node-host-options';

describe('Build Node host options', () => {
  it('returns an options object with default values', () => {
    when: 'building a Node host options';
    const options = buildNodeHostOptions();
    expect: 'the correct default values to have been set';
    expect(options.exitTimeout).toBe(0);
  })
});
