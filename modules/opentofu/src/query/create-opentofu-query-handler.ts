import { matchQuery } from '@komore/query';

import { getOpenTofuVersion } from './get-opentofu-version';
import { type OpenTofuQueryHandler } from './opentofu-query-handler';
import { type OpenTofuQueryHandlerOptions } from './opentofu-query-handler-options';

/**
 * Creates an OpenTofu query handler
 *
 * @param handlerOptions OpenTofu query handler options
 * @returns OpenTofu query handler
 */
export function createOpenTofuQueryHandler(handlerOptions: OpenTofuQueryHandlerOptions): OpenTofuQueryHandler {
  const { workingDirectory } = handlerOptions;
  return query =>
    matchQuery(query, {
      providers: () => getOpenTofuProviders(workingDirectory),
      show,
      version: () => getOpenTofuVersion(workingDirectory),
    });
}
