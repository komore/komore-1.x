import { type OctokitResponse } from '@octokit/types';

export function toGithubResponseData<T, S extends number = number>(response: OctokitResponse<T, S>): T {
  return response.data;
}
