import { Subject } from '@komore/reactive';
import { type EmailLayer } from './email-layer';

export const activeEmailLayerSubject = new Subject<EmailLayer>();

export const activeEmailLayer = activeEmailLayerSubject.asObservable();
