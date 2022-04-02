import { defineModule, variable } from '@komore/stack';
import { acmCertificateValidatedByDns, cloudFrontDistribution } from '@komore/stack-amazon';

/**
 * Web - CDN module
 */
export const webCdnModule = defineModule('cdn', scope$ =>
  scope$.pipe(
    variable('bucket_id', {
      description: 'Bucket identifier',
      type: 'string',
    }),
    variable('domainName', {
      description: 'Domain name',
      type: 'string',
    }),
    variable('zoneId', {
      description: 'Zone identifier',
      type: 'string',
    }),
    acmCertificateValidatedByDns('certificate', scope => ({
      domainName: scope.variables.domainName.stringValue,
      zoneId: scope.variables.zoneId.stringValue,
    })),
    cloudFrontDistribution('distribution', _scope => ({
      aliases: ['domain_name_here_variable_from_module_input'],
      customErrorResponse: [
        {
          errorCode: 404 + _scope.variables,
          responseCode: 404,
          responsePagePath: '/index.html',
        },
      ],
      defaultCacheBehavior: {
        allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
        cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
        defaultTtl: 600,
        forwardedValues: {
          cookies: {
            forward: 'none',
          },
          headers: ['Origin'],
          queryString: true,
        },
        maxTtl: 3600,
        minTtl: 0,
        targetOriginId: 'local.origin_id',
        viewerProtocolPolicy: 'redirect-to-https',
      },
      defaultRootObject: 'index.html',
      enabled: true,
      isIpv6Enabled: true,
      origin: [
        {
          domainName: 'bucket_domain_name',
          originId: 'local.origin_id',
          originPath: 'local.origin_path',
          s3OriginConfig: {
            originAccessIdentity: 'cloudfront_access_identity_path',
          },
        },
      ],
      priceClass: 'PriceClass_200',
      restrictions: {
        geoRestriction: {
          restrictionType: 'none',
        },
      },
      viewerCertificate: {
        acmCertificateArn: 'aws_acm_certificate.certificate.arn',
        sslSupportMethod: 'sni-only',
      },
      waitForDeployment: false,
      // TODO: dependsOn: 'aws_acm_certificate_validation.validation'
    }))
  )
);
