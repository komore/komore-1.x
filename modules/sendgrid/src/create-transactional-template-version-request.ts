/**
 * Create transactional template version request
 */
export interface CreateTransactionalTemplateVersionRequest {
  readonly template_id: string;
  readonly active: 0 | 1;
  readonly name: string;
  readonly html_content?: string;
  readonly plain_content?: string;
  readonly subject: string;
}
