import { mergeMap, take, type Observable } from '@komore/reactive';
import { type PackageDependencyType } from '../package/package-dependency-type';
import { type WorkspaceContext } from './workspace-context';

/**
 * Creates a function that adds a package to a workspace
 *
 * @param workspaceContext Workspace context
 * @returns Function that adds a package to a workspace
 */
export function addPackageToWorkspace(
  workspaceContext: WorkspaceContext
): (packageName: string, packageVersion: string, type: PackageDependencyType) => Observable<void> {
  return (packageName, packageVersion, type) =>
    workspaceContext.package.manager.pipe(
      take(1),
      mergeMap(packageManager => packageManager.addPackage(packageName, packageVersion, type))
    );
}
