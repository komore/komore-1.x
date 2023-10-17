import { type CargoPackageWithSource } from '../metadata/cargo-package-with-source';
import { workspaceMemberToPackageFrom } from './workspace-member-to-package-from';

describe('Workspace member to package from', () => {
  it('can map a package identifier to a package', () => {
    given: 'a list of packages';
    const cargoPackage1 = createCargoPackage('package1');
    const cargoPackage2 = createCargoPackage('package2');
    const cargoPackages = [cargoPackage1, cargoPackage2] as const;
    when: 'creating a function that maps a package identifier to a package from the list';
    const func = workspaceMemberToPackageFrom(cargoPackages);
    and: 'calling it with an identifier';
    const cargoPackage = func('package2');
    expect: 'the correct package to have been returned';
    expect(cargoPackage).toBe(cargoPackage2);
  });

  it('throws an error when there is no package matching the package identifier', () => {
    given: 'an empty list of packages';
    const cargoPackages: ReadonlyArray<CargoPackageWithSource> = [];
    when: 'creating a function that maps a package identifier to a package from the list';
    const func = workspaceMemberToPackageFrom(cargoPackages);
    and: 'calling it with an identifier';
    expect: 'an error to be thrown when calling it with an identifier that cannot be matched';
    const errorMessage = 'package missing-package-id not found in the list of workspace packages';
    expect(() => func('missing-package-id')).toThrowError(errorMessage);
  });
});

function createCargoPackage(id: string): CargoPackageWithSource {
  return {
    id
  } as CargoPackageWithSource;
}
