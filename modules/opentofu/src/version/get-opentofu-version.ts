import { jsonToObject } from '@komore/json';
import { childProcessOutputToStdout, executeChildProcess } from '@komore/node';
import { map, throwOnError, type Observable } from '@komore/reactive';

import { openTofuError } from '../opentofu.error';
import { type OpenTofuVersion } from './opentofu-version';
import { type OpenTofuVersionJson } from './opentofu-version-json';
import { opentofuVersionJsonToOpenTofuVersion } from './opentofu-version-json-to-opentofu-version';

/**
 * Returns the OpenTofu version
 *
 * @param basePath Base path
 * @returns OpenTofu version
 */
export function getOpenTofuVersion(basePath: string): Observable<OpenTofuVersion> {
  return executeChildProcess(`tofu version -json`, { cwd: basePath }).pipe(
    throwOnError(() => openTofuError.notFound()),
    map(childProcessOutputToStdout),
    map(jsonToObject<OpenTofuVersionJson>()),
    map(opentofuVersionJsonToOpenTofuVersion)
  );
}
