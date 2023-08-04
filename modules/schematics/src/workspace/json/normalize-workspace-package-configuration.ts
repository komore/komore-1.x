import { map, of, type Observable } from '@komore/reactive';

import { detectPackageManagerType } from '../../package/manager/detect-package-manager-type';
import { validatePackageManagerType } from '../../package/manager/validate-package-manager-type';
import { type WorkspacePackageConfiguration } from '../workspace-package-configuration';
import { type WorkspacePackageConfigurationJson } from './workspace-package-configuration-json';

/**
 * Normalizes a workspace's package configuration
 *
 * @param packageConfiguration Package configuration
 * @param basePath Base path
 * @returns Normalized package configuration
 */
export function normalizeWorkspacePackageConfiguration(
  packageConfiguration: WorkspacePackageConfigurationJson | undefined,
  basePath: string
): Observable<WorkspacePackageConfiguration> {
  const manager = packageConfiguration?.manager;
  const scope = packageConfiguration?.scope ?? basePath.substring(basePath.lastIndexOf('/') + 1);

  if (manager !== undefined) {
    validatePackageManagerType(manager);
  }

  if (manager !== undefined) {
    return of({
      manager,
      scope,
    });
  }

  return detectPackageManagerType(basePath).pipe(
    map(packageManagerType => ({
      manager: packageManagerType,
      scope,
    }))
  );
}
