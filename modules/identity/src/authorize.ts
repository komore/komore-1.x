import { createFunction } from '@komore/function';
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Authorize query parameters
 */
type AuthorizeParameters = Readonly<{
  client_id: string;
  response_type: 'code' | 'token';
  state?: string;
}>;

Array.from(Object.values()