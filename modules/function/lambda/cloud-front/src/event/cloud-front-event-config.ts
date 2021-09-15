import type { CloudFrontEventType } from './cloud-front-event-type';

/**
 * CloudFront event configuration
 */
export interface CloudFrontEventConfig {
  readonly distributionDomainName: string;
  readonly distributionId: string;
  readonly eventType: CloudFrontEventType;
  readonly requestId: string;
}
