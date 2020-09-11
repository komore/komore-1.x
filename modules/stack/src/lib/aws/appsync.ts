import { ApiNode } from '../api-node';
import { AbstractStackNode } from '../../stack';

/**
 * AppSync GraphQL authentication type
 */
type AppSyncGraphQLAuthenticationType = 'AMAZON_COGNITO_USER_POOLS' | 'API_KEY' | 'AWS_IAM' | 'OPENID_CONNECT';

/**
 * AppSync GraphQL node properties
 */
type AppSyncNodeProperties = Readonly<{
  apiName: string;
  authenticationType: AppSyncGraphQLAuthenticationType;
  enableXray?: boolean;
}>;

/**
 * AppSync node
 */
interface AppSyncNode extends ApiNode<'graphql'> {

}

/**
 * AppSync node implementation
 */
class AppSyncNodeImpl extends AbstractStackNode<AppSyncNodeProperties> implements AppSyncNode {
  /**
   * Class constructor
   * @param nodeProperties Node properties
   */
  constructor(nodeProperties: AppSyncNodeProperties) {
    super('aws:appsync', nodeProperties);
  }
}

/**
 * Create an AppSync node
 * @param apiName API name
 * @param properties Node properties
 */
export function createAppSyncNode(apiName: string, properties: Omit<AppSyncNodeProperties, 'apiName'>): AppSyncNode {
  return new AppSyncNodeImpl({
    ...properties,
    apiName
  });
}
