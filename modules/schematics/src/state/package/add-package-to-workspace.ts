import { first, mergeMap } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { type PackageName } from '../../package/name/package-name';
import { type PackageDependencyType } from '../../package/manager/package-dependency-type';

/**
 * Creates a function that adds a package to a workspace
 *
 * @param workspaceContext Workspace context
 * @returns Function that adds a package to a workspace
 */
export function addPackageToWorkspace(
  workspaceContext: WorkspaceContext
): (packageName: PackageName, packageVersion: string, type: PackageDependencyType) => Observable<void> {
  return (packageName, packageVersion, type) =>
    workspaceContext.package.manager.pipe(
      first(),
      mergeMap(packageManager => packageManager.addPackage(packageName, packageVersion, type))
    );
}
