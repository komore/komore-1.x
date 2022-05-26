import { createErrorClass, errorProps } from '@komore/error';

/**
 * Invalid project configuration error
 */
export const InvalidProjectConfigurationError = createErrorClass('schematics/project/configuration', 'InvalidProjectConfigurationError', {
  '': errorProps<{}>(),

});
