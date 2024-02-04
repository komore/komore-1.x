import { type GraphQLQuery } from '@komore/graphql';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Creates a function that returns a GraphQL query, given a subscription and its parameters
 *
 * @param subscriptions Schema subscriptions
 * @returns Function that returns a GraphQL query, given a subscription and its parameters
 */
export function subscriptionToGraphQLQuery<Subscriptions extends ReadonlyRecord<string, unknown>>(
  subscriptions: Subscriptions
): <SubscriptionName extends keyof Subscriptions & string>(
  subscriptionName: SubscriptionName,
  parameters?: unknown
) => GraphQLQuery {
  return (subscriptionName, parameters) => {
    console.log('weee s', subscriptionName, parameters);
    const subscription = subscriptions[subscriptionName];
    subscription;
    return {
      query: `subscription ${subscriptionName}() {}`,
    };
  };
}
