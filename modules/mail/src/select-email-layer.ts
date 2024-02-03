import { selectLayerImplementation } from '@komore/layer';

import { activeEmailLayerSubject } from './active-email-layer';
import { EmailLayerImplementationFactory } from './email-layer-implementation-factory';
import { EmailLayerOptions } from './email-layer-options';

export function selectEmailLayer(
  options: EmailLayerOptions,
  selector: () => Observable<EmailLayerImplementationFactory>
): Subscription {
  // TODO: why subscription?
  return selectLayerImplementation(options, selector, activeEmailLayerSubject);
}
