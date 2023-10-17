import { type CargoPackageWithSource } from '../metadata/cargo-package-with-source';
import { packageForDependencySource } from './package-for-dependency-source';

describe('Package for dependency source', () => {
  it.each([
    ['test-source/x/y/z', true],
    ['unknown-source/x/y/z', false]
  ])(
    'creates a function that returns true when a package source matches a dependency source',
    (source, expectedResult) => {
      given: 'a Cargo package';
      const cargoPackage: Partial<CargoPackageWithSource> = {
        source
      };
      when: 'creating a function that tests whether a package matches a dependency source';
      const func = packageForDependencySource('test-source');
      and: 'calling it';
      const result = func(cargoPackage as CargoPackageWithSource);
      expect: 'true to have been returned when the package matches';
      expect(result).toBe(expectedResult);
    }
  );
});
