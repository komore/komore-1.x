/**
 * Creates a trusted type policy
 * @param policyName Policy name
 * @param policyOptions Policy options
 * @returns Trusted type policy
 */
export function createTrustedTypePolicy(
  policyName: string,
  policyOptions?: TrustedTypePolicyOptions
): TrustedTypePolicy | undefined {
  return window.trustedTypes?.createPolicy(policyName, policyOptions);
}
