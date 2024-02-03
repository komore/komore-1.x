import { type UUID } from '@komore/uuid';

/**
 * Notion error
 */
export interface NotionError {
  /**
   * Code
   */
  readonly code: string;
  /**
   * Message
   */
  readonly message: string;
  /**
   * Request identifier
   */
  readonly request_id: UUID;
  /**
   * Object type
   */
  readonly object: 'error';
  /**
   * Status code
   */
  readonly status: number;
}
