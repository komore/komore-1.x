import { deferPromise } from '@komore/reactive';

/**
 * Creates a function that returns an RTC session description
 *
 * @param offerOptions Offer options
 * @returns Function that returns an RTC session description
 */
export function peerConnectionToOffer(
  offerOptions?: RTCOfferOptions
): (peerConnection: RTCPeerConnection) => Observable<RTCSessionDescriptionInit> {
  return peerConnection => deferPromise(() => peerConnection.createOffer(offerOptions));
}
