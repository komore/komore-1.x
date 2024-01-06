import { createLogEventType, logEventSeverities as severities, logEventProperties } from '@komore/logging';

import { schematicsDomain } from './schematics.domain';

/**
 * Schematics log
 */
export const schematicsLog = createLogEventType(schematicsDomain, {
  /**
   * Workspace load started
   */
  workspaceLoadStarted: logEventProperties<{ readonly workspacePath: string }>(severities.trace),
  /**
   * Workspace load succeeded
   */
  workspaceLoadSucceeded: logEventProperties<{ readonly workspacePath: string }>(severities.trace),
});
