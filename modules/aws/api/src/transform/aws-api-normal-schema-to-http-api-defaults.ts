import { type HttpApiDefaults } from '@komore/http/api';

import { type AwsApiNormalSchema } from '../normal/aws-api-normal-schema';

/**
 * Returns an HTTP API's defaults, given an AWS API normal schema
 *
 * @param normalSchema Normal schema
 * @returns HTTP API defaults
 */
export function awsApiNormalSchemaToHttpApiDefaults(_normalSchema: AwsApiNormalSchema): HttpApiDefaults | undefined {
  return undefined;
}
