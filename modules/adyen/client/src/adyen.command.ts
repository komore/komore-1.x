import { adyenDomain } from '@komore/adyen';
import { commandProperties, createCommandType } from '@komore/command';

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
