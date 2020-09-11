

/**
 * Authenticate parameters
 */
type AuthenticateParameters = Readonly<{
  client_id: string;
  grant_type: 'TODO';
    
  response_type: 'code' | 'token';
  state?: string;
}>;

