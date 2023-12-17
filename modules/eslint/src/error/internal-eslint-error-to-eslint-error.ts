import { type ErrorFromType } from '@komore/error';

import { esLintError } from '../eslint.error';
import { type InternalEsLintError } from './internal-eslint-error';
import { type InternalEsLintErrorDataTypes } from './internal-eslint-error-data-types';

export function internalEsLintErrorToEsLintError(): (
  internalError: InternalEsLintError<keyof InternalEsLintErrorDataTypes>
) => ErrorFromType<typeof esLintError> {
  return error => {
    switch (error.messageTemplate) {
      case 'extend-config-missing':
        return esLintError.configExtendFileNotFound({ extendPath: error.messageData.configName });
      default:
        return esLintError.unhandledError({ message: error.message, errorId: error.messageTemplate });
    }
  };
}
