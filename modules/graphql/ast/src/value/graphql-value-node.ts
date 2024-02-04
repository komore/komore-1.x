import { type GraphQLVariableNode } from '../variable/graphql-variable-node';
import { type GraphQLBooleanValueNode } from './graphql-boolean-value-node';
import { type GraphQLEnumValueNode } from './graphql-enum-value-node';
import { type GraphQLFloatValueNode } from './graphql-float-value-node';
import { type GraphQLIntValueNode } from './graphql-int-value-node';
import { type GraphQLListValueNode } from './graphql-list-value-node';
import { type GraphQLNullValueNode } from './graphql-null-value-node';
import { type GraphQLObjectValueNode } from './graphql-object-value-node';
import { type GraphQLStringValueNode } from './graphql-string-value-node';

/**
 * GraphQL value node
 */
export type GraphQLValueNode =
  | GraphQLVariableNode
  | GraphQLIntValueNode
  | GraphQLFloatValueNode
  | GraphQLStringValueNode
  | GraphQLBooleanValueNode
  | GraphQLNullValueNode
  | GraphQLEnumValueNode
  | GraphQLListValueNode
  | GraphQLObjectValueNode;
