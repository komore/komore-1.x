import { createClientCommandEventMap } from '@komore/client';

import { type xRayCommand } from '../x-ray.command';
import { type xRayEvent } from '../x-ray.event';

/**
 * X-Ray client command-to-event map
 */
export const xRayClientCommandEventMap = createClientCommandEventMap<typeof xRayCommand, typeof xRayEvent>()({
  putTraceSegments: 'traceSegmentsUploaded',
});
