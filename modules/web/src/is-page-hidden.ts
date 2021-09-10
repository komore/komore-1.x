/**
 * Tests whether a page is hidden
 * @param visibilityState Visibility state
 * @returns true if the page is hidden
 */
export function isPageHidden(visibilityState: VisibilityState): boolean {
  return visibilityState === 'hidden';
}
