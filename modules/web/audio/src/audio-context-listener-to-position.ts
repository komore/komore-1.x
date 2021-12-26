import { type AudioVector } from './audio-vector';

/**
 * Creates a function that mutates an audio context's listener position to a set of coordinates
 * @param vector Position vector
 * @returns Function that mutates an audio context's listener position to the set of coordinates
 */
export function audioContextListenerToPosition({ x, y, z }: AudioVector): (audioContext: AudioContext) => AudioContext {
  return audioContext => {
    audioContext.listener.positionX.value = x;
    audioContext.listener.positionY.value = y;
    audioContext.listener.positionZ.value = z;
    return audioContext;
  };
}
