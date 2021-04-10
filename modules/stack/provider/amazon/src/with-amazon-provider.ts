import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { GenericScope } from '@komore/stack';
import type { AwsProviderConfig } from './.gen/aws-provider';
import { AwsProvider } from './.gen/aws-provider';

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
  return tapValue(({ construct }) => new AwsProvider(construct, providerId, config));
}
