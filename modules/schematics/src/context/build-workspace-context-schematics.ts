import { isDefined } from '@komore/functional';
import { cache, map, ObservableMap, throwUnless, type Observable } from '@komore/reactive';
import { assert } from '@komore/runtime';
import { type InstalledPackageWithPackageJson } from '../package/installed-package-with-package-json';
import { isPackageWithSchematics } from '../package/is-package-with-schematics';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageName } from '../package/package-name';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { buildWorkspaceContextSchematicsExecutor } from './build-workspace-context-schematics-executor';
import { buildWorkspaceContextSchematicsGenerator } from './build-workspace-context-schematics-generator';
import { type WorkspaceContextPackage } from './workspace-context-package';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';

/**
 * Builds a workspace context schematics
 *
 * @param basePath Base path
 * @param contextPackage Context package
 * @returns Workspace context schematics
 */
export function buildWorkspaceContextSchematics(
  basePath: string,
  contextPackage: WorkspaceContextPackage
): WorkspaceContextSchematics {
  const {
    byNameWithPackageJson,
    list: { allWithPackageJson },
  } = contextPackage;
  const withSchematics = allWithPackageJson.pipe(
    map(packagesWithJson => packagesWithJson.filter(isPackageWithSchematics)),
    cache()
  );
  const withSchematicsByName = new ObservableMap(packageNameToPackageWithSchematics(byNameWithPackageJson));
  const executor = buildWorkspaceContextSchematicsExecutor(basePath, withSchematicsByName, withSchematics);
  const generator = buildWorkspaceContextSchematicsGenerator(basePath, withSchematicsByName, withSchematics);

  return {
    executor,
    generator,
    package: {
      withSchematics,
      withSchematicsByName,
    },
  };
}

function packageNameToPackageWithSchematics(
  byNameWithPackageJson: ReadonlyMap<
    PackageName,
    Observable<InstalledPackageWithPackageJson | LocalPackageWithPackageJson>
  >
): (packageName: PackageName) => Observable<PackageWithPackageJsonAndSchematics> {
  return packageName => {
    const packageWithPackageJson$ = byNameWithPackageJson.get(packageName);
    assert(isDefined(packageWithPackageJson$));
    return packageWithPackageJson$.pipe(
      throwUnless(
        isPackageWithSchematics,
        (xyz) => new Error(`TODO: typed; package ${packageName} does not have schematics` + JSON.stringify(xyz, undefined, 2))
      )
    );
  };
}
