import { type UUID } from '@komore/crypto';
import { createEvent, eventProperties } from '@komore/event';
import { schematicsTasksEventDomain } from './schematics-tasks-event-domain';

/**
 * Tasks started
 */
export const taskStarted = createEvent(
  schematicsTasksEventDomain,
  'task started',
  eventProperties<{
    /**
     * Task description
     */
    readonly taskDescription: string;
    /**
     * Task identifier
     */
    readonly taskId: UUID;
    /**
     * Task name
     */
    readonly taskName: string; // TODO: TaskName
  }>()
);

/**
 * Task progressed
 */
export const taskProgressed = createEvent(
  schematicsTasksEventDomain,
  'task progressed',
  eventProperties<{
    /**
     * Progression description
     */
    readonly progressionDescription: string;
    /**
     * Progression percentage
     */
    readonly progressionPercentage: number;
    /**
     * Task identifier
     */
    readonly taskId: UUID;
  }>()
);

/**
 * Task succeeded
 */
export const taskSucceeded = createEvent(
  schematicsTasksEventDomain,
  'task succeeded',
  eventProperties<{
    /**
     * Task identifier
     */
    readonly taskId: UUID;
    /**
     * Result description
     */
    readonly resultDescription: string;
  }>()
);

/**
 * Task failed
 */
export const taskFailed = createEvent(
  schematicsTasksEventDomain,
  'task failed',
  eventProperties<{
    /**
     * Error
     */
    readonly error: Error;
    /**
     * Task identifier
     */
    readonly taskId: UUID;
  }>()
);
