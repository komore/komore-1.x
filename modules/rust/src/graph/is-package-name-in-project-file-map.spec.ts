import { type ProjectFileMap } from '@nrwl/devkit';
import { type CargoPackage } from '../metadata/cargo-package';
import { isPackageNameInProjectFileMap } from './is-package-name-in-project-file-map';

describe('Is package name in project file map', () => {
  it.each([
    ['test-project-name', true],
    ['unknown-project-name', false]
  ])('can test whether a Cargo package name is in a project file map', (name, expectedResult) => {
    given: 'a project file map';
    const projectName = 'test-project-name';
    const projectFileMap: ProjectFileMap = {
      [projectName]: []
    };
    and: 'a Cargo package';
    const cargoPackage: Partial<CargoPackage> = {
      name
    };
    when: 'a function that tests whether a package name is in the project file map';
    const func = isPackageNameInProjectFileMap(projectFileMap);
    and: 'calling the function with a Cargo package';
    const result = func(cargoPackage as CargoPackage);
    expect: 'the function to return true if the Cargo package was found in the map';
    expect(result).toBe(expectedResult);
  });
});
