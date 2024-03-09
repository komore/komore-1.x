import { createAwsClient } from '@komore/aws/client';

import { xRayCommand } from '../x-ray.command';
import { xRayError } from '../x-ray.error';
import { xRayEvent } from '../x-ray.event';
import { xRayQuery } from '../x-ray.query';
import { type XRayClient } from './x-ray-client';
import { xRayClientCommandEventMap } from './x-ray-client-command-event-map';
import { type XRayClientOptions } from './x-ray-client-options';

/**
 * Creates an X-Ray client
 *
 * @param options X-Ray client options
 * @returns X-Ray client
 */
export function createXRayClient(options: XRayClientOptions): XRayClient {
  return createAwsClient({
    command: xRayCommand,
    commandEventMapping: xRayClientCommandEventMap,
    error: xRayError,
    event: xRayEvent,
    options,
    queryType: xRayQuery,
  });
}
