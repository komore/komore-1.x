import { type HttpApiLicense } from '@komore/http/api';

import { type AwsApiNormalSchema } from '../normal/aws-api-normal-schema';

/**
 * Returns an HTTP API's license, given an AWS API normal schema
 *
 * @param normalSchema Normal schema
 * @returns HTTP API license
 */
export function awsApiNormalSchemaToHttpApiLicense(_normalSchema: AwsApiNormalSchema): HttpApiLicense {
  const name = 'Apache 2.0';
  const spdx = 'Apache-2.0';
  const url = new URL('https://github.com/aws/aws-sdk-js/blob/master/LICENSE.txt');
  return {
    name,
    spdx,
    url,
  };
}
