import { type HttpApiMetadata } from '@komore/http/api';

import { type AwsApiNormalSchema } from '../normal/aws-api-normal-schema';

/**
 * Returns an HTTP API's metadata, given an AWS API normal schema
 *
 * @param normalSchema Normal schema
 * @returns HTTP API metadata
 */
export function awsApiNormalSchemaToHttpApiMetadata(normalSchema: AwsApiNormalSchema): HttpApiMetadata {
  const { apiVersion: version } = normalSchema.metadata;
  return {
    version,
  };
}
