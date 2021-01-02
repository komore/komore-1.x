/**
 * Navigate to options
 * @template State State type
 */
export interface NavigateToOptions<State> {
  readonly replaceUrl?: boolean;
  readonly state?: State;
}

export function navigateTo<State = undefined>(url: string | URL, options?: NavigateToOptions<State>): void {
  console.log('navigateTo', url, options);
}
