import { type WorkflowTriggerCondition } from './workflow-trigger-condition';

/**
 * Schedule a workflow trigger condition
 */
export interface ScheduleWorkflowTriggerCondition extends WorkflowTriggerCondition<'schedule'> {
  /**
   * Cron expressions
   */
  readonly cronExpressions: ReadonlyArray<string>;
}
