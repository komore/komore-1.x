import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS CLI configuration section
 */
export interface AwsCliConfigSection {
  /**
   * Section name
   */
  readonly name: string;
  /**
   * Section properties
   */
  readonly properties: ReadonlyRecord<string, string>;
  /**
   * Section type
   */
  readonly type: string;
}
