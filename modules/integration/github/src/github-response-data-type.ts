import { type OctokitResponse } from '@octokit/types';

/**
 * GitHub response data type
 */
export type GithubResponseDataType<
  GithubResponseType extends OctokitResponse<unknown, number> | Promise<OctokitResponse<unknown, number>>
> = GithubResponseType extends Promise<OctokitResponse<infer T, number>>
  ? T
  : GithubResponseType extends OctokitResponse<infer T, number>
  ? T
  : never;
