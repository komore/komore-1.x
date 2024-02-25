import { type SpecificationBlockType } from './specification-block-type';

/**
 * Specification block
 */
export interface SpecificationBlock {
  /**
   * Description
   */
  readonly description: string;
  /**
   * Type
   */
  readonly type: SpecificationBlockType;
}
