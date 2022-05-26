import { type CargoPackage } from './cargo-package';
import { isCargoPackageWithSource } from './is-cargo-package-with-source';

describe('Is Cargo package with source', () => {
  it.each([
    ['test-source', true],
    [null, false]
  ])('can test whether a Cargo package has a source', (source, expectedResult) => {
    given: 'a Cargo package';
    const cargoPackage: Partial<CargoPackage> = {
      source
    };
    when: 'testing whether it has a source';
    const result = isCargoPackageWithSource(cargoPackage as CargoPackage);
    expect: 'true to have been returned if the Cargo package has a source';
    expect(result).toBe(expectedResult);
  });
});
