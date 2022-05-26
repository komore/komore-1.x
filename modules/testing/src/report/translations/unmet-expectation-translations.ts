import { type ReadonlyRecord } from '@komore/typescript';
import { type ExpectationType } from '../../expect/expectation-type';

/**
 * Unmet expectation translations
 */
export type UnmetExpectationTranslations = ReadonlyRecord<ExpectationType, ReadonlyArray<number | string>>;
