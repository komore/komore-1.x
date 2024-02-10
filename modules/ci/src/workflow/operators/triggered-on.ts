import { map, type MonoTypeOperatorFunction } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';
import { type LabelWorkflowTriggerCondition } from '../trigger/label-workflow-trigger-condition';
import { type PullRequestWorkflowTriggerCondition } from '../trigger/pull-request-workflow-trigger-condition';
import { type PushWorkflowTriggerCondition } from '../trigger/push-workflow-trigger-condition';
import { type WorkflowTriggerEventName } from '../trigger/workflow-trigger-event-name';
import { type WorkflowDefinition } from '../workflow-definition';

/**
 * Adds a label workflow trigger
 *
 * @param event Event
 * @param options Label trigger options
 */
export function triggeredOn(
  eventType: 'label',
  options: Omit<LabelWorkflowTriggerCondition, 'event'>
): MonoTypeOperatorFunction<WorkflowDefinition>;

/**
 * Adds a pull-request workflow trigger
 *
 * @param event Event
 * @param options Pull-request trigger options
 */
export function triggeredOn(
  eventType: 'pull-request',
  options: Omit<PullRequestWorkflowTriggerCondition, 'event'>
): MonoTypeOperatorFunction<WorkflowDefinition>;

/**
 * Adds a push workflow trigger
 *
 * @param event Event
 * @param options Push trigger options
 */
export function triggeredOn(
  event: 'push',
  options: Omit<PushWorkflowTriggerCondition, 'event'>
): MonoTypeOperatorFunction<WorkflowDefinition>;

/**
 * Adds a workflow trigger
 *
 * @param event Event
 * @template EventType Event type
 */
export function triggeredOn<EventType extends WorkflowTriggerEventName>(
  event: EventType
): MonoTypeOperatorFunction<WorkflowDefinition>;

export function triggeredOn(
  event: WorkflowTriggerEventName,
  options?: ReadonlyRecord<string, unknown>
): MonoTypeOperatorFunction<WorkflowDefinition> {
  return map(definition => ({
    ...definition,
    triggerConditions: [
      ...definition.triggerConditions,
      {
        event,
        ...options,
      },
    ],
  }));
}
