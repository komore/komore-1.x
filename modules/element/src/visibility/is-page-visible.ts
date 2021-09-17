/**
 * Tests whether a page is visible
 * @param visibilityState Visibility state
 * @returns true if the page is visible
 */
export function isPageVisible(visibilityState: VisibilityState): boolean {
  return visibilityState === 'visible';
}
