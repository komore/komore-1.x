import { createClientCommandEventMap } from '@komore/client';

import { type cargoCommand } from '../cargo.command';
import { type cargoEvent } from '../cargo.event';

/**
 * Cargo client command-to-event map
 */
export const cargoClientCommandEventMap = createClientCommandEventMap<typeof cargoCommand, typeof cargoEvent>()({
  install: 'installed',
});
