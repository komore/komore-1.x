import { ApiNode } from '../api-node';
import { AbstractStackNode } from '../../stack';

/**
 * API gateway node
 */
export interface ApiGatewayNode extends ApiNode<'rest'> {

}

/**
 * API gateway node properties
 */
export type ApiGatewayNodeProperties = Readonly<{

}>;

/**
 * API gateway node implementation
 */
class ApiGatewayNodeImpl extends AbstractStackNode<ApiGatewayNodeProperties> implements ApiGatewayNode {
  constructor(nodeProperties: ApiGatewayNodeProperties) {
    super('aws:apigateway', nodeProperties);
  }
}

/**
 * Create an API gateway node
 */
export function createApiGatewayNode(): ApiGatewayNode {
  return new ApiGatewayNodeImpl({});
}
