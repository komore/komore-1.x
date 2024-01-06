import { cache, map, ObservableMap } from '@komore/reactive';

import { isPackageWithSchematics } from '../package/is-package-with-schematics';
import { packageNameToPackageWithSchematics } from '../package/package-name-to-package-with-schematics';
import { buildWorkspaceContextSchematicsExecutor } from './build-workspace-context-schematics-executor';
import { buildWorkspaceContextSchematicsGenerator } from './build-workspace-context-schematics-generator';
import { type WorkspaceContextPackage } from './workspace-context-package';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';

/**
 * Retrrns a function that builds a workspace context schematics
 *
 * @param basePath Base path
 * @returns Function that builds a workspace context schematics
 */
export function buildWorkspaceContextSchematics(
  basePath: string
): (contextPackage: WorkspaceContextPackage) => WorkspaceContextSchematics {
  const buildSchematicsExecutor = buildWorkspaceContextSchematicsExecutor(basePath);
  const buildSchematicsGenerator = buildWorkspaceContextSchematicsGenerator(basePath);

  return contextPackage => {
    const {
      byNameWithPackageJson,
      list: { allWithPackageJson },
    } = contextPackage;
    const withSchematics = allWithPackageJson.pipe(
      map(packagesWithJson => packagesWithJson.filter(isPackageWithSchematics)),
      cache()
    );
    const withSchematicsByName = new ObservableMap(packageNameToPackageWithSchematics(byNameWithPackageJson));
    const executor = buildSchematicsExecutor(withSchematicsByName, withSchematics);
    const generator = buildSchematicsGenerator(withSchematicsByName, withSchematics);

    return {
      executor,
      generator,
      package: {
        withSchematics,
        withSchematicsByName,
      },
    };
  };
}
