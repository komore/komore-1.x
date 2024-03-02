import { stringToMatchesWith } from '@komore/string';

import { awsCliError } from '../../aws-cli.error';
import { type AwsCliConfigSection } from './aws-cli-config-section';

/**
 * Creates a function that returns an updated list of AWS CLI configuration sections with each additional line
 *
 * @returns AWS CLI configuration with the additional line of information
 */
export function awsCliConfigLinesToConfigSections(): (
  sections: ReadonlyArray<AwsCliConfigSection>,
  line: string
) => ReadonlyArray<AwsCliConfigSection> {
  type SectionLineMatches = readonly [matches: string, type: string, name: string];
  type PropertyLineMatches = readonly [matches: string, propertyName: string, propertyValue: string];
  const toSectionMatches = stringToMatchesWith<SectionLineMatches>(/^\[([^\s]+)\s+([^\]]+)\]$/);
  const toPropertyMatches = stringToMatchesWith<PropertyLineMatches>(/^([^\s=]+)\s*=\s*([^\s]+)\s*$/);

  return (sections, line) => {
    if (line === '[default]') {
      return [...sections, { name: 'default', properties: {}, type: 'profile' }];
    }

    const sectionMatches = toSectionMatches(line);
    if (sectionMatches) {
      const [, type, name] = sectionMatches;
      return [...sections, { name, properties: {}, type }];
    }

    const propertyMatches = toPropertyMatches(line);
    if (propertyMatches) {
      const [, propertyName, propertyValue] = propertyMatches;
      const lastIndex = sections.length - 1;
      const lastSection = sections[lastIndex];
      if (!lastSection) {
        throw awsCliError.configPropertyOutsideSection({ propertyName, propertyValue });
      }

      const updatedLastSection = {
        ...lastSection,
        properties: { ...lastSection.properties, [propertyName]: propertyValue },
      };

      return [...sections.slice(0, lastIndex), updatedLastSection];
    }

    return sections;
  };
}
