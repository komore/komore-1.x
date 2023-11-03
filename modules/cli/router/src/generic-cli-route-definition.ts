import { type ReadonlyRecord } from '@komore/typescript';

import { type CliRouteDefinition } from './cli-route-definition';

/**
 * Generic command-line interface route definition
 */
export type GenericCliRouteDefinition = CliRouteDefinition<ReadonlyRecord<string, GenericCliRouteDefinition>>;
