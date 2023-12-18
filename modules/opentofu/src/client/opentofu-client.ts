import { type Client } from '@komore/client';

import { type openTofuCommand } from '../opentofu.command';
import { type openTofuError } from '../opentofu.error';
import { type openTofuEvent } from '../opentofu.event';
import { type openTofuQuery } from '../opentofu.query';

/**
 * OpenTofu client
 */
export type OpenTofuClient = Client<
  typeof openTofuCommand,
  typeof openTofuEvent,
  typeof openTofuQuery,
  typeof openTofuError,
  typeof openTofuCommandEventMap
>;
