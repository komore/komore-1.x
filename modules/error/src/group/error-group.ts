import { type Domain } from '@komore/domain';

import { type ErrorCreator } from '../creator/error-creator';

/**
 * Error group
 *
 * @template DomainType Domain type
 * @template GroupName Group name
 */
export interface ErrorGroup<DomainType extends Domain<string>, GroupName extends string> {
  <ErrorCode extends string>(errorCode: ErrorCode, defaultMessage: string, errorProperties: unknown): ErrorCreator<
    ErrorGroup<DomainType, GroupName>,
    ErrorCode
  >;
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Group name
   */
  readonly groupName: GroupName;
}
