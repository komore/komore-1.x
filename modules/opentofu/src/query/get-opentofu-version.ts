import { jsonToObject } from '@komore/json';
import { childProcessOutputToStdout, executeChildProcess } from '@komore/node/process';
import { map, throwOnError } from '@komore/reactive';

import { openTofuError } from '../opentofu.error';
import { type OpenTofuVersion } from './opentofu-version';
import { type OpenTofuVersionJson } from './opentofu-version-json';
import { opentofuVersionJsonToOpenTofuVersion } from './opentofu-version-json-to-opentofu-version';

/**
 * Returns the OpenTofu version
 *
 * @param workingDirectory Working directory
 * @returns OpenTofu version
 */
export function getOpenTofuVersion(workingDirectory: string): Observable<OpenTofuVersion> {
  return executeChildProcess(`tofu version -json`, { cwd: workingDirectory }).pipe(
    throwOnError(openTofuError.notFound),
    map(childProcessOutputToStdout),
    map(jsonToObject<OpenTofuVersionJson>()),
    map(opentofuVersionJsonToOpenTofuVersion)
  );
}
