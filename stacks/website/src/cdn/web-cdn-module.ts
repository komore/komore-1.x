import { defineModule, importModule, variables } from '@komore/stack';
import { acmCertificateValidatedByDns, cloudFrontDistribution } from '@komore/stack-aws';

/**
 * Web - CDN module
 */
export const webCdnModule = defineModule('cdn', scope$ =>
  scope$.pipe(
    variables({
      bucketId: {
        description: 'Bucket identifier',
        type: 'string',
      },
      domainName: {
        description: 'Domain name',
        type: 'string',
      },
      zoneId: {
        description: 'Zone identifier',
        type: 'string',
      },
    }),
    importModule('certificate', acmCertificateValidatedByDns, ({ variables: { domainName, zoneId } }) => ({
      domainName,
      zoneId,
    })),
    cloudFrontDistribution('distribution', scope => ({
      aliases: ['domain_name_here_variable_from_module_input'],
      customErrorResponse: [
        {
          errorCode: 404,
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
        acmCertificateArn: /*scope.modules.certificate.arn*/'aws_acm_certificate.certificate.arn',
        sslSupportMethod: 'sni-only',
      },
      waitForDeployment: false,
      // TODO: dependsOn: 'aws_acm_certificate_validation.validation'
    }))
  )
);
