import { type Route53ApiClient } from '@komore/aws/route-53';
import { type CommandEventRecorder } from '@komore/client';

import { type route53Command } from '../route-53.command';
import { type route53Event } from '../route-53.event';

/**
 * Route 53 command handler options
 */
export interface Route53CommandHandlerOptions {
  /**
   * Route 53 API client
   */
  readonly apiClient: Route53ApiClient;
  /**
   * Route 53 client events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof route53Command, typeof route53Event>;
}
