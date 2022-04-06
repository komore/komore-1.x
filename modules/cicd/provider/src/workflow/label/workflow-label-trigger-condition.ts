import { type WorkflowTriggerCondition } from '../workflow-trigger-condition';
import { type WorkflowLabelActivity } from './workflow-label-activity';

/**
 * Workflow label trigger condition
 */
export interface WorkflowLabelTriggerCondition extends WorkflowTriggerCondition<'label'> {
  readonly activities: ReadonlyArray<WorkflowLabelActivity>;
}
