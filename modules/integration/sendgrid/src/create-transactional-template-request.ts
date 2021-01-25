/**
 * Create transactional template request
 */
export interface CreateTransactionalTemplateRequest {
  readonly name: string;
  readonly generation?: 'dynamic' | 'legacy';
}
