import { type AwsApiShapeType } from './aws-api-shape-type';

/**
 * AWS API shape
 */
export interface AwsApiShape {
  /**
   * Type
   */
  readonly type: AwsApiShapeType;
}
