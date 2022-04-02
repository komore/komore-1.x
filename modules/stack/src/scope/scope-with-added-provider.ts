import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformProvider } from 'cdktf';
import { type GenericScope } from './generic-scope';

/**
 * Scope with an additional provider
 * @template ScopeType Scope type
 * @template ProviderId Provider identifier
 * @template ProviderType Provider type
 */
export type ScopeWithAddedProvider<
  ScopeType extends GenericScope,
  ProviderId extends string,
  ProviderType extends TerraformProvider
> = ScopeType & {
  readonly providers: ReadonlyRecord<ProviderId, ProviderType>;
};
