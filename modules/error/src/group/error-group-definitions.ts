import { type GenericDomain } from '@komore/domain';

import { type ErrorGroup } from './error-group';
import { type GenericErrorGroup } from './generic-error-group';

/**
 * Error group definitions, given an error group
 *
 * @template ErrorGroupType Error group type
 * @private
 */
export type ErrorGroupDefinitions<ErrorGroupType extends GenericErrorGroup> = ErrorGroupType extends ErrorGroup<
  GenericDomain,
  infer Definitions
>
  ? Definitions
  : never;
