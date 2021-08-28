import { Subject } from 'rxjs';
import type { EmailLayer } from './email-layer';

export const activeEmailLayerSubject = new Subject<EmailLayer>();

export const activeEmailLayer = activeEmailLayerSubject.asObservable();
