import { type GenericDomain } from '@komore/domain';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ErrorPropertiesSchema } from '../properties/error-properties-schema';
import { type ErrorGroup } from './error-group';

/**
 * Generic error group
 */
export type GenericErrorGroup = ErrorGroup<
  GenericDomain,
  ReadonlyRecord<string, ErrorPropertiesSchema<ReadonlyRecord<string, unknown>>>
>;
