import { type OctokitResponse } from '@octokit/types';

/**
 * Returns a GitHub response's data
 * @param githubResponse GitHub response
 * @returns GitHub response data
 */
export function githubResponseToData<T, S extends number = number>(githubResponse: OctokitResponse<T, S>): T {
  return githubResponse.data;
}
