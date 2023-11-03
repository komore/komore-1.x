import { type AwsClient } from '@komore/aws';

import { type xRayCommand } from '../x-ray.command';
import { type xRayError } from '../x-ray.error';
import { type xRayEvent } from '../x-ray.event';
import { type xRayQuery } from '../x-ray.query';
import { type xRayCommandEventMapping } from './x-ray-command-event-mapping';

/**
 * X-Ray client
 */
export type XRayClient = AwsClient<
  typeof xRayCommand,
  typeof xRayCommandEventMapping,
  typeof xRayEvent,
  typeof xRayQuery,
  typeof xRayError
>;
