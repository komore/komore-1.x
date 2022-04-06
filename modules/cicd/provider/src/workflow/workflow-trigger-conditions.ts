import { type LabelWorkflowTriggerCondition } from './label-workflow-trigger-condition';
import { type PullRequestWorkflowTriggerCondition } from './pull-request-workflow-trigger-condition';
import { type PushWorkflowTriggerCondition } from './push-workflow-trigger-condition';
import { type ScheduleWorkflowTriggerCondition } from './schedule-workflow-trigger-condition';

/**
 * Workflow trigger conditions
 */
export interface WorkflowTriggerConditions {
  label: LabelWorkflowTriggerCondition;
  'pull-request': PullRequestWorkflowTriggerCondition;
  push: PushWorkflowTriggerCondition;
  schedule: ScheduleWorkflowTriggerCondition;
}
