import type { AppSyncEvent } from "./app-sync-event";

/**
 * Tests whether an event is an AppSync event
 * @param event Event
 * @returns true if the event is an AppSync event
 * @template ArgumentsType AppSync event arguments type
 */
export function isAppSyncEvent<ArgumentsType = unknown>(event: unknown): event is AppSyncEvent<ArgumentsType> {

}
