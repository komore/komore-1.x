import { type DiscordReceiveEventDataByOpcode } from './discord-receive-event-data-by-opcode';
import { type DiscordReceivePayload } from './discord-receive-payload';

/**
 * Creates a function that tests whether a Discord receive payload is of a specific type
 *
 * @param types Types
 * @returns Function that tests whether a Discord receive payload is of a specific type
 */
export function discordReceivePayloadWithType<Types extends ReadonlyArray<keyof DiscordReceiveEventDataByOpcode>>(
  ...types: Types
): (payload: DiscordReceivePayload) => payload is DiscordReceivePayload<Types[number]> {
  const set: ReadonlySet<number> = new Set(types);
  return (payload): payload is DiscordReceivePayload<Types[number]> => set.has(payload.op);
}
