import { commandProperties, createCommandType } from '@komore/command';

import { sendGridDomain } from '../sendgrid.domain';
import { type SendGridTemplateId } from '../api/template/id/sendgrid-template-id';
import { type SendGridTemplateVersionId } from '../api/template/id/sendgrid-template-version-id';
import { type SendGridTemplateGenerationType } from '../api/template/sendgrid-template-generation-type';
import { type SendGridTemplateVersion } from '../api/template/sendgrid-template-version';

/**
 * SendGrid template command
 */
export const sendGridTemplateCommand = createCommandType(sendGridDomain, {
  /**
   * Creates a template
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/create-a-transactional-template Create a transactional template}
   */
  createTemplate: commandProperties<{
    /**
     * Template generation type
     *
     * @note Defaults to `'legacy'`
     */
    readonly generation?: SendGridTemplateGenerationType;
    /**
     * Template name
     */
    readonly name: string;
  }>(),
  /**
   * Creates a template version
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates-versions/create-a-new-transactional-template-version Create a new transactional template version}
   */
  createTemplateVersion: commandProperties<
    Pick<SendGridTemplateVersion, 'active' | 'subject'> & Partial<Omit<SendGridTemplateVersion, 'active' | 'subject'>>
  >(),
  /**
   * Deletes a template
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/delete-a-template Delete a template}
   */
  deleteTemplate: commandProperties<{
    /**
     * Identifier of the template used as a source for the duplication
     */
    readonly templateId: SendGridTemplateId;
  }>(),
  /**
   * Deletes a template version
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates-versions/delete-a-transactional-template-version Delete a transactional template version}
   */
  deleteTemplateVersion: commandProperties<{
    /**
     * Template identifier
     */
    readonly templateId: SendGridTemplateId;
    /**
     * Template version identifier
     */
    readonly versionId: SendGridTemplateVersionId;
  }>(),
  /**
   * Duplicates a template
   *
   * @see {@link https://docs.sendgrid.com/api-reference/transactional-templates/duplicate-a-transactional-template Duplicate a transactional template}
   */
  duplicateTemplate: commandProperties<{
    /**
     * New template name
     */
    readonly name: string;
    /**
     * Template identifier
     */
    readonly templateId: SendGridTemplateId;
  }>(),
});
