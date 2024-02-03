/**
 * Cloud Pub/Sub cached encoder
 */
export interface CloudPubSubCachedEncoder {
  (value: unknown): Observable<Uint8Array>;
}
