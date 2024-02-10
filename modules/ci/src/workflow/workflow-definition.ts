import { type WorkflowTriggerCondition } from './trigger/workflow-trigger-condition';
import { type WorkflowTriggerEventName } from './trigger/workflow-trigger-event-name';

/**
 * Workflow definition
 */
export interface WorkflowDefinition {
  readonly triggerConditions: ReadonlyArray<WorkflowTriggerCondition<WorkflowTriggerEventName>>;
}
