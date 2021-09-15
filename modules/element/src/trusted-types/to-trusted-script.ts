/**
 * Creates a function that returns a trusted script from an input string using a trusted type policy
 * @param trustedTypePolicy Trusted type policy
 * @returns Function that returns a trusted script from an input string using the trusted type policy
 */
export function toTrustedScript(trustedTypePolicy: TrustedTypePolicy): (input: string) => TrustedScript {
  return input => trustedTypePolicy.createScript(input);
}
