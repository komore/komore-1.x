import { isDefined } from '@komore/functional';
import { filter, ReplaySubject } from '@komore/reactive';
import { type ExtensionContext } from 'vscode';

/**
 * Visual Studio Code extension context subject
 */
export const vscodeExtensionContextSubject = new ReplaySubject<ExtensionContext | undefined>(1);

/**
 * Visual Studio Code extension context observable
 */
export const vscodeExtensionContext = vscodeExtensionContextSubject.asObservable().pipe(filter(isDefined));
