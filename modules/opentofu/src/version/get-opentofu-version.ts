import { jsonToObject } from '@komore/json';
import { map, throwOnError } from '@komore/reactive';

import { type OpenTofuCliClient } from '../opentofu-cli-client';
import { openTofuCliError } from '../opentofu-cli.error';
import { type OpenTofuVersion } from './opentofu-version';
import { type OpenTofuVersionJson } from './opentofu-version-json';
import { opentofuVersionJsonToOpenTofuVersion } from './opentofu-version-json-to-opentofu-version';

/**
 * Creates a function that returns the OpenTofu version
 *
 * @returns Function that returns the OpenTofu version
 */
export function getOpenTofuVersion(cliClient: OpenTofuCliClient): () => Observable<OpenTofuVersion> {
  return () =>
    cliClient(['version', '-json']).pipe(
      throwOnError(openTofuCliError.notFound),
      map(jsonToObject<OpenTofuVersionJson>()),
      map(opentofuVersionJsonToOpenTofuVersion)
    );
}
