import { type acm } from '@cdktf/provider-aws';

/**
 * ACM certificate validated by DNS options
 */
export interface AcmCertificateValidatedByDnsOptions extends Omit<acm.AcmCertificateConfig, 'validationMethod'> {
  /**
   * Zone identifier
   *
   * The zone identifier is usually obtained from an `aws_route53_zone` {@link route53Zone resource} or {@link importRoute53Zone data source}
   */
  readonly zoneId: string;
}
