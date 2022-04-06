// TODO: module

import { computeSha1, defineModule, local, output, templateFile, variables } from '@komore/stack';
import { apiGatewayDeployment } from './api-gateway-deployment';
import { apiGatewayRestApi } from './api-gateway-rest-api';
import { apiGatewayStage } from './api-gateway-stage';

/**
 * API Gateway with OpenAPI schema module
 *
 * Defines:
 * - a templated OpenAPI schema data source
 * - an {@link apiGatewayRestApi API Gateway REST API}
 * - an {@link apiGatewayDeployment API Gateway deployment}
 * - an {@link apiGatewayStage API Gateway stage}
 *
 * Outputs:
 * - `endpointUrl` - URL of the deployed API
 */
export const apiGatewayWithOpenApiSchema = defineModule('apiGatweayWithOpenApiSchema', $ =>
  $.pipe(
    variables({
      description: {
        description: 'API description',
        type: 'string',
      },
      name: {
        description: 'API name',
        type: 'string',
      },
      schemaPath: {
        description: 'OpenAPI schema path',
        type: 'string',
      },
    }),
    // TODO: variables
    local('openApiSchema', 'string', ({ variables: { schemaPath } }) => templateFile(schemaPath, {})),
    apiGatewayRestApi('api', ({ variables: { description, name }, locals: { openApiSchema } }) => ({
      body: openApiSchema,
      name,
      description,
    })),
    apiGatewayDeployment('deployment', ({ variables: { name }, locals: { openApiSchema }, resources }) => ({
      restApiId: resources.aws_api_gateway_rest_api.api.id,
      stageName: `${name}-deployment`,
      triggers: {
        redeployment: computeSha1(openApiSchema),
      },
      lifecycle: {
        createBeforeDestroy: true,
      },
    })),
    apiGatewayStage('stage', ({ variables: { name }, resources }) => ({
      deploymentId: resources.aws_api_gateway_deployment.deployment.id,
      restApiId: resources.aws_api_gateway_rest_api.api.id,
      stageName: `${name}-stage`,
    })),
    output('endpointUrl', 'string', ({ resources }) => ({
      description: 'API endpoint URL',
      value: 
    }))
  )
);
