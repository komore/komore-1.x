import { createLogEventType, defaultLogEventSeverities as severities, logEventProperties } from '@komore/logging';

import { schematicsDomain } from './schematics.domain';

/**
 * Schematics log
 */
export const schematicsLog = createLogEventType(schematicsDomain, {
  /**
   * Workspace load started
   */
  workspaceLoadStarted: logEventProperties<{ workspacePath: string }>(severities.TRACE),
  /**
   * Workspace load succeeded
   */
  workspaceLoadSucceeded: logEventProperties<{ workspacePath: string }>(severities.TRACE),
});
