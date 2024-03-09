import { createClientCommandEventMap } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type xRayCommand } from '../x-ray.command';
import { type xRayEvent } from '../x-ray.event';

/**
 * X-Ray client command-to-event mapping
 */
export const xRayClientCommandEventMap = createClientCommandEventMap<
  CommandFromType<typeof xRayCommand>,
  EventFromType<typeof xRayEvent>
>()({
  putTraceSegments: 'traceSegmentsUploaded',
});
