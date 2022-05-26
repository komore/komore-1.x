import { Subject } from '@komore/reactive';
import { type VscodeExtensionEvent } from './vscode-extension-event';
import { type VscodeExtensionEventTypes } from './vscode-extension-event-types';

/**
 * Visual Studio Code extension events subject
 */
export const vscodeExtensionEventsSubject = new Subject<VscodeExtensionEvent<keyof VscodeExtensionEventTypes>>();

/**
 * Visual Studio code extension events
 */
export const vscodeExtensionEvents = vscodeExtensionEventsSubject.asObservable();
