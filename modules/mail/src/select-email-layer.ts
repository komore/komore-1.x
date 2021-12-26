import { selectLayerImplementation } from '@komore/layer';
import { type Observable, type Subscription } from '@komore/reactive';
import { activeEmailLayerSubject } from './active-email-layer';
import { EmailLayerImplementationFactory } from './email-layer-implementation-factory';
import { EmailLayerOptions } from './email-layer-options';

export function selectEmailLayer(
  options: EmailLayerOptions,
  selector: () => Observable<EmailLayerImplementationFactory>
): Subscription {
  return selectLayerImplementation(options, selector, activeEmailLayerSubject);
}
