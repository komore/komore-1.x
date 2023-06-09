import { type WorkflowTriggerEventName } from './workflow-trigger-event-name';

/**
 * Workflow trigger condition
 *
 * @template EventType Event type
 */
export interface WorkflowTriggerCondition<EventType extends WorkflowTriggerEventName> {
  /**
   * Event
   */
  readonly event: EventType;
}
