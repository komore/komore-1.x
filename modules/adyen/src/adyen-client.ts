import { type Observable } from '@komore/reactive';

import { type AdyenCommand } from './adyen.command';
import { type AdyenEvent } from './adyen.event';
import { type AdyenQuery } from './adyen.query';

/**
 * Adyen client
 */
export interface AdyenClient {
  readonly events: Observable<AdyenEvent>;

  (command: AdyenCommand): void;
  <QueryName>(query: AdyenQuery): Observable<xx>;
}
