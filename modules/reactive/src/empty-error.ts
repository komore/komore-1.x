/**
 * Empty error
 *
 * Thrown when an observable was queried but has no elements
 */
export class EmptyError extends Error {
  constructor() {
    super('no elements in sequence');
    this.name = 'EmptyError';
  }
}
