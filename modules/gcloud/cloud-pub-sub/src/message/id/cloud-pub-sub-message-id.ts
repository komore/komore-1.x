/**
 * Cloud Pub/Sub message identifier
 */
export type CloudPubSubMessageId = string & {
  readonly __tag_cloudPubSubMessageId: unique symbol;
};
