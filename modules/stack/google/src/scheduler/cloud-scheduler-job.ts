import { CloudSchedulerJob, type CloudSchedulerJobConfig } from '@cdktf/provider-google';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Cloud Scheduler job resource
 *
 * @param resourceId Resource identifier
 * @param config Cloud Scheduler job configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudSchedulerJob<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, CloudSchedulerJobConfig>
) {
  return resource(resourceId, typedResource('google_cloud_scheduler_job', CloudSchedulerJob), config);
}
