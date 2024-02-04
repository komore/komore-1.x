import { type GraphQLEnumTypeExtensionNode } from '../enum/graphql-enum-type-extension-node';
import { type GraphQLObjectTypeExtensionNode } from '../object/graphql-object-type-extension-node';
import { type GraphQLUnionTypeExtensionNode } from '../union/graphql-union-type-extension-node';
import { type GraphQLInputObjectTypeExtensionNode } from './graphql-input-object-type-extension-node';
import { type GraphQLInterfaceTypeExtensionNode } from './graphql-interface-type-extension-node';
import { type GraphQLScalarTypeExtensionNode } from './graphql-scalar-type-extension-node';

/**
 * GraphQL type extension node
 */
export type GraphQLTypeExtensionNode =
  | GraphQLEnumTypeExtensionNode
  | GraphQLInputObjectTypeExtensionNode
  | GraphQLInterfaceTypeExtensionNode
  | GraphQLObjectTypeExtensionNode
  | GraphQLScalarTypeExtensionNode
  | GraphQLUnionTypeExtensionNode;
