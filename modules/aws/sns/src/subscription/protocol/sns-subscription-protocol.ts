import { type snsSubscriptionProtocols } from './sns-subscription-protocols';

/**
 * SNS subscription protocol
 */
export type SnsSubscriptionProtocol = (typeof snsSubscriptionProtocols)[number];
