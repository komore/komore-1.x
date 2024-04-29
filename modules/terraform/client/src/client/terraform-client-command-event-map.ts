import { createClientCommandEventMap } from '@komore/client';

import { type terraformCommand } from '../terraform.command';
import { type terraformEvent } from '../terraform.event';

/**
 * Terraform client command-to-event map
 */
export const terraformClientCommandEventMap = createClientCommandEventMap<
  typeof terraformCommand,
  typeof terraformEvent
>()({
  apply: 'applied',
  destroy: 'destroyed',
  initialize: 'initialized',
  plan: 'planned',
});
