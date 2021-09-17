import { BehaviorSubject } from '@komore/reactive';
import type { Encoder } from './encoder';

const encoderMap = new BehaviorSubject<ReadonlyMap<string, Encoder>>(new Map<string, Encoder>());

/**
 * Encoders
 */
export const encoders = encoderMap.asObservable();

/**
 * Adds an encoder
 * @param name Registered name
 * @param encoder Encoder
 */
export function addEncoder(name: string, encoder: Encoder): void {
  const entries = Array.from(encoderMap.value.entries());
  entries.push([name, encoder]);
  updateEncoderMap(entries);
}

/**
 * Removes an encoder
 * @param name Registered name
 */
export function removeLoggingDriver(name: string): void {
  const entries = Array.from(encoderMap.value.entries()).filter(([encoderName]) => encoderName === name);
  updateEncoderMap(entries);
}

/**
 * Updates the encoder map
 * @param entries Entries
 */
function updateEncoderMap(entries: ReadonlyArray<[string, Encoder]>): void {
  encoderMap.next(new Map(entries));
}
