import { type Domain } from '@komore/domain';

import { type ErrorInstance } from './error-instance';

/**
 * Komore error
 *
 * @template DomainType Domain type
 * @template ErrorCode Error code
 * @private
 */
export class KomoreError<DomainType extends Domain, ErrorCode extends string, ErrorParameters>
  extends Error
  implements ErrorInstance<DomainType, ErrorCode, ErrorParameters> {
  override readonly name = 'KomoreError';
  readonly code: ErrorCode;
  readonly context: ErrorParameters;
  readonly domain: DomainType;

  /**
   * Class constructor
   *
   * @param domain Domain
   * @param errorCode Error code
   * @param errorContext Error context
   */
  constructor(domain: DomainType, errorCode: ErrorCode, errorContext: ErrorParameters) {
    super(`${domain.name}:error:${errorCode}`);
    this.code = errorCode;
    this.context = errorContext;
    this.domain = domain;
  }
}
