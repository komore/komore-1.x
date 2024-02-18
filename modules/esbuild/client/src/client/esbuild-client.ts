import { type Client } from '@komore/client';

import { type esbuildCommand } from '../esbuild.command';
import { type esbuildEvent } from '../esbuild.event';
import { type esbuildQuery } from '../esbuild.query';
import { type esbuildError } from '../esbuild.error';
import { type esbuildCommandEventMap } from './esbuild-command-event-map';

/**
 * esbuild client
 */
export type EsbuildClient = Client<
  typeof esbuildCommand,
  typeof esbuildEvent,
  typeof esbuildQuery,
  typeof esbuildError,
  typeof esbuildCommandEventMap
>;
