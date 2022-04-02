/**
 * Creates a function that creates a media element source from an HTML media element using a given audio context
 * @param audioContext Audio context
 * @returns Function that creates a media element source from an HTML media element using the given audio context
 */
export function mediaElementToAudioSourceNode(
  audioContext: AudioContext
): (htmlMediaElement: HTMLMediaElement) => MediaElementAudioSourceNode {
  return htmlMediaElement => audioContext.createMediaElementSource(htmlMediaElement);
}
