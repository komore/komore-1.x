import { createEventType, eventProperties } from '@komore/event';

import { type SendGridTemplateId } from './api/templates/id/sendgrid-template-id';
import { type SendGridTemplateVersionId } from './api/templates/id/sendgrid-template-version-id';
import { sendGridDomain } from './sendgrid.domain';
import { type SendGridTemplate } from './api/templates/sendgrid-template';
import { type SendGridApiWarning } from './api/sendgrid-api-warning';
import { SendGridTemplateVersion } from './api/templates/sendgrid-template-version';

/**
 * SendGrid event
 */
export const sendGridEvent = createEventType(sendGridDomain, {
  /**
   * A template has been created
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/create-a-transactional-template Create a transactional template}
   */
  templateCreated: eventProperties<{
    /**
     * Created template
     */
    readonly template: SendGridTemplate;
    /**
     * Warning
     */
    readonly warning?: SendGridApiWarning;
  }>(),
  /**
   * A template has been deleted
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/delete-a-template Delete a template}
   */
  templateDeleted: eventProperties<{
    /**
     * Template identifier
     */
    readonly templateId: SendGridTemplateId;
  }>(),
  /**
   * A template has been duplicated
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/duplicate-a-transactional-template Duplicate a transactional template}
   */
  templateDuplicated: eventProperties<{
    /**
     * Original template identifier
     */
    readonly originalTemplateId: SendGridTemplateId;
    /**
     * Duplicated template
     */
    readonly template: SendGridTemplate;
    /**
     * Warning
     */
    readonly warning?: SendGridApiWarning;
  }>(),
  /**
   * A template version has been created
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates-versions/create-a-new-transactional-template-version Create a new transactional template version}
   */
  templateVersionCreated: eventProperties<{
    /**
     * Created template version
     */
    readonly templateVersion: SendGridTemplateVersion;
    /**
     * Warning
     */
    readonly warning?: SendGridApiWarning;
  }>(),
  /**
   * A template version has been deleted
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates-versions/delete-a-transactional-template-version Delete a transactional template version}
   */
  templateVersionDeleted: eventProperties<{
    /**
     * Template identifier
     */
    readonly templateId: SendGridTemplateId;
    /**
     * Template version identifier
     */
    readonly versionId: SendGridTemplateVersionId;
  }>(),
});
