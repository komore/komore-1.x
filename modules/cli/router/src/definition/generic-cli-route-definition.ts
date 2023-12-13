import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouteDefinition } from './cli-route-definition';
import { type CliParameterDefinition } from './parameter/cli-parameter-definition';

/**
 * Generic command-line interface route definition
 */
export type GenericCliRouteDefinition = CliRouteDefinition<
  string,
  ReadonlyRecord<string, CliParameterDefinition<any, boolean>>,
  ReadonlyRecord<string, CliParameterDefinition<any, boolean>>,
  ReadonlyArray<GenericCliRouteDefinition>
>;
