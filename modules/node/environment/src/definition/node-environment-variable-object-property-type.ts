import { type NodeEnvironmentVariableDefinition } from './node-environment-variable-definition';

/**
 * Environment variable definition property type
 *
 * @private
 */
export type NodeEnvironmentVariableObjectPropertyType<
  VariableDefinition extends NodeEnvironmentVariableDefinition<any, boolean>,
> = VariableDefinition extends { readonly parse: (variableValue: string) => infer T } ? T : string;
