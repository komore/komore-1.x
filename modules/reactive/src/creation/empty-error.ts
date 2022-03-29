/**
 * Empty error
 *
 * Thrown when an observable was queried but has no elements
 */
export class EmptyError extends Error {
  readonly name = 'EmptyError';

  /**
   * Class constructor
   */
  constructor() {
    super('no elements in sequence');
  }
}
