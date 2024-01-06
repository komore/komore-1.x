import { jsonToObject } from '@komore/json';
import { childProcessOutputToStdout, executeChildProcess } from '@komore/node/process';
import { map, throwOnError, type Observable } from '@komore/reactive';

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
export function getOpenTofuProviders(workingDirectory: string): Observable<OpenTofuVersion> {
  return executeChildProcess(`tofu providers`, { cwd: workingDirectory }).pipe(
    throwOnError(openTofuError.notFound),
    map(childProcessOutputToStdout),
    map(jsonToObject<OpenTofuVersionJson>()),
    map(opentofuVersionJsonToOpenTofuVersion)
  );
}

/*
tofu providers

Providers required by configuration:
.
└── provider[registry.opentofu.org/hashicorp/aws]
*/

/*
tofu providers schema -json

<overkill>
*/
