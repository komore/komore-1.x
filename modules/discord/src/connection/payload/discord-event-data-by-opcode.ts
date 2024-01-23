import { type DiscordReceiveEventDataByOpcode } from './discord-receive-event-data-by-opcode';
import { type DiscordSendEventDataByOpcode } from './discord-send-event-data-by-opcode';

/**
 * Discord event data by opcode
 */
export type DiscordEventDataByOpcode = DiscordReceiveEventDataByOpcode & DiscordSendEventDataByOpcode;
