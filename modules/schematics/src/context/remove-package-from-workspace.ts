import { mergeMap, take, type Observable } from '@komore/reactive';
import { type WorkspaceContext } from './workspace-context';

/**
 * Creates a function that remove a package from a workspace
 *
 * @param workspaceContext Workspace context
 * @returns Function that removes a package from a workspace
 */
export function removePackageFromWorkspace(
  workspaceContext: WorkspaceContext
): (packageName: string) => Observable<void> {
  return packageName =>
    workspaceContext.package.manager.pipe(
      take(1),
      mergeMap(packageManager => packageManager.removePackage(packageName))
    );
}
