import { type GenericCommand } from '@komore/command';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CliFlagParameterDefinition } from '../definition/parameter/cli-flag-parameter-definition';
import { type CliPathParameterDefinition } from '../definition/parameter/cli-path-parameter-definition';
import { type CliRouteMatcher } from './cli-route-matcher';

/**
 * Generic command-line interface route matcher
 */
export type GenericCliRouteMatcher = CliRouteMatcher<
  ReadonlyRecord<string, CliPathParameterDefinition<unknown, boolean>>,
  ReadonlyRecord<string, CliFlagParameterDefinition<unknown, boolean>>,
  GenericCommand
>;
