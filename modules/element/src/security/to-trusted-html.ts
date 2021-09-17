/**
 * Creates a function that returns trusted HTML from an input string using a trusted type policy
 * @param trustedTypePolicy Trusted type policy
 * @returns Function that returns trusted HTML from an input string using the trusted type policy
 */
export function toTrustedHTML(trustedTypePolicy: TrustedTypePolicy): (input: string) => TrustedHTML {
  return input => trustedTypePolicy.createHTML(input);
}
