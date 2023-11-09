import { type TypeCreator } from '@komore/typescript';

import { type ErrorCreator } from '../creator/error-creator';

/**
 * Error creator entry
 *
 * @private
 */
export type ErrorCreatorEntry = readonly [errorCode: string, errorCreator: ErrorCreator<string, TypeCreator<any, any>>];
