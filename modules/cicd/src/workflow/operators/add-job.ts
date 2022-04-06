import { type MonoTypeOperatorFunction } from '@komore/reactive';
import { map } from 'rxjs';
import { type WorkflowDefinition } from '../workflow-definition';

/**
 * Adds a job to a workflow
 *
 * @param jobName Job name
 * @template JobName Job name
 */
export function addJob<JobName extends string>(_jobName: JobName): MonoTypeOperatorFunction<WorkflowDefinition> {
  return map(definition => definition);
}
