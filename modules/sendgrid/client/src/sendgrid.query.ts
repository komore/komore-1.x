import { createQueryType, queryProperties } from '@komore/query';

import { type SendGridTemplateId } from './api/templates/id/sendgrid-template-id';
import { sendGridDomain } from './sendgrid.domain';
import { SendGridTemplate } from '.';
import { SendGridApiWarning } from './api/sendgrid-api-warning';

/**
 * SendGrid query
 */
export const sendGridQuery = createQueryType(sendGridDomain, {
  /**
   * Returns a template
   *
   * @param templateId Template identifier
   * @returns Transactional template
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/retrieve-a-single-transactional-template Retrieve a single transactional template}
   */
  getTemplate: queryProperties<
    {
      /**
       * Template
       */
      readonly template: SendGridTemplate;
      /**
       * SendGrid API warning
       */
      readonly warning?: SendGridApiWarning;
    },
    {
      /**
       * SendGrid template identifier
       */
      readonly templateId: SendGridTemplateId;
    }
  >(),
});
