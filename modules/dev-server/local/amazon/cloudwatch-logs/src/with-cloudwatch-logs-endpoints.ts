import { HttpMethods, withHttpEndpoint as on } from '@komore/api/http';
import { associateKmsKey } from './commands/associate-kms-key';
import { cancelExportTask } from './commands/cancel-export-task';
import { createExportTask } from './commands/create-export-task';
import { createLogGroup } from './commands/create-log-group';
import { createLogStream } from './commands/create-log-stream';
import { deleteDestination } from './commands/delete-destination';
import { deleteLogGroup } from './commands/delete-log-group';
import { deleteLogStream } from './commands/delete-log-stream';
import { deleteMetricFilter } from './commands/delete-metric-filter';
import { deleteQueryDefinition } from './commands/delete-query-definition';
import { deleteResourcePolicy } from './commands/delete-resource-policy';
import { deleteRetentionPolicy } from './commands/delete-retention-policy';
import { deleteSubscriptionFilter } from './commands/delete-subscription-filter';
import { describeDestinations } from './commands/describe-destinations';
import { describeExportTasks } from './commands/describe-export-tasks';
import { describeLogGroups } from './commands/describe-log-groups';
import { describeMetricFilters } from './commands/describe-metric-filters';
import { describeQueries } from './commands/describe-queries';
import { describeQueryDefinitions } from './commands/describe-query-definitions';
import { describeResourcePolicies } from './commands/describe-resource-policies';
import { describeSubscriptionFilters } from './commands/describe-subscription-filters';
import { disassociateKmsKey } from './commands/disassociate-kms-key';
import { filterLogEvents } from './commands/filter-log-events';
import { getLogEvents } from './commands/get-log-events';
import { getLogGroupFields } from './commands/get-log-group-fields';
import { getLogRecord } from './commands/get-log-record';
import { getQueryResults } from './commands/get-query-results';
import { listTagsLogGroup } from './commands/list-tags-log-group';
import { putDestination } from './commands/put-destination';
import { putDestinationPolicy } from './commands/put-destination-policy';
import { putLogEvents } from './commands/put-log-events';
import { putMetricFilter } from './commands/put-metric-filter';
import { putQueryDefinition } from './commands/put-query-definition';
import { putResourcePolicy } from './commands/put-resource-policy';
import { putRetentionPolicy } from './commands/put-retention-policy';
import { putSubscriptionFilter } from './commands/put-subscription-filter';
import { startQuery } from './commands/start-query';
import { stopQuery } from './commands/stop-query';
import { tagLogGroup } from './commands/tag-log-group';
import { testMetricFilter } from './commands/test-metric-filter';
import { untagLogGroup } from './commands/untag-log-group';

const { POST } = HttpMethods;
const TargetHeaderName = 'X-Amz-Target' as const;
const NamespaceName = 'Logs_20140328' as const;

/**
 * Adds CloudWatch Logs endpoints to a pipeline
 */
export const withCloudWatchLogsEndpoints = on('/cloudwatch-logs',
  on(POST, `@${TargetHeaderName}=${NamespaceName}.AssociateKmsKey`, associateKmsKey),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CancelExportTask`, cancelExportTask),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CreateExportTask`, createExportTask),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CreateLogGroup`, createLogGroup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.CreateLogStream`, createLogStream),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteDestination`, deleteDestination),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteLogGroup`, deleteLogGroup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteLogStream`, deleteLogStream),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteMetricFilter`, deleteMetricFilter),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteQueryDefinition`, deleteQueryDefinition),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteResourcePolicy`, deleteResourcePolicy),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteRetentionPolicy`, deleteRetentionPolicy),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DeleteSubscriptionFilter`, deleteSubscriptionFilter),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeDestinations`, describeDestinations),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeExportTasks`, describeExportTasks),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeLogGroups`, describeLogGroups),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeMetricFilters`, describeMetricFilters),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeQueries`, describeQueries),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeQueryDefinitions`, describeQueryDefinitions),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeResourcePolicies`, describeResourcePolicies),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DescribeSubscriptionFilters`, describeSubscriptionFilters),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.DisassociateKmsKey`, disassociateKmsKey),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.FilterLogEvents`, filterLogEvents),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.GetLogEvents`, getLogEvents),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.GetLogGroupFields`, getLogGroupFields),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.GetLogRecord`, getLogRecord),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.GetQueryResults`, getQueryResults),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.ListTagsLogGroup`, listTagsLogGroup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutDestination`, putDestination),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutDestinationPolicy`, putDestinationPolicy),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutLogEvents`, putLogEvents),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutMetricFilter`, putMetricFilter),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutQueryDefinition`, putQueryDefinition),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutResourcePolicy`, putResourcePolicy),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutRetentionPolicy`, putRetentionPolicy),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.PutSubscriptionFilter`, putSubscriptionFilter),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.StartQuery`, startQuery),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.StopQuery`, stopQuery),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.TagLogGroup`, tagLogGroup),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.TestMetricFilter`, testMetricFilter),
  on(POST, `@${TargetHeaderName}=${NamespaceName}.UntagLogGroup`, untagLogGroup)
);
