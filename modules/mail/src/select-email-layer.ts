import { selectLayerImplementation } from '@komore/layer';
import type { Observable, Subscription } from '@komore/reactive';
import { activeEmailLayerSubject } from './active-email-layer';
import type { EmailLayerImplementationFactory } from './email-layer-implementation-factory';
import type { EmailLayerOptions } from './email-layer-options';

export function selectEmailLayer(
  options: EmailLayerOptions,
  selector: () => Observable<EmailLayerImplementationFactory>
): Subscription {
  return selectLayerImplementation(options, selector, activeEmailLayerSubject);
}
