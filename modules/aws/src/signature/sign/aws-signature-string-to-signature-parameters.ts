/**
 * AWS signature string to signature parameters
 */
export interface AwsSignatureStringToSignatureParameters {
  /**
   * Date
   */
  readonly date: Temporal.PlainDate;
  /**
   * Signature string
   */
  readonly signatureString: string;
}
