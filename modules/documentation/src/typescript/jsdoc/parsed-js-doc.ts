import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Parsed JSDoc
 */
export interface ParsedJsDoc {
  /**
   * Description
   */
  readonly description: string;
  /**
   * Parameters
   */
  readonly parameters?: ReadonlyRecord<string, string>;
  /**
   * Return value
   */
  readonly returnValue?: string;
  /**
   * Type parameters
   */
  readonly typeParameters?: ReadonlyRecord<string, string>;
}
