/**
 * Form
 *
 * @template T Form data type
 */
export interface Form<T extends Record<string, unknown>> {
  readonly dirty$: Observable<boolean>;
  readonly invalid$: Observable<void>;
  readonly reset$: Observable<void>;
  readonly submit$: Observable<T>;
  readonly touched$: Observable<boolean>;
  readonly value$: Observable<T>;

  /**
   * Resets the form
   */
  reset(): void;

  /**
   * Submits the form
   */
  submit(): void;
}
