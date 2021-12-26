import { type MonoTypeOperatorFunction, tapNext } from '@komore/reactive';
import { type GenericScope } from '@komore/stack';
import { AwsProvider, type AwsProviderConfig } from './.gen/aws-provider';

/**
 * Adds the Amazon provider
 * @param providerId Provider identifier
 * @param config Provider configuration
 * @returns Operator function that adds the Amazon provider
 */
export function withAmazonProvider<ScopeType extends GenericScope, ProviderId extends string>(
  providerId: ProviderId,
  config: AwsProviderConfig
): MonoTypeOperatorFunction<ScopeType> {
  return tapNext(({ construct }) => new AwsProvider(construct, providerId, config));
}
