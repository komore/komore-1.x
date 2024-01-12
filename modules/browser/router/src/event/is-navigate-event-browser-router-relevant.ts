/**
 * Tests whether a navigate event is relevant to a browser router
 *
 * @param navigateEvent Navigate event
 * @returns true if the navigate event is relevant to a browser router
 */
export function isNavigateEventBrowserRouterRelevant(navigateEvent: NavigateEvent): boolean {
  const { canIntercept, downloadRequest, formData } = navigateEvent;
  return canIntercept && downloadRequest === null && formData === null;
}
