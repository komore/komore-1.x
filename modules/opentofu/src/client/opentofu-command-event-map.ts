import { createClientCommandEventMap } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type openTofuCommand } from '../opentofu.command';
import { type openTofuEvent } from '../opentofu.event';

export const openTofuCommandEventMap = createClientCommandEventMap<
  CommandFromType<typeof openTofuCommand>,
  EventFromType<typeof openTofuEvent>
>()({
  apply: 'applied',
  destroy: 'destroyed',
  initialize: 'initialized',
  plan: 'planned',
});
