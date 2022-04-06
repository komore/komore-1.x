import { type ReadonlyRecord } from '@komore/typescript';
import { type WorkflowLabelActivity } from '@komore/cicd/provider';

/**
 * GitHub workflow label activities mapping
 */
export const GITHUB_WORKFLOW_LABEL_ACTIVITIES: ReadonlyRecord<WorkflowLabelActivity, string> = {
  created: 'created',
  deleted: 'deleted',
  updated: 'edited',
};
