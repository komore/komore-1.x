import { type CommandName } from '@komore/command';
import { type EventName } from '@komore/event';
import { type ReadonlyRecord } from '@komore/typescript';

import { type xRayCommand } from '../x-ray.command';
import { type xRayEvent } from '../x-ray.event';

/**
 * X-Ray command to event mapping
 */
export const xRayCommandEventMapping = {
  putTraceSegments: 'traceSegmentsUploaded',
} as const satisfies ReadonlyRecord<CommandName<typeof xRayCommand>, EventName<typeof xRayEvent>>;
