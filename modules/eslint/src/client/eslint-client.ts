import { type Client } from '@komore/client';

import { type esLintError } from '../eslint.error';
import { type esLintEvent } from '../eslint.event';
import { type esLintQuery } from '../eslint.query';
import { type esLintCommand } from '../eslint.command';
import { type esLintCommandEventMap } from './eslint-command-event-map';

/**
 * ESLint client
 */
export type EsLintClient = Client<
  typeof esLintCommand,
  typeof esLintEvent,
  typeof esLintQuery,
  typeof esLintError,
  typeof esLintCommandEventMap
>;
