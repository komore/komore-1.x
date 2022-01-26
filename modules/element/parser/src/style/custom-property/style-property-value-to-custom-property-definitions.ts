import { customPropertyReferenceToPropertyDefinition } from './custom-property-reference-to-property-definition';
import { propertyValueToVariableReferenceGroups } from './property-value-to-variable-reference-groups';
import { type VariableReferenceGroup } from './variable-reference-group';

/**
 * Parses custom property references from a style property value
 * @param propertyValue Property value
 * @returns List of property definitions
 */
export function stylePropertyValueToCustomPropertyDefinitions(
  propertyValue: string
): ReadonlyArray<PropertyDefinition> {
  return propertyValueToVariableReferenceGroups(propertyValue)
    .map(variableReferenceGroupToCustomPropertyReferenceFor(propertyValue))
    .map(customPropertyReferenceToPropertyDefinition);
}

function variableReferenceGroupToCustomPropertyReferenceFor(
  propertyValue: string
): (variableReferenceGroup: VariableReferenceGroup) => string {
  return ({ openingIndex, closingIndex }) => propertyValue.substring(openingIndex + 1, closingIndex);
}
