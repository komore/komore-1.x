/**
 * Returns the content rectangle from a resize observer entry
 * @param resizeObserverEntry Resize observer entry
 * @returns Content rectangle
 */
export function toContentRect(resizeObserverEntry: ResizeObserverEntry): DOMRectReadOnly {
  return resizeObserverEntry.contentRect;
}
