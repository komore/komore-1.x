/**
 * KMS XKS key configuration
 *
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_XksKeyConfigurationType.html XksKeyConfigurationType}
 */
export interface KmsXksKeyConfiguration {
  /**
   * External key identifier in its external key manager
   */
  readonly Id: string;
}
