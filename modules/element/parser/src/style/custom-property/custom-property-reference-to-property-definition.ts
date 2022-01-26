const regExp = /^\s*(--[^\s,)]+)\s*((?:,\s*)(.*))?$/;

/**
 * Parses a custom property reference
 * @param customPropertyReference Custom property reference
 * @returns Custom property definition
 */
export function customPropertyReferenceToPropertyDefinition(customPropertyReference: string): PropertyDefinition {
  const matches = customPropertyReference.match(regExp);
  if (matches === null) {
    throw new Error(`invalid custom property reference var(${customPropertyReference})`);
  }

  const name = matches[1].trim();
  const initialValue = matches[3]?.trim();

  return {
    name,
    inherits: true,
    initialValue
  };
}
