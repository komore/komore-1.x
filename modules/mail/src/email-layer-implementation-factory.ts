import { type LayerImplementationFactory } from '@komore/layer';
import { type EmailLayer } from './email-layer';
import { type EmailLayerOptions } from './email-layer-options';

/**
 * Email layer implementation factory
 */
export type EmailLayerImplementationFactory = LayerImplementationFactory<EmailLayer, EmailLayerOptions>;
