import { jsonToObject } from '@komore/json';
import { map, throwOnError } from '@komore/reactive';
import { executeChildProcess } from '@komore/node/process';

import { AzCliNotFoundError } from './az-cli-not-found-error';
import { type AzCliVersionDetails } from './az-cli-version-details';

/**
 * Returns the az CLI version, if available
 *
 * @param basePath Base path
 * @returns az CLI version
 */
export function getAzCliVersion(basePath: string): Observable<string> {
  // TODO: move to @komore/azure/cli
  return executeChildProcess('az version --output=json', { cwd: basePath }).pipe(
    throwOnError(() => new AzCliNotFoundError('az CLI not found')),
    map(output => output.stdout),
    map(jsonToObject<AzCliVersionDetails>()),
    throwOnError(() => new AzCliNotFoundError('unable to parse the az CLI version')),
    map(versionDetails => versionDetails['azure-cli'])
  );
}
