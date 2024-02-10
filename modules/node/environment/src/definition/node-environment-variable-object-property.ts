import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';
import { type NodeEnvironmentVariableObjectPropertyType } from './node-environment-variable-object-property-type';

/**
 * Node environment variable object property
 *
 * @template VariableDefinition Variable definition type
 * @private
 */
export type NodeEnvironmentVariableObjectProperty<
  VariableDefinition extends NodeEnvironmentVariableDefinition<unknown, boolean>,
> = VariableDefinition extends { readonly optional: true }
  ? NodeEnvironmentVariableObjectPropertyType<VariableDefinition> | undefined
  : NodeEnvironmentVariableObjectPropertyType<VariableDefinition>;
