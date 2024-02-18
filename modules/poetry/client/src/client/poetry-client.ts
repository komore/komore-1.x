import { type Client } from '@komore/client';

import { type poetryCommand } from '../poetry.command';
import { type poetryEvent } from '../poetry.event';
import { type poetryQuery } from '../poetry.query';
import { type poetryError } from '../poetry.error';

/**
 * Poetry client
 */
export type PoetryClient = Client<
  typeof poetryCommand,
  typeof poetryEvent,
  typeof poetryQuery,
  typeof poetryError,
  typeof poetryClientCommandEventMap
>;
