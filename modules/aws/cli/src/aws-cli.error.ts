import { createErrorType, errorProperties } from '@komore/error';

import { awsCliDomain } from './aws-cli.domain';

/**
 * AWS CLI error
 */
export const awsCliError = createErrorType(awsCliDomain, {
  /**
   * Configuration property outside of a configuration section
   */
  configPropertyOutsideSection: errorProperties<{
    /**
     * Property name
     */
    readonly propertyName: string;
    /**
     * Property value
     */
    readonly propertyValue: string;
  }>(),
  /**
   * Unknown configuration section type
   */
  unknownConfigSectionType: errorProperties<{
    /**
     * Type
     */
    readonly type: string;
  }>(),
});
