import { type HttpApi } from '@komore/http/api';

import { type AwsApiSchemas } from '../aws-api-schemas';
import { awsApiNormalSchemaToHttpApiDefaults } from './aws-api-normal-schema-to-http-api-defaults';
import { awsApiNormalSchemaToHttpApiDescription } from './aws-api-normal-schema-to-http-api-description';
import { awsApiNormalSchemaToHttpApiLicense } from './aws-api-normal-schema-to-http-api-license';
import { awsApiNormalSchemaToHttpApiMetadata } from './aws-api-normal-schema-to-http-api-metadata';
import { awsApiNormalSchemaToHttpApiServers } from './aws-api-normal-schema-to-http-api-servers';

/**
 * Returns an HTTP API, given AWS API schemas
 *
 * @param apiSchemas AWS API schemas
 * @returns HTTP API
 */
export function awsApiSchemasToHttpApi(apiSchemas: AwsApiSchemas): HttpApi {
  const { normal, paginators: _ } = apiSchemas;
  const defaults = awsApiNormalSchemaToHttpApiDefaults(normal);
  const description = awsApiNormalSchemaToHttpApiDescription(normal);
  const license = awsApiNormalSchemaToHttpApiLicense(normal);
  const metadata = awsApiNormalSchemaToHttpApiMetadata(normal);
  const servers = awsApiNormalSchemaToHttpApiServers(normal);
  const version = '1.0.0';
  return {
    ...(defaults ? { defaults } : {}),
    description,
    license,
    metadata,
    servers,
    version,
  };
}
