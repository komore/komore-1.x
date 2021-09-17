/**
 * Creates a function that returns a trusted script URL from an input string using a trusted type policy
 * @param trustedTypePolicy Trusted type policy
 * @returns Function that returns a trusted script URL from an input string using the trusted type policy
 */
export function toTrustedScriptURL(trustedTypePolicy: TrustedTypePolicy): (input: string) => TrustedScriptURL {
  return input => trustedTypePolicy.createScriptURL(input);
}
