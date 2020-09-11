import { createApiGatewayNode } from './apigateway';
import { createAppSyncNode } from './appsync';
import { createDynamoDBNode } from './dynamodb';

export namespace AWS {
  export const ApiGateway = createApiGatewayNode;
  export const AppSync = createAppSyncNode;
  export const DynamoDB = createDynamoDBNode;
}
