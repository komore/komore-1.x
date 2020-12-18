import { Subscription } from 'rxjs';
import { TemplatePart } from './template-part';

/**
 * Abstract template part
 * @template ValueType Value type
 */
export abstract class AbstractTemplatePart<ValueType> implements TemplatePart<ValueType> {
  /**
   * Class constructor
   * @param subscription Subscription
   */
  protected constructor(private readonly subscription: Subscription) {}

  /**
   * Disposes of the part
   */
  dispose(): void {
    this.subscription.unsubscribe();
  }
}
