import { type Domain } from '@komore/domain';

/**
 * Error instance
 *
 * @template DomainType Domain type
 * @template ErrorCode Error code
 * @template ErrorParameters Error parameters
 */
export interface ErrorInstance<DomainType extends Domain, ErrorCode extends string, ErrorParameters> extends Error {
  /**
   * Error code
   */
  readonly code: ErrorCode;
  /**
   * Error context
   */
  readonly context: ErrorParameters;
  /**
   * Domain type
   */
  readonly domain: DomainType;
  /**
   * Error name
   */
  readonly name: 'KomoreError';
}
