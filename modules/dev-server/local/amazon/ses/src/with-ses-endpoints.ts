import { HttpMethods, withHttpEndpoint as on } from '@komore/api/http';
import { createConfigurationSet } from './commands/create-configuration-set';
import { createConfigurationSetEventDestination } from './commands/create-configuration-set-event-destination';
import { createContact } from './commands/create-contact';
import { createContactList } from './commands/create-contact-list';
import { createCustomVerificationEmailTemplate } from './commands/create-custom-verification-email-template';
import { createDedicatedIpPool } from './commands/create-dedicated-ip-pool';
import { getDedicatedIp } from './commands/get-dedicated-ip';
import { getDedicatedIps } from './commands/get-dedicated-ips';
import { sendEmail } from './commands/send-email';
import { tagResource } from './commands/tag-resource';
import { testRenderEmailTemplate } from './commands/test-render-email-template';
import { untagResource } from './commands/untag-resource';
import { updateCustomVerificationEmailTemplate } from './commands/update-custom-verification-email-template';
import { updateEmailIdentityPolicy } from './commands/update-email-identity-policy';
import { updateEmailTemplate } from './commands/update-email-template';

const { DELETE, GET, POST, PUT } = HttpMethods;

/**
 * Adds SES endpoints to a pipeline
 */
export const withSesEndpoints = on('/ses/v2/email',
  on('/configuration-sets',
    on(POST, createConfigurationSet),
    on('/:ConfigurationSetName/event-destinations',
      on(POST, createConfigurationSetEventDestination)
    ),
  ),
  on('/contact-lists',
    on(POST, createContactList),
    on('/:ContactListName/contacts',
      on(POST, createContact)
    )
  ),
  on('/custom-verification-email-templates',
    on(POST, createCustomVerificationEmailTemplate),
    on('/:TemplateName',
      on(PUT, updateCustomVerificationEmailTemplate)
    )
  ),
  on('/dedicated-ips',
    on(GET, '?NextToken=:NextToken&PageSize=:PageSize&PoolName=:PoolName', getDedicatedIps),
    on(GET, '/:IP', getDedicatedIp)
  ),
  on('/dedicated-ip-pools',
    on(POST, createDedicatedIpPool)
  ),
  on('/identities',
    on('/:EmailIdentity',
      on('/policies',
        on('/:PolicyName',
          on(PUT, updateEmailIdentityPolicy)
        )
      )
    )
  ),
  on('/outbound-emails',
    on(POST, sendEmail)
  ),
  on('/tags',
    on(POST, tagResource),
    on(DELETE, '?ResourceArn=:ResourceArn&TagKeys=:TagKeys[]', untagResource)
  ),
  on('/templates',
    on('/:TemplateName',
      on(PUT, updateEmailTemplate),
      on('/render',
        on(POST, testRenderEmailTemplate)
      )
    )
  )
);
