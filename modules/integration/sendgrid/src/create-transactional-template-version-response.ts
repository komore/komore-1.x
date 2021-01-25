import type { SendGridWarning } from './sendgrid-warning';

/**
 * Create transactional template version response
 */
export interface CreateTransactionalTemplateVersionResponse {
  readonly id: string;
  readonly template_id: string;
  readonly updated_at?: string;
  readonly thumbnail_url?: string;
  readonly warnings?: ReadonlyArray<SendGridWarning>;
  readonly active?: 0 | 1;
  readonly name: string;
  readonly html_content?: string;
  readonly plain_content?: string;
  readonly subject: string;
  readonly editor?: 'code' | 'design';
  readonly test_data?: string;  
}
