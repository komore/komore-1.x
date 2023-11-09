import { type displayedCliMessageTypes } from './displayed-cli-message-types';

/**
 * Displayed command-line interface message type
 */
export type DisplayedCliMessageType = (typeof displayedCliMessageTypes)[number];
