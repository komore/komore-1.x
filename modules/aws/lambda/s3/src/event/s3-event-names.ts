/**
 * S3 event names
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html#supported-notification-event-types Supported event types for SQS, SNS, and Lambda}
 */
export const s3EventNames = [
  /**
   * An S3 object in the Intelligent-Tiering storage class was moved to Archive Access or Deep Archive Access
   */
  's3:IntelligentTiering',
  /**
   * An S3 object was deleted due to its lifecycle expiration
   */
  's3:LifecycleExpiration:*',
  /**
   * An S3 object on an unversioned bucket was deleted due to its lifecycle expiration
   */
  's3:LifecycleExpiration:Delete',
  /**
   * A delete marker was created for an S3 object version due to a lifecycle expiration
   */
  's3:LifecycleExpiration:DeleteMarkerCreated',
  /**
   * An S3 object was transitioned to another S3 storage class
   */
  's3:LifecycleTransition',
  /**
   * An ACL was set on an S3 object
   */
  's3:ObjectAcl:Put',
  /**
   * An S3 object was created
   */
  's3:ObjectCreated:*',
  /**
   * An S3 object was created due to a COPY request
   */
  's3:ObjectCreated:Copy',
  /**
   * An S3 object was created due to a POST request
   */
  's3:ObjectCreated:Post',
  /**
   * An S3 object was created due to a PUT request
   */
  's3:ObjectCreated:Put',
  /**
   * An S3 object was created due to an UploadPartCopy operation
   */
  's3:ObjectCreated:CompleteMultipartUpload',
  /**
   * An S3 object was removed
   */
  's3:ObjectRemoved:',
  /**
   * An S3 object was removed due to a DELETE request
   */
  's3:ObjectRemoved:Delete',
  /**
   * A delete marker was created for an S3 object version
   */
  's3:ObjectRemoved:DeleteMarkerCreated',
  /**
   * An S3 object restoration event occurred
   */
  's3:ObjectRestore:*',
  /**
   * An S3 object restoration completed
   */
  's3:ObjectRestore:Completed',
  /**
   * A temporary copy of an S3 restore object was deleted
   */
  's3:ObjectRestore:Delete',
  /**
   * An S3 object restoration started
   */
  's3:ObjectRestore:Post',
  /**
   * An S3 object tagging event occured
   */
  's3:ObjectTagging:*',
  /**
   * A tag was removed from an S3 object
   */
  's3:ObjectTagging:Delete',
  /**
   * A tag was set on an S3 object
   */
  's3:ObjectTagging:Put',
  /**
   * An S3 object of the RRS storage class is lost
   */
  's3:ReducedRedundencyLostObjet',
  /**
   * A replication event occurred
   */
  's3:Replication:*',
  /**
   * An S3 object replication operation failed
   */
  's3:Replication:OperationFailedReplication',
  /**
   * An S3 object replication operation failed due to an object being eligible but exceeding the 15-minute threshold for
   * replication
   */
  's3:Replication:OperationMissedThreshold',
  /**
   * An S3 object replication operation succeeded after the 15-minute threshold
   */
  's3:Replication:OperationReplicatedAfterThreshold',
  /**
   * An S3 object was eligible for replication but is no longer tracked by replication metrics
   */
  's3:Replication:OperationNotTracked',
  /**
   * Test event published when enabling a notification
   */
  's3:TestEvent',
] as const;
