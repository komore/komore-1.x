import { type HttpApiDescription } from '@komore/http/api';

import { type AwsApiNormalSchema } from '../normal/aws-api-normal-schema';

/**
 * Returns an HTTP API's description, given an AWS API normal schema
 *
 * @param normalSchema Normal schema
 * @returns HTTP API description
 */
export function awsApiNormalSchemaToHttpApiDescription(normalSchema: AwsApiNormalSchema): HttpApiDescription {
  const { serviceId: title, serviceFullName: summary } = normalSchema.metadata;
  const { documentation } = normalSchema;
  return {
    documentation,
    summary,
    title,
  };
}
