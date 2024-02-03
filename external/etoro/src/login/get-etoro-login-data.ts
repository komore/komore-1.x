import { type EToroApiClient } from '../etoro-api-client';
import { type EToroLoginData } from './etoro-login-data';

export function getEToroLoginData(apiClient: EToroApiClient): () => Observable<EToroLoginData> {
  return () => apiClient<EToroLoginData>('etoro', 'GET', 'api/logindata/v1.1/logindata');
}
