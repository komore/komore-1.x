import { type HttpApiServer } from '@komore/http/api';

import { type AwsApiNormalSchema } from '../normal/aws-api-normal-schema';

/**
 * Returns an HTTP API's servers, given an AWS API normal schema
 *
 * @param normalSchema Normal schema
 * @returns HTTP API servers
 */
export function awsApiNormalSchemaToHttpApiServers(normalSchema: AwsApiNormalSchema): ReadonlyArray<HttpApiServer> {
  const { endpointPrefix, serviceFullName, serviceId } = normalSchema.metadata;
  const url = new URL(`https://${endpointPrefix}.{awsRegion}.amazonaws.com/`);
  const description = `${serviceFullName} server (region-specific)`;
  const name = `${serviceId} server`;
  return [
    {
      description,
      name,
      url,
      variables: {
        awsRegion: {
          description: 'AWS region',
          target: 'url',
        },
      },
    },
  ];
}
