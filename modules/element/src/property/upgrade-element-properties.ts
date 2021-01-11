import type { ElementPropertySubjectMap } from './element-property-subject-map';

/**
 * Upgrades an element properties, moving them from the object to their matching behavior subject
 *
 * This operation is necessary because tools and frameworks may set properties on a custom element before the custom
 * element has been upgraded.
 *
 * @param element Custom element
 * @param propertyNames Property names
 * @param propertySubjects Element property subjects
 * @template ElementType Element type
 * @template PropertyTypes Property types
 */
export function upgradeElementProperties<
  PropertyTypes extends Record<string, any>,
  ElementType extends PropertyTypes
>(
  element: ElementType,
  propertyNames: ReadonlyArray<keyof PropertyTypes>,
  propertySubjects: ElementPropertySubjectMap<PropertyTypes>
): void {
  for (const propertyName of propertyNames) {
    if (element.hasOwnProperty(propertyName)) {
      const propertyValue = element[propertyName];
      delete element[propertyName];
      element[propertyName] = propertyValue;
    }
  }
}
