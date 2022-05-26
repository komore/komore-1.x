import { type ProjectFileMap } from '@nrwl/devkit';
import { type CargoPackage } from '../metadata/cargo-package';

/**
 * Returns a function that tests whether a Cargo package name is present in a project file map
 * @param projectFileMap Project file map
 * @returns Function that tests whether a Cargo package name is present in the project file map
 */
export function isPackageNameInProjectFileMap(projectFileMap: ProjectFileMap): (cargoPackage: CargoPackage) => boolean {
  return ({ name }) => name in projectFileMap;
}
