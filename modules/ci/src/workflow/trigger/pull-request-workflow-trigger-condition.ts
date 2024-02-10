import { type WorkflowTriggerCondition } from './workflow-trigger-condition';

/**
 * Pull-request workflow trigger condition
 */
export interface PullRequestWorkflowTriggerCondition extends WorkflowTriggerCondition<'pull-request'> {

}
