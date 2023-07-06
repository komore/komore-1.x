import { type SendGridWarning } from './sendgrid-warning';
import { type TransactionalTemplateGenerationType } from './transactional-template-generation-type';

/**
 * Create transactional template response
 */
export interface CreateTransactionalTemplateResponse {
  readonly id: string;
  readonly name: string;
  readonly generation?: TransactionalTemplateGenerationType;
  readonly updated_at?: string;
  readonly versions?: ReadonlyArray<string>;
  readonly warnings?: ReadonlyArray<SendGridWarning>;
}
