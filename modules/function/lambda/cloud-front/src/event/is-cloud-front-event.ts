import type { CloudFrontEvent } from './cloud-front-event';

/**
 * Tests whether an event is a CloudFront event
 * @param event Event
 * @returns true if the event is a CloudFront event
 */
export function isCloudFrontEvent(event: unknown): event is CloudFrontEvent {

}
