import { type TypeCreator } from '@komore/typescript';

import { type EventCreator } from './event-creator';

/**
 * Event from a creator type
 *
 * @template CreatorType Creator type
 * @private
 */
export type EventFromCreator<CreatorType extends EventCreator<string, TypeCreator<any, any>>> = ReturnType<CreatorType>;
