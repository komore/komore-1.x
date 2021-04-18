import type { Construct } from 'constructs';
import type { Scope } from './scope';

/**
 * Creates a scope
 * @param construct Construct
 * @returns Scope
 */
export function createScope(construct: Construct): Scope {
  return {
    construct,
    dataSources: {},
    locals: {},
    resources: {},
    variables: {},
    outputs: {}
  };
}
