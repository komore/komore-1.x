import { HttpMethods, withHttpEndpoint as on } from '@komore/api/http';
import { batchExecuteStatement } from './commands/batch-execute-statement';
import { batchGetItem } from './commands/batch-get-item';
import { createGlobalTable } from './commands/create-global-table';
import { createTable } from './commands/create-table';
import { deleteBackup } from './commands/delete-backup';
import { deleteItem } from './commands/delete-item';
import { deleteTable } from './commands/delete-table';
import { describeBackup } from './commands/describe-backup';
import { describeContinuousBackups } from './commands/describe-continuous-backups';
import { describeContributorInsights } from './commands/describe-contributor-insights';
import { describeEndpoints } from './commands/describe-endoints';
import { describeExport } from './commands/describe-export';
import { describeKinesisStreamingDestination } from './commands/describe-kinesis-streaming-destination';
import { describeTable } from './commands/describe-table';
import { describeTimeToLive } from './commands/describe-time-to-live';
import { listTables } from './commands/list-tables';
import { putItem } from './commands/put-item';

const { POST } = HttpMethods;
const TargetHeaderName = 'X-Amz-Target' as const;
const NamespaceName = 'DynamoDB_20120810' as const;

/**
 * Adds DynamoDB endpoints to a pipeline
 */
export const withDynamoDBEndpoints = on('/dynamodb',
  on(POST, `@${TargetHeaderName}=${NamespaceName}.BatchExecuteStatement`, batchExecuteStatement),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.BatchGetItem`, batchGetItem),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.BatchWriteItem`, createTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CreateBackup`, createTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CreateGlobalTable`, createGlobalTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CreateTable`, createTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteBackup`, deleteBackup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteItem`, deleteItem),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteTable`, deleteTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeBackup`, describeBackup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeContinuousBackups`, describeContinuousBackups),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeContributorInsights`, describeContributorInsights),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeEndpoints`, describeEndpoints),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeExport`, describeExport),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeKinesisStreamingDestination`, describeKinesisStreamingDestination),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeTable`, describeTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeTimeToLive`, describeTimeToLive),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DisableKinesisStreamingDestination`, disableKinesisStreamingDestination),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.EnableKinesisStreamingDestination`, enableKinesisStreamingDestination),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ExecuteStatement`, executeStatement),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ExecuteTransaction`, executeTransaction),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ExportTableToPointInTime`, exportTableToPointInTime),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.GetItem`, getItem),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListBackups`, listBackups),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListContributorInsights`, listContributorInsights),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListExports`, listExports),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListGlobalTables`, listGlobalTables),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListTables`, listTables),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListTagsOfResource`, listTagsOfResource),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutItem`, putItem),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.Query`, query),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.RestoreTableFromBackup`, restoreTableFromBackup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.RestoreTableToPointInTime`, restoreTableToPointInTime),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.Scan`, scan),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.TagResource`, tagResource),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.TransactGetItems`, transactGetItems),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.TransactWriteItems`, transactWriteItems),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UntagResource`, untagResource),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateContinuousBackup`, updateContinuousBackup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateContributorInsights`, updateContributorInsights),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateGlobalTable`, updateGlobalTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateItem`, updateItem),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateTableReplicaAutoScaling`, updateTableReplicaAutoScaling),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateTable`, updateTable),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UpdateTimeToLive`, updateTimeToLive)
);
