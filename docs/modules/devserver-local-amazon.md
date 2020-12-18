# Amazon Emulation

TODO.

## Services

| Service         | Command                                      | Status             | Remarks                                  |
| :-------------- | :------------------------------------------- | :----------------- | :--------------------------------------- |
| CloudWatch Logs | [`AssociateKmsKey`]                          | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`CancelExportTask`]                         | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`CreateExportTask`]                         | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`CreateLogGroup`]                           | :construction:     |                                          |
| CloudWatch Logs | [`CreateLogStream`]                          | :construction:     |                                          |
| CloudWatch Logs | [`DeleteDestination`]                        | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DeleteLogGroup`]                           | :construction:     |                                          |
| CloudWatch Logs | [`DeleteLogStream`]                          | :construction:     |                                          |
| CloudWatch Logs | [`DeleteMetricFilter`]                       | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DeleteQueryDefinition`]                    | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DeleteResourcePolicy`]                     | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DeleteRetentionPolicy`]                    | :construction:     |                                          |
| CloudWatch Logs | [`DeleteSubscriptionFilter`]                 | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeDestinations`]                     | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeExportTasks`]                      | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeLogGroups`]                        | :construction:     |                                          |
| CloudWatch Logs | [`DescribeLogStreams`]                       | :construction:     |                                          |
| CloudWatch Logs | [`DescribeMetricFilters`]                    | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeQueries`]                          | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeQueryDefinitions`]                 | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeResourcePolicies`]                 | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DescribeSubscriptionFilters`]              | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`DisassociateKmsKey`]                       | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`FilterLogEvents`]                          | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`GetLogEvents`]                             | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`GetLogGroupFields`]                        | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`GetLogRecord`]                             | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`GetQueryResults`]                          | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`ListTagsLogGroup`]                         | :construction:     |                                          |
| CloudWatch Logs | [`PutDestination`]                           | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`PutDestinationPolicy`]                     | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`PutLogEvents`]                             | :construction:     |                                          |
| CloudWatch Logs | [`PutMetricFilter`]                          | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`PutQueryDefinition`]                       | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`PutResourcePolicy`]                        | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`PutRetentionPolicy`]                       | :construction:     |                                          |
| CloudWatch Logs | [`PutSubscriptionFilter`]                    | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`StartQuery`]                               | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`StopQuery`]                                | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`TagLogGroup`]                              | :construction:     |                                          |
| CloudWatch Logs | [`TestMetricFilter`]                         | :heavy_minus_sign: |                                          |
| CloudWatch Logs | [`UntagLogGroup`]                            | :construction:     |                                          |
| DynamoDB        | [`BatchExecuteStatement`]                    | :construction:     |                                          |
| DynamoDB        | [`BatchGetItem`]                             | :construction:     |                                          |
| DynamoDB        | [`BatchWriteItem`]                           | :construction:     |                                          |
| DynamoDB        | [`CreateBackup`]                             | :heavy_minus_sign: |                                          |
| DynamoDB        | [`CreateGlobalTable`]                        | :heavy_minus_sign: |                                          |
| DynamoDB        | [`CreateTable`]                              | :construction:     |                                          |
| DynamoDB        | [`DeleteBackup`]                             | :heavy_check_sign: |                                          |
| DynamoDB        | [`DeleteItem`]                               | :construction:     |                                          |
| DynamoDB        | [`DeleteTable`]                              | :construction:     |                                          |
| DynamoDB        | [`DescribeBackup`]                           | :heavy_check_mark: |                                          |
| DynamoDB        | [`DescribeContinuousBackups`]                | :heavy_minus_sign: |                                          |
| DynamoDB        | [`DescribeContributorInsights`]              | :heavy_minus_sign: |                                          |
| DynamoDB        | [`DescribeEndpoints`]                        | :heavy_minus_sign: |                                          |
| DynamoDB        | [`DescribeExport`]                           | :heavy_minus_sign: |                                          |
| DynamoDB        | [`DescribeGlobalTable`]                      | :heavy_minus_sign: | Deprecated since version 2019.11.21      |
| DynamoDB        | [`DescribeGlobalTableSettings`]              | :heavy_minus_sign: | Deprecated since version 2019.11.21      |
| DynamoDB        | [`DescribeKinesisStreamingDestination`]      | :heavy_minus_sign: |                                          |
| DynamoDB        | [`DescribeLimits`]                           | :heavy_plus_sign:  |                                          |
| DynamoDB        | [`DescribeTable`]                            | :construction:     |                                          |
| DynamoDB        | [`DescribeTableReplicaAutoScaling`]          | :heavy_minus_sign: |                                          |
| DynamoDB        | [`DescribeTimeToLive`]                       | :heavy_check_mark: |                                          |
| DynamoDB        | [`DisableKinesisStreamingDestination`]       | :heavy_minus_sign: |                                          |
| DynamoDB        | [`EnableKinesisStreamingDestination`]        | :heavy_minus_sign: |                                          |
| DynamoDB        | [`ExecuteStatement`]                         | :construction:     |                                          |
| DynamoDB        | [`ExecuteTransaction`]                       | :construction:     |                                          |
| DynamoDB        | [`ExportTableToPointInTime`]                 | :heavy_minus_sign: |                                          |
| DynamoDB        | [`GetItem`]                                  | :construction:     |                                          |
| DynamoDB        | [`ListBackups`]                              | :heavy_minus_sign: |                                          |
| DynamoDB        | [`ListTables`]                               | :construction:     |                                          |
| DynamoDB        | [`ListTagsOfResource`]                       | :heavy_plus_sign:  |                                          |
| DynamoDB        | [`PutItem`]                                  | :construction:     |                                          |
| DynamoDB        | [`Query`]                                    | :construction:     |                                          |
| DynamoDB        | [`RestoreTableFromBackup`]                   | :heavy_plus_sign:  | Could be useful for snapshots during dev |
| DynamoDB        | [`RestoreTableToPointInTime`]                | :heavy_minus_sign: |                                          |
| DynamoDB        | [`Scan`]                                     | :heavy_plus_sign:  |                                          |
| DynamoDB        | [`TagResource` (DynamoDB)]                   | :heavy_plus_sign:  | Needed for Terraform?                    |
| DynamoDB        | [`TransactGetItems`]                         | :heavy_plus_sign:  |                                          |
| DynamoDB        | [`TransactWriteItems`]                       | :heavy_plus_sign:  |                                          |
| DynamoDB        | [`UntagResource` (DynamoDB)]                 | :heavy_plus_sign:  | Needed for Terraform?                    |
| DynamoDB        | [`UpdateContinuousBackups`]                  | :heavy_minus_sign: |                                          |
| DynamoDB        | [`UpdateContributorInsight`]                 | :heavy_minus_sign: |                                          |
| DynamoDB        | [`UpdateGlobalTable`]                        | :heavy_minus_sign: |                                          |
| DynamoDB        | [`UpdateGlobalTableSettings`]                | :heavy_minus_sign: |                                          |
| DynamoDB        | [`UpdateItem`]                               | :construction:     |                                          |
| DynamoDB        | [`UpdateTable`]                              | :construction:     |                                          |
| DynamoDB        | [`UpdateTableReplicaAutoScaling`]            | :heavy_minus_sign: |                                          |
| DynamoDB        | [`UpdateTimeToLive`]                         | :heavy_plus_sign:  |                                          |
| Lambda          | [`AddLayerVersionPermission`]                | :heavy_minus_sign: |                                          |
| Lambda          | [`AddPermission`]                            | :heavy_minus_sign: | Likely necessary for Terraform           |
| Lambda          | [`CreateAlias`]                              | :heavy_plus_sign:  | Useful for testing versions/etc.         |
| Lambda          | [`CreateCodeSigningConfig`]                  | :heavy_minus_sign: |                                          |
| Lambda          | [`CreateEventSourceMapping`]                 | :construction:     |                                          |
| Lambda          | [`CreateFunction`]                           | :construction:     |                                          |
| Lambda          | [`DeleteAlias`]                              | :heavy_plus_sign:  |                                          |
| Lambda          | [`DeleteCodeSigningConfig`]                  | :heavy_minus_sign: |                                          |
| Lambda          | [`DeleteEventSourceMapping`]                 | :heavy_plus_sign:  |                                          |
| Lambda          | [`DeleteFunction`]                           | :construction:     |                                          |
| Lambda          | [`DeleteFunctionCodeSigningConfig`]          | :heavy_minus_sign: |                                          |
| Lambda          | [`DeleteFunctionConcurrency`]                | :heavy_plus_sign:  |                                          |
| Lambda          | [`DeleteFunctionEventInvokeConfig`]          | :heavy_plus_sign:  |                                          |
| Lambda          | [`DeleteLayerVersion`]                       | :heavy_minus_sign: |                                          |
| Lambda          | [`DeleteProvisionedConcurrencyConfig`]       | :heavy_minus_sign: |                                          |
| Lambda          | [`GetAccountSettings`]                       | :heavy_check_mark: |                                          |
| Lambda          | [`GetAlias`]                                 | :construction:     |                                          |
| Lambda          | [`GetCodeSigningConfig`]                     | :heavy_minus_sign: |                                          |
| Lambda          | [`GetEventSourceMapping`]                    | :heavy_plus_sign:  |                                          |
| Lambda          | [`GetFunction`]                              | :construction:     |                                          |
| Lambda          | [`GetFunctionCodeSigningConfig`]             | :heavy_minus_sign: |                                          |
| Lambda          | [`GetFunctionConcurrency`]                   | :heavy_plus_sign:  |                                          |
| Lambda          | [`GetFunctionConfiguration`]                 | :construction:     |                                          |
| Lambda          | [`GetFunctionInvokeConfig`]                  | :heavy_plus_sign:  |                                          |
| Lambda          | [`GetLayerVersion`]                          | :heavy_minus_sign: |                                          |
| Lambda          | [`GetLayerVersionByArn`]                     | :heavy_minus_sign: |                                          |
| Lambda          | [`GetLayerVersionPolicy`]                    | :heavy_minus_sign: |                                          |
| Lambda          | [`GetPolicy`]                                | :heavy_plus_sign:  | Likely needed for Terraform              |
| Lambda          | [`GetProvisionedConcurrencyConfig`]          | :heavy_minus_sign: |                                          |
| Lambda          | [`Invoke`]                                   | :construction:     |                                          |
| Lambda          | [`ListAliases`]                              | :heavy_minus_sign: |                                          |
| Lambda          | [`ListCodeSigningConfigs`]                   | :heavy_minus_sign: |                                          |
| Lambda          | [`ListEventSourceMappings`]                  | :heavy_plus_sign:  |                                          |
| Lambda          | [`ListFunctionEventInvokeConfigs`]           | :heavy_minus_sign: |                                          |
| Lambda          | [`ListFunctions`]                            | :heavy_check_mark: |                                          |
| Lambda          | [`ListFunctionsByCodeSigningConfig`]         | :heavy_minus_sign: |                                          |
| Lambda          | [`ListLayers`]                               | :heavy_minus_sign: |                                          |
| Lambda          | [`ListLayerVersions`]                        | :heavy_minus_sign: |                                          |
| Lambda          | [`ListProvisionedConcurrencyConfigs`]        | :heavy_minus_sign: |                                          |
| Lambda          | [`ListTags`]                                 | :heavy_check_mark: |                                          |
| Lambda          | [`ListVersionsByFunction`]                   | :heavy_minus_sign: |                                          |
| Lambda          | [`PublishLayerVersion`]                      | :heavy_minus_sign: |                                          |
| Lambda          | [`PublishVersion`]                           | :heavy_minus_sign: |                                          |
| Lambda          | [`PutFunctionCodeSigningConfig`]             | :heavy_minus_sign: |                                          |
| Lambda          | [`PutFunctionConcurrency`]                   | :heavy_plus_sign:  |                                          |
| Lambda          | [`PutFunctionEventInvokeConfig`]             | :heavy_plus_sign:  |                                          |
| Lambda          | [`PutProvisionedConcurrencyConfig`]          | :heavy_minus_sign: |                                          |
| Lambda          | [`RemoveLayerVErsionPermission`]             | :heavy_minus_sign: |                                          |
| Lambda          | [`RemovePermission`]                         | :heavy_plus_sign:  | Likely needed for Terraform              |
| Lambda          | [`TagResource` (Lambda)]                     | :heavy_check_mark: |                                          |
| Lambda          | [`UntagResource` (Lambda)]                   | :heavy_check_mark: |                                          |
| Lambda          | [`UpdateAlias`]                              | :heavy_plus_sign:  |                                          |
| Lambda          | [`UpdateCodeSigningConfig`]                  | :heavy_minus_sign: |                                          |
| Lambda          | [`UpdateEventSourceMapping`]                 | :heavy_plus_sign:  |                                          |
| Lambda          | [`UpdateFunctionCode`]                       | :construction:     |                                          |
| Lambda          | [`UpdateFunctionConfiguration`]              | :construction:     |                                          |
| Lambda          | [`UpdateFunctionEventInvokeConfig`]          | :construction:     |                                          |
| S3              | [`DeleteBucketReplication`]                  | :heavy_minus_sign: |                                          |
| S3              | [`DeleteBucketTagging`]                      | :heavy_plus_sign:  |                                          |
| S3              | [`DeleteBucketWebsite`]                      | :heavy_minus_sign: |                                          |
| S3              | [`DeleteObject`]                             | :heavy_plus_sign:  |                                          |
| S3              | [`DeleteObjects`]                            | :heavy_plus_sign:  |                                          |
| S3              | [`DeleteObjectTagging`]                      | :heavy_plus_sign:  |                                          |
| S3              | [`DeletePublicAccessBlock`]                  | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketAccelerationConfiguration`]       | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketAcl`]                             | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketAnalyticsConfiguration`]          | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketCors`]                            | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketEncryption`]                      | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketIntelligentTieringConfiguration`] | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketInventoryConfiguration`]          | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketLifecycleConfiguration`]          | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketLocation`]                        | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketLogging`]                         | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketMetricsConfiguration`]            | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketNotificationConfiguration`]       | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketOwnershipControls`]               | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketPolicy`]                          | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketPolicyStatus`]                    | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketReplication`]                     | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketRequestPayment`]                  | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketTagging`]                         | :heavy_plus_sign:  |                                          |
| S3              | [`GetBucketVersioning`]                      | :heavy_minus_sign: |                                          |
| S3              | [`GetBucketWebsite`]                         | :heavy_minus_sign: |                                          |
| S3              | [`GetObject`]                                | :construction:     |                                          |
| S3              | [`HeadBucket`]                               | :construction:     |                                          |
| S3              | [`ListBuckets`]                              | :heavy_check_mark: |                                          |
| S3              | [`ListObjectsV2`]                            | :construction:     |                                          |
| SES             | [`CreateConfigurationSet`]                   | :heavy_minus_sign: |                                          |
| SES             | [`CreateConfigurationSetEventDestination`]   | :heavy_minus_sign: |                                          |
| SES             | [`CreateContact`]                            | :heavy_minus_sign: |                                          |
| SES             | [`CreateContactList`]                        | :heavy_minus_sign: |                                          |
| SES             | [`CreateCustomVerificationEmailTemplate`]    | :heavy_minus_sign: |                                          |
| SES             | [`CreateDedicatedIpPool`]                    | :heavy_minus_sign: |                                          |
| SES             | [`CreateDeliverabilityTestReport`]           | :heavy_minus_sign: |                                          |
| SES             | [`CreateEmailIdentity`]                      | :heavy_minus_sign: |                                          |
| SES             | [`CreateEmailIdentityPolicy`]                | :heavy_minus_sign: |                                          |
| SES             | [`CreateEmailTemplate`]                      | :heavy_minus_sign: |                                          |
| SES             | [`CreateImportJob`]                          | :heavy_minus_sign: |                                          |
| SES             | [`DeleteConfigurationSet`]                   | :heavy_minus_sign: |                                          |
| SES             | [`DeleteConfigurationSetEventDestination`]   | :heavy_minus_sign: |                                          |
| SES             | [`DeleteContact`]                            | :heavy_minus_sign: |                                          |
| SES             | [`DeleteContactList`]                        | :heavy_minus_sign: |                                          |
| SES             | [`DeleteCustomVerificationEmailTemplate`]    | :heavy_minus_sign: |                                          |
| SES             | [`DeleteDedicatedIpPool`]                    | :heavy_minus_sign: |                                          |
| SES             | [`DeleteEmailIdentity`]                      | :heavy_minus_sign: |                                          |
| SES             | [`DeleteEmailIdentityPolicy`]                | :heavy_minus_sign: |                                          |
| SES             | [`DeleteEmailTemplate`]                      | :heavy_minus_sign: |                                          |
| SES             | [`DeleteSuppressedDestination`]              | :heavy_minus_sign: |                                          |
| SES             | [`GetAccount`]                               | :heavy_minus_sign: |                                          |
| SES             | [`GetBlacklistReports`]                      | :heavy_minus_sign: |                                          |
| SES             | [`GetConfigurationSet`]                      | :heavy_minus_sign: |                                          |
| SES             | [`GetConfigurationSetEventDestinations`]     | :heavy_minus_sign: |                                          |
| SES             | [`GetContact`]                               | :heavy_minus_sign: |                                          |
| SES             | [`GetContactList`]                           | :heavy_minus_sign: |                                          |
| SES             | [`GetCustomVerificationEmailTemplate`]       | :heavy_minus_sign: |                                          |
| SES             | [`GetDedicatedIp`]                           | :heavy_minus_sign: |                                          |
| SES             | [`GetDedicatedIps`]                          | :heavy_minus_sign: |                                          |
| SES             | [`GetDeliverabilityDashboardOptions`]        | :heavy_minus_sign: |                                          |
| SES             | [`GetDeliverabilityTestReport`]              | :heavy_minus_sign: |                                          |
| SES             | [`GetDomainDeliverabilityCampaign`]          | :heavy_minus_sign: |                                          |
| SES             | [`GetDomainStatisticsReport`]                | :heavy_minus_sign: |                                          |
| SES             | [`GetEmailIdentity`]                         | :heavy_minus_sign: |                                          |
| SES             | [`GetEmailIdentityPolicies`]                 | :heavy_minus_sign: |                                          |
| SES             | [`GetEmailTemplate`]                         | :heavy_minus_sign: |                                          |
| SES             | [`GetImportJob`]                             | :heavy_minus_sign: |                                          |
| SES             | [`GetSuppressedDestination`]                 | :heavy_minus_sign: |                                          |
| SES             | [`ListConfigurationSets`]                    | :heavy_minus_sign: |                                          |
| SES             | [`ListContactLists`]                         | :heavy_minus_sign: |                                          |
| SES             | [`ListContacts`]                             | :heavy_minus_sign: |                                          |
| SES             | [`ListCustomVerificationEmailTemplates`]     | :heavy_minus_sign: |                                          |
| SES             | [`ListDedicatedIpPools`]                     | :heavy_minus_sign: |                                          |
| SES             | [`ListDeliverabilityTestReports`]            | :heavy_minus_sign: |                                          |
| SES             | [`ListDomainDeliverabilityCampaigns`]        | :heavy_minus_sign: |                                          |
| SES             | [`ListEmailIdentities`]                      | :heavy_minus_sign: |                                          |
| SES             | [`ListEmailTemplates`]                       | :heavy_minus_sign: |                                          |
| SES             | [`ListImportJobs`]                           | :heavy_minus_sign: |                                          |
| SES             | [`ListSuppressedDestinations`]               | :heavy_minus_sign: |                                          |
| SES             | [`ListTagsForResource`]                      | :heavy_minus_sign: |                                          |
| SES             | [`PutAccountDedicatedIpWarmupAttributes`]    | :heavy_minus_sign: |                                          |
| SES             | [`PutAccountDetails`]                        | :heavy_minus_sign: |                                          |
| SES             | [`PutAccountSendingAttributes`]              | :heavy_minus_sign: |                                          |
| SES             | [`PutAccountSuppressionAttributes`]          | :heavy_minus_sign: |                                          |
| SES             | [`PutConfigurationSetDeliveryOptions`]       | :heavy_minus_sign: |                                          |
| SES             | [`PutConfigurationSetReputationOptions`]     | :heavy_minus_sign: |                                          |
| SES             | [`PutConfigurationSetSendingOptions`]        | :heavy_minus_sign: |                                          |
| SES             | [`PutConfigurationSetSuppressionOptions`]    | :heavy_minus_sign: |                                          |
| SES             | [`PutConfigurationSetTrackingOptions`]       | :heavy_minus_sign: |                                          |
| SES             | [`PutDedicatedIpInPool`]                     | :heavy_minus_sign: |                                          |
| SES             | [`PutDedicatedIpWarmupAttributes`]           | :heavy_minus_sign: |                                          |
| SES             | [`PutDeliverabilityDashboardOption`]         | :heavy_minus_sign: |                                          |
| SES             | [`PutEmailIdentityDkimAttributes`]           | :heavy_minus_sign: |                                          |
| SES             | [`PutEmailIdentityDkimSigningAttributes`]    | :heavy_minus_sign: |                                          |
| SES             | [`PutEmailIdentityFeedbackAttributes`]       | :heavy_minus_sign: |                                          |
| SES             | [`PutEmailIdentityMailFromAttributes`]       | :heavy_minus_sign: |                                          |
| SES             | [`PutSuppressedDestination`]                 | :heavy_minus_sign: |                                          |
| SES             | [`SendBulkEmail`]                            | :heavy_minus_sign: |                                          |
| SES             | [`SendCustomVerificationEmail`]              | :heavy_minus_sign: |                                          |
| SES             | [`SendEmail`]                                | :heavy_minus_sign: |                                          |
| SES             | [`TagResource (SES)`]                        | :heavy_minus_sign: |                                          |
| SES             | [`TestRenderEmailTemplate`]                  | :heavy_minus_sign: |                                          |
| SES             | [`UntagResource (SES)`]                      | :heavy_minus_sign: |                                          |
| SES             | [`UpdateConfigurationSetEventDestination`]   | :heavy_minus_sign: |                                          |
| SES             | [`UpdateContact`]                            | :heavy_minus_sign: |                                          |
| SES             | [`UpdateContactList`]                        | :heavy_minus_sign: |                                          |
| SES             | [`UpdateCustomVerificationEmailTemplate`]    | :heavy_minus_sign: |                                          |
| SES             | [`UpdateEmailIdentityPolicy`]                | :heavy_minus_sign: |                                          |
| SES             | [`UpdateEmailTemplate`]                      | :heavy_minus_sign: |                                          |
| SQS             | [`AddPermission` (SQS)]                      | :heavy_minus_sign: |                                          |
| SQS             | [`ChangeMessageVisibility`]                  | :heavy_minus_sign: |                                          |
| SQS             | [`ChangeMessageVisibilityBatch`]             | :heavy_minus_sign: |                                          |
| SQS             | [`CreateQueue`]                              | :construction:     |                                          |
| SQS             | [`DeleteMessage`]                            | :construction:     |                                          |
| SQS             | [`DeleteMessageBatch`]                       | :construction:     |                                          |
| SQS             | [`DeleteQueue`]                              | :construction:     |                                          |
| SQS             | [`GetQueueAttributes`]                       | :heavy_minus_sign: |                                          |
| SQS             | [`GetQueueUrl`]                              | :heavy_minus_sign: |                                          |
| SQS             | [`ListDeadLetterSourceQueues`]               | :heavy_minus_sign: |                                          |
| SQS             | [`ListQueues`]                               | :construction:     |                                          |
| SQS             | [`ListQueueTags`]                            | :construction:     |                                          |
| SQS             | [`PurgeQueue`]                               | :construction:     |                                          |
| SQS             | [`ReceiveMessage`]                           | :construction:     |                                          |
| SQS             | [`RemovePermission` (SQS)]                   | :heavy_minus_sign: |                                          |
| SQS             | [`SendMessage`]                              | :construction:     |                                          |
| SQS             | [`SendMessageBatch`]                         | :construction:     |                                          |
| SQS             | [`SetQueueAttributes`]                       | :heavy_minus_sign: |                                          |
| SQS             | [`TagQueue`]                                 | :construction:     |                                          |
| SQS             | [`UntagQueue`]                               | :construction:     |                                          |

[`addlayerversionpermission`]: https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html
[`addpermission` (lambda)]: https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html
[`addpermission` (sqs)]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html
[`associatekmskey`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
[`batchexecutestatement`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html
[`batchgetitem`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
[`batchwriteitem`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
[`cancelexporttask`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
[`changemessagevisibility`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html
[`changemessagevisibilitybatch`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html
[`createalias`]: https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html
[`createbackup`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
[`createcodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html
[`createconfigurationset`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSet.html
[`createconfigurationseteventdestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSetEventDestination.html
[`createcontact`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContact.html
[`createcontactlist`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContactList.html
[`createcustomverificationemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateCustomVerificationEmailTemplate.html
[`creatededicatedippool`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDedicatedIpPool.html
[`createdeliverabilitytestreport`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDeliverabilityTestReport.html
[`createemailidentity`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentity.html
[`createemailidentitypolicy`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentityPolicy.html
[`createemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html
[`createeventsourcemapping`]: https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html
[`createexporttask`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
[`createglobaltable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
[`createimportjob`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateImportJob.html
[`createloggroup`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
[`createlogstream`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
[`createqueue`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html
[`createtable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
[`deletealias`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html
[`deletebackup`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
[`deletebucketreplication`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html
[`deletebuckettagging`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html
[`deletebucketwebsite`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
[`deletecodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html
[`deleteconfigurationset`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSet.html
[`deleteconfigurationseteventdestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteConfigurationSetEventDestination.html
[`deletecontact`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContact.html
[`deletecontactlist`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContactList.html
[`deletecustomverificationemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteCustomVerificationEmailTemplate.html
[`deletededicatedippool`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteDedicatedIpPool.html
[`deletedestination`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
[`deleteemailidentity`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentity.html
[`deleteemailidentitypolicy`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentityPolicy.html
[`deleteemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html
[`deleteeventsourcemapping`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html
[`deletefunction`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html
[`deletefunctioncodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html
[`deletefunctionconcurrency`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html
[`deletefunctioneventinvokeconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html
[`deleteitem`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
[`deletelayerversion`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html
[`deleteloggroup`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
[`deletelogstream`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
[`deletesuppresseddestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html
[`deletemessage`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html
[`deletemetricfilter`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
[`deleteobject`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
[`deleteobjects`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html
[`deleteobjecttagging`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
[`deleteprovisionedconcurrencyconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html
[`deletepublicaccessblock`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html
[`deletequerydefinition`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html
[`deletequeue`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html
[`deleteresourcepolicy`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
[`deleteretentionpolicy`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
[`deletesubscriptionfilter`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
[`deletesuppresseddestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html
[`deletetable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
[`describebackup`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
[`describecontinuousbackups`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
[`describecontributorinsights`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
[`describedestinations`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
[`describeendpoints`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeEndpoints.html
[`describeexport`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html
[`describeexporttasks`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
[`describeglobaltable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
[`describeglobaltablesettings`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
[`describekinesisstreamingdestination`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html
[`describelimits`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
[`describeloggroups`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
[`describelogstreams`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
[`describemetricfilters`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
[`describequeries`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
[`describequerydefinitions`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html
[`describeresourcepolicies`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
[`describesubscriptionfilters`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
[`describetable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
[`describetablereplicaautoscaling`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
[`describetimetolive`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
[`disablekinesisstreamingdestination`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html
[`disassociatekmskey`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
[`enablekinesisstreamingdestination`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html
[`executestatement`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
[`executetransaction`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteTransaction.html
[`exporttabletopointintime`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html
[`filterlogevents`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
[`getaccount`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetAccount.html
[`getaccountsettings`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html
[`getalias`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html
[`getblacklistreports`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetBlacklistReports.html
[`getbucketaccelerationconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
[`getbucketacl`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
[`getbucketanalyticsconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
[`getbucketcors`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
[`getbucketencryption`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
[`getbucketintelligenttieringconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html
[`getbucketinventoryconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
[`getbucketlifecycleconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
[`getbucketlocation`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
[`getbucketlogging`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
[`getbucketmetricsconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
[`getbucketnotificationconfiguration`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotificationConfiguration.html
[`getbucketownershipcontrols`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html
[`getbucketpolicy`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
[`getbucketpolicystatus`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
[`getbucketreplication`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
[`getbucketrequestpayment`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
[`getbuckettagging`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
[`getbucketversioning`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
[`getbucketwebsite`]: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
[`getcodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html
[`getconfigurationset`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSet.html
[`getconfigurationseteventdestinations`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetConfigurationSetEventDestinations.html
[`getcontact`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContact.html
[`getcontactlist`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContactList.html
[`getcustomverificationemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetCustomVerificationEmailTemplate.html
[`getdedicatedip`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIp.html
[`getdedicatedips`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIps.html
[`getdeliverabilitydashboardoptions`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityDashboardOptions.html
[`getdeliverabilitytestreport`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDeliverabilityTestReport.html
[`getdomaindeliverabilitycampaign`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainDeliverabilityCampaign.html
[`getdomainstatisticsreport`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDomainStatisticsReport.html
[`getemailidentity`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentity.html
[`getemailidentitypolicies`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentityPolicies.html
[`getemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailTemplate.html
[`geteventsourcemapping`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html
[`getfunction`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html
[`getfunctioncodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html
[`getfunctionconcurrency`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html
[`getfunctionconfiguration`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
[`getfunctioninvokeconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html
[`getimportjob`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetImportJob.html
[`getitem`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
[`getlayerversion`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html
[`getlayerversionbyarn`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionByArn.html
[`getlayerversionpolicy`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html
[`getlogevents`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
[`getloggroupfields`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
[`getlogrecord`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
[`getpolicy`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html
[`getprovisionedconcurrencyconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html
[`getqueryresults`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
[`getqueueattributes`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html
[`getqueueurl`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html
[`getsuppresseddestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetSuppressedDestination.html
[`invoke`]: https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
[`listaliases`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html
[`listbackups`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
[`listcodesigningconfigs`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html
[`listconfigurationsets`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListConfigurationSets.html
[`listcontactlists`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContactLists.html
[`listcontacts`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContacts.html
[`listcustomverificationemailtemplates`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListCustomVerificationEmailTemplates.html
[`listdeadlettersourcequeues`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html
[`listdedicatedippools`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDedicatedIpPools.html
[`listdeliverabilitytestreports`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDeliverabilityTestReports.html
[`listdomaindeliverabilitycampaigns`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListDomainDeliverabilityCampaigns.html
[`listemailidentities`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailIdentities.html
[`listemailtemplates`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailTemplates.html
[`listeventsourcemappings`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html
[`listfunctioneventinvokeconfigs`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html
[`listfunctions`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html
[`listfunctionsbycodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html
[`listimportjobs`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListImportJobs.html
[`listlayers`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html
[`listlayerversions`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html
[`listprovisionedconcurrencyconfigs`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html
[`listqueues`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html
[`listqueuetags`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html
[`listsuppresseddestinations`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListSuppressedDestinations.html
[`listtables`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
[`listtags`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html
[`listtagsforresource`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListTagsForResource.html
[`listtagsloggroup`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
[`listtagsofresource`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
[`listversionsbyfunction`]: https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html
[`publishlayerversion`]: https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html
[`publishversion`]: https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html
[`purgequeue`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html
[`putaccountdedicatedipwarmupattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDedicatedIpWarmupAttributes.html
[`putaccountdetails`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDetails.html
[`putaccountsendingattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSendingAttributes.html
[`putaccountsuppressionattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSuppressionAttributes.html
[`putconfigurationsetdeliveryoptions`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetDeliveryOptions.html
[`putconfigurationsetreputationoptions`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetReputationOptions.html
[`putconfigurationsetsendingoptions`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSendingOptions.html
[`putconfigurationsetsuppressionoptions`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSuppressionOptions.html
[`putconfigurationsettrackingoptions`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetTrackingOptions.html
[`putdedicatedipinpool`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpInPool.html
[`putdedicatedipwarmupattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDedicatedIpWarmupAttributes.html
[`putdeliverabilitydashboardoption`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutDeliverabilityDashboardOption.html
[`putdestination`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html
[`putdestinationpolicy`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
[`putemailidentitydkimattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimAttributes.html
[`putemailidentitydkimsigningattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimSigningAttributes.html
[`putemailidentityfeedbackattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityFeedbackAttributes.html
[`putemailidentitymailfromattributes`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityMailFromAttributes.html
[`putfunctioncodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html
[`putfunctionconcurrency`]: https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html
[`putfunctioneventinvokeconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html
[`putitem`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
[`putlogevents`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
[`putmetricfilter`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
[`putprovisionedconcurrencyconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html
[`putquerydefinition`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html
[`putresourcepolicy`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
[`putretentionpolicy`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
[`putsubscriptionfilter`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html
[`putsuppresseddestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutSuppressedDestination.html
[`query`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
[`receivemessage`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html
[`removelayerversionpermission`]: https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html
[`removepermission` (lambda)]: https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html
[`removepermission` (sqs)]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html
[`restoretablefrombackup`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
[`restoretabletopointintime`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
[`scan`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
[`sendbulkemail`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html
[`sendcustomverificationemail`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendCustomVerificationEmail.html
[`sendemail`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html
[`sendmessage`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html
[`sendmessagebatch`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html
[`setqueueattributes`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html
[`startquery`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
[`stopquery`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
[`tagloggroup`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
[`tagqueue`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html
[`tagresource` (dynamodb)]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
[`tagresource` (lambda)]: https://docs.aws.amazon.com/lambda/latest/dg/API_TagResource.html
[`tagresource (ses)`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TagResource.html
[`testmetricfilter`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
[`testrenderemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TestRenderEmailTemplate.html
[`transactgetitems`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html
[`transactwriteitems`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html
[`untagloggroup`]: https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
[`untagqueue`]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html
[`untagresource` (dynamodb)]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
[`untagresource` (lambda)]: https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html
[`untagresource (ses)`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UntagResource.html
[`updatealias`]: https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html
[`updatecodesigningconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html
[`updateconfigurationseteventdestination`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateConfigurationSetEventDestination.html
[`updatecontact`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContact.html
[`updatecontactlist`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContactList.html
[`updatecontinuousbackups`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
[`updatecontributorinsight`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
[`updatecustomverificationemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateCustomVerificationEmailTemplate.html
[`updateemailidentitypolicy`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailIdentityPolicy.html
[`updateemailtemplate`]: https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailTemplate.html
[`updateeventsourcemapping`]: https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html
[`updatefunctioncode`]: https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html
[`updatefunctionconfiguration`]: https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html
[`updatefunctioneventinvokeconfig`]: https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html
[`updateglobaltable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
[`updateglobaltablesettings`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
[`updateitem`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
[`updatetable`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
[`updatetablereplicaautoscaling`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
[`updatetimetolive`]: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
