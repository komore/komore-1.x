import { XRayClient as AwsXRayClient } from '@aws-sdk/client-xray';

import { createAwsClient } from '@komore/aws';

import { xRayCommand } from '../x-ray.command';
import { xRayError } from '../x-ray.error';
import { xRayEvent } from '../x-ray.event';
import { xRayQuery } from '../x-ray.query';
import { type XRayClient } from './x-ray-client';
import { type XRayClientOptions } from './x-ray-client-options';
import { xRayCommandEventMapping } from './x-ray-command-event-mapping';

/**
 * Creates an X-Ray client
 *
 * @param options X-Ray client options
 * @returns X-Ray client
 */
export function createXRayClient(options: XRayClientOptions): XRayClient {
  return createAwsClient({
    commandEventMapping: xRayCommandEventMapping,
    commandType: xRayCommand,
    constructor: AwsXRayClient,
    error: xRayError,
    eventType: xRayEvent,
    options,
    queryType: xRayQuery,
  });
}
