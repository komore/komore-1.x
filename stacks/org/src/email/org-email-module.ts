import { defineModule, variable } from '@komore/stack';
import { sesConfigurationSet, sesEmailIdentity } from '@komore/stack-amazon';

/**
 * Organization stack - email module
 *
 * - Amazon SES configuration set
 * - Amazon SES email identity
 * - MX records with the GSuite verification token
 * - TXT records for DKIM, SPF, DMARC and BIMI
 * - TXT record for Amazon SES validation
 */
export const orgEmailModule = defineModule('email', $ =>
  $.pipe(
    variable('emailLocalPart', {
      description: 'Email address local part (e.g. "contact" for contact@domain.name)',
      type: 'string',
    }),
    variable('emailDomainName', {
      description: 'Email domain name',
      type: 'string',
    }),
    variable('gsuiteVerificationToken', {
      description: 'GSuite verification token',
      type: 'string',
    }),
    variable('zoneId', {
      description: 'Hosted zone identifier for the domain',
      type: 'string',
    }),
    sesConfigurationSet('configurationSet', {
      deliveryOptions: {
        tlsPolicy: 'Require',
      },
      name: 'komore-dev',
      reputationMetricsEnabled: false,
      sendingEnabled: true,
    }),
    sesEmailIdentity('identity', ({ variables }) => ({
      email: `${variables.contactEmail}`,
    }))
  )
);
