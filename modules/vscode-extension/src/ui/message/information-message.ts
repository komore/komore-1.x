import { window, type MessageItem, type MessageOptions } from 'vscode';

import { deferPromise } from '@komore/reactive';

/**
 * Shows an information message
 *
 * @param message Message
 * @param items List of items
 * @param options Options
 * @returns Observable that resolves to the selected item, or `undefined` if the message is dismissed
 */
export function informationMessage(
  message: string,
  items?: ReadonlyArray<string>,
  options?: MessageOptions
): Observable<string | undefined>;

/**
 * Shows an information message
 *
 * @param message Message
 * @param items List of items
 * @param options Options
 * @returns Observable that resolves to the selected item, or `undefined` if the message is dismissed
 */
export function informationMessage<T extends MessageItem>(
  message: string,
  items?: ReadonlyArray<T>,
  options?: MessageOptions
): Observable<T | undefined>;

export function informationMessage(
  message: string,
  items?: ReadonlyArray<string | MessageItem>,
  options?: MessageOptions
): Observable<unknown> {
  const castItems = (items ?? []) as ReadonlyArray<string>;
  return deferPromise(() =>
    options !== undefined
      ? window.showInformationMessage(message, options, ...castItems)
      : window.showInformationMessage(message, ...castItems)
  );
}
