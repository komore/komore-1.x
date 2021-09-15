import type { CloudFrontEventConfig } from './cloud-front-event-config';

/**
 * CloudFront event
 */
export interface CloudFrontEvent {
  readonly config: CloudFrontEventConfig;
}
