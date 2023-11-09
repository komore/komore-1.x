import { commandProperties, createCommandType, type CommandFromType } from '@komore/command';

import { adyenDomain } from './adyen.domain';

/**
 * Adyen command
 */
export const adyenCommand = createCommandType(adyenDomain, {
  authorizePayment: commandProperties<{}>(),
  cancelAuthorizedPayment: commandProperties<{}>(),
  /**
   * TODO
   *
   * @see {@link // https://docs.adyen.com/api-explorer/Checkout/latest/post/payments/_paymentPspReference_/captures Captures}
   */
  captureAuthorizedPayment: commandProperties<{}>(),
  refundCapturedPayment: commandProperties<{}>(),
  updateAuthorizedAmount: commandProperties<{}>(),
});
