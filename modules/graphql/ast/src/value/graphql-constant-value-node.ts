import { type GraphQLBooleanValueNode } from './graphql-boolean-value-node';
import { type GraphQLConstantListValueNode } from './graphql-constant-list-value-node';
import { type GraphQLConstantObjectValueNode } from './graphql-constant-object-value-node';
import { type GraphQLEnumValueNode } from './graphql-enum-value-node';
import { type GraphQLFloatValueNode } from './graphql-float-value-node';
import { type GraphQLIntValueNode } from './graphql-int-value-node';
import { type GraphQLNullValueNode } from './graphql-null-value-node';
import { type GraphQLStringValueNode } from './graphql-string-value-node';

/**
 * GraphQL constant value node
 */
export type GraphQLConstantValueNode =
  | GraphQLIntValueNode
  | GraphQLFloatValueNode
  | GraphQLStringValueNode
  | GraphQLBooleanValueNode
  | GraphQLNullValueNode
  | GraphQLEnumValueNode
  | GraphQLConstantListValueNode
  | GraphQLConstantObjectValueNode;
