/**
 * Returns a Cloud Speech-to-Text client endpoint URL based on a region
 *
 * @param region Region
 * @returns Cloud Speech-to-Text client endpoint URL
 */
export function getCloudSpeechToTextClientEndpointUrl(region: 'EU' | 'US'): URL {
  const urlString = `https://${region.toLocaleLowerCase()}-speech.googleapis.com/`;
  return new URL(urlString);
}
