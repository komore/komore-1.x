import { pipe } from '@komore/reactive';
import { type GenericScope, type ScopedConfiguration } from '@komore/stack';
import { route53Record } from '../route-53/route-53-record';
import { acmCertificate } from './acm-certificate';
import { type AcmCertificateValidatedByDnsOptions } from './acm-certificate-validated-by-dns-options';
import { acmCertificateValidation } from './acm-certificate-validation';

/**
 * Adds an ACM certificate resource validated via a DNS record
 *
 * @param resourceId Resource identifier
 * @param config ACM certificate configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function acmCertificateValidatedByDns<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, AcmCertificateValidatedByDnsOptions>
) {
  const recordResourceId = `${resourceId}ValidationRecord` as const;
  const validationResourceId = `${resourceId}Validation` as const;

  return pipe(
    acmCertificate(resourceId, {
      lifecycle: {
        createBeforeDestroy: true,
      },
      ...config,
      validationMethod: 'DNS',
    }),
    route53Record(recordResourceId, ({ variables: { domainName: _ }, resources: { [resourceId]: certificate } }) => ({
      allowOverwrite: true,
      name: certificate.domainValidationOptions[0].type, // TODO: loop, creating one record each time
      ttl: 60,
      type: certificate.domainValidationOptions[0].type,
      zoneId: config.zoneId(),
    })),
    acmCertificateValidation(
      validationResourceId,
      ({ resources: { [resourceId]: certificate, [recordResourceId]: validationRecord } }) => ({
        certificateArn: certificate.arn,
        validationRecordFqdns: validationRecords.map().fqdn,
      }),
    )
  );
}
