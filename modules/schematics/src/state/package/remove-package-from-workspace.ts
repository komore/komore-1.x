import { first, mergeMap } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { type PackageName } from '../../package/name/package-name';

/**
 * Creates a function that remove a package from a workspace
 *
 * @param workspaceContext Workspace context
 * @returns Function that removes a package from a workspace
 */
export function removePackageFromWorkspace(
  workspaceContext: WorkspaceContext
): (packageName: PackageName) => Observable<void> {
  return packageName =>
    workspaceContext.package.manager.pipe(
      first(),
      mergeMap(packageManager => packageManager.removePackage(packageName))
    );
}
