import { type AudioVector } from './audio-vector';

/**
 * Creates a function that mutates an audio context's listener forward and up vectors to a set of coordinates
 * @param forward Forward vector
 * @param up Up vector
 * @returns Function that mutates an audio context's listener forward and up vector to the set of coordinates
 */
export function audioContextListenerToDirection(
  forward: AudioVector,
  up: AudioVector
): (audioContext: AudioContext) => AudioContext {
  const { x: forwardX, y: forwardY, z: forwardZ } = forward;
  const { x: upX, y: upY, z: upZ } = up;
  return audioContext => {
    const listener = audioContext.listener;
    listener.forwardX.value = forwardX;
    listener.forwardY.value = forwardY;
    listener.forwardZ.value = forwardZ;
    listener.upX.value = upX;
    listener.upY.value = upY;
    listener.upZ.value = upZ;
    return audioContext;
  };
}
