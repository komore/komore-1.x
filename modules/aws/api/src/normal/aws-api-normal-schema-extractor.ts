import { type AwsApiNormalSchema } from './aws-api-normal-schema';

/**
 * AWS API normal schema extractor
 */
export interface AwsApiNormalSchemaExtractor {
  (api: string, version: string): Observable<AwsApiNormalSchema>;
}
