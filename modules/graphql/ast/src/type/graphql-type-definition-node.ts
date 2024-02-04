import { type GraphQLEnumTypeDefinitionNode } from '../enum/graphql-enum-type-definition-node';
import { type GraphQLInputObjectTypeDefinitionNode } from '../input/graphql-input-object-type-definition-node';
import { type GraphQLObjectTypeDefinitionNode } from '../object/graphql-object-type-definition-node';
import { type GraphQLUnionTypeDefinitionNode } from '../union/graphql-union-type-definition-node';
import { type GraphQLInterfaceTypeDefinitionNode } from './graphql-interface-type-definition-node';
import { type GraphQLScalarTypeDefinitionNode } from './graphql-scalar-type-definition-node';

/**
 * GraphQL type definition node
 */
export type GraphQLTypeDefinitionNode =
  | GraphQLEnumTypeDefinitionNode
  | GraphQLInputObjectTypeDefinitionNode
  | GraphQLInterfaceTypeDefinitionNode
  | GraphQLObjectTypeDefinitionNode
  | GraphQLScalarTypeDefinitionNode
  | GraphQLUnionTypeDefinitionNode;
