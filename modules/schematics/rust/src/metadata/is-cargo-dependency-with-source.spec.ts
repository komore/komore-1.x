import { type CargoDependency } from './cargo-dependency';
import { isCargoDependencyWithSource } from './is-cargo-dependency-with-source';

describe('Is Cargo dependency with source', () => {
  it.each([
    ['test-source', true],
    [null, false]
  ])('can test whether a Cargo dependency has a source', (source, expectedResult) => {
    given: 'a Cargo dependency';
    const cargoDependency: Partial<CargoDependency> = {
      source
    };
    when: 'testing whether it has a source';
    const result = isCargoDependencyWithSource(cargoDependency as CargoDependency);
    expect: 'true to have been returned if the Cargo dependency has a source';
    expect(result).toBe(expectedResult);
  });
});
