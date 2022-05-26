import { map, of, type Observable } from '@komore/reactive';
import { detectPackageManagerType } from '../../package/manager/detect-package-manager-type';
import { type WorkspaceConfiguration } from '../workspace-configuration';
import { type JsonWorkspaceConfiguration } from './json-workspace-configuration';

/**
 * Normalizes a workspace's package configuration
 *
 * @param packageConfiguration Package configuration
 * @param basePath Base path
 * @returns Normalized package configuration
 */
export function normalizeWorkspacePackageConfiguration(
  packageConfiguration: JsonWorkspaceConfiguration['package'],
  basePath: string
): Observable<WorkspaceConfiguration['package']> {
  const manager = packageConfiguration?.manager;

  if (manager !== undefined) {
    return of({
      ...packageConfiguration,
      manager,
      options: {
        parallel: 1, // TODO
      },
    });
  }

  return detectPackageManagerType(basePath).pipe(
    map(packageManagerType => ({
      ...packageConfiguration,
      manager: packageManagerType,
      options: {
        parallel: 1, // TODO
      },
    }))
  );
}
