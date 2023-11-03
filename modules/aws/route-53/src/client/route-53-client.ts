import { type AwsClient } from '@komore/aws';

import { type route53Command } from '../route-53.command';
import { type route53Event } from '../route-53.event';
import { type route53Query } from '../route-53.query';
import { type route53Error } from '../route-53.error';
import { type route53CommandEventMapping } from './route-53-command-event-mapping';

/**
 * Route 53 client options
 */
export type Route53Client = AwsClient<
  typeof route53Command,
  typeof route53CommandEventMapping,
  typeof route53Event,
  typeof route53Query,
  typeof route53Error
>;
