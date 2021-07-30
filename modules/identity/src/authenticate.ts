

/**
 * Authenticate parameters
 */
interface AuthenticateParameters {
  readonly client_id: string;
  readonly grant_type: 'TODO';
  readonly response_type: 'code' | 'token';
  readonly state?: string;
}
