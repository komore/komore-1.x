import { createEventType, eventProperties } from '@komore/event';
import { type UUID } from '@komore/uuid';

import { schematicsDomain } from '../schematics.domain';

/**
 * Schematics task event
 */
export const schematicsTaskEvent = createEventType(schematicsDomain, {
  /**
   * Task failed
   */
  taskFailed: eventProperties<{
    /**
     * Error
     */
    error: Error;
    /**
     * Task identifier
     */
    taskId: UUID;
  }>(),
  /**
   * Task progressed
   */
  taskProgressed: eventProperties<{
    /**
     * Progression description
     */
    progressionDescription: string;
    /**
     * Progression percentage
     */
    progressionPercentage: number;
    /**
     * Task identifier
     */
    taskId: UUID;
  }>(),
  /**
   * Task started
   */
  taskStarted: eventProperties<{
    /**
     * Task description
     */
    taskDescription: string;
    /**
     * Task identifier
     */
    taskId: UUID;
    /**
     * Task name
     */
    taskName: string; // TODO: TaskName
  }>(),
  /**
   * Task succeeded
   */
  taskSucceeded: eventProperties<{
    /**
     * Task identifier
     */
    taskId: UUID;
    /**
     * Result description
     */
    resultDescription: string;
  }>(),
});
