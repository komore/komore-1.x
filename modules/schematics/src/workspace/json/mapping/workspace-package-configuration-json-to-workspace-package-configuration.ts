import { map, of } from '@komore/reactive';

import { detectPackageManagerType } from '../../../package/manager/detect-package-manager-type';
import { validatePackageManagerType } from '../../../package/manager/validate-package-manager-type';
import { type WorkspacePackageConfiguration } from '../../workspace-package-configuration';
import { type WorkspacePackageConfigurationJson } from './../workspace-package-configuration-json';

/**
 * Creates a function that returns a workspace's package configuration, given a JSON workspace package configuration
 *
 * @param basePath Base path
 * @returns Function that returns a workspace's package configuration, given a JSON workspace package configuration
 */
export function workspacePackageConfigurationJsonToWorkspacePackageConfiguration(
  basePath: string
): (packageConfiguration: WorkspacePackageConfigurationJson) => Observable<WorkspacePackageConfiguration> {
  return ({ scope: scopeJson, manager }) => {
    const scope = scopeJson ?? basePath.substring(basePath.lastIndexOf('/') + 1);

    if (manager !== undefined) {
      validatePackageManagerType(manager);
      return of({
        manager,
        scope,
      });
    }

    return detectPackageManagerType(basePath).pipe(
      map(manager => ({
        manager,
        scope,
      }))
    );
  };
}
