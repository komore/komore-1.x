import { type AwsApiNormalSchema } from './normal/aws-api-normal-schema';
import { type AwsApiPaginatorsSchema } from './paginators/aws-api-paginators-schema';

/**
 * AWS API schemas
 */
export interface AwsApiSchemas {
  /**
   * Normal schema
   */
  readonly normal: AwsApiNormalSchema;
  /**
   * Paginators schema
   */
  readonly paginators?: AwsApiPaginatorsSchema;
}
