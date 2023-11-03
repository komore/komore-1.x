import { commandProperties, createCommandType, type CommandFromType } from '@komore/command';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen command
 */
export const adyenCommand = createCommandType(adyenDomain, {
  authorizePayment: commandProperties<{}>(),
  cancelAuthorizedPayment: commandProperties<{}>(),
  captureAuthorizedPayment: commandProperties<{}>(),
  refundCapturedPayment: commandProperties<{}>(),
  updateAuthorizedAmount: commandProperties<{}>(),
});

/**
 * Adyen command type
 */
export type AdyenCommand = CommandFromType<typeof adyenCommand>;
