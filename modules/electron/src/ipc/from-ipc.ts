import { Observable } from '@komore/reactive';

import { type IpcMain, type IpcRenderer } from 'electron';

/**
 * Creates an observable that emits matching IPC events sent to the main process or to the renderer process
 *
 * @param ipc IPC event emitter
 * @param eventName Event name
 * @returns Stream of IPC events
 */
export function fromIpc<MessageType>(ipc: IpcMain | IpcRenderer, eventName: string): Observable<MessageType> {
  return new Observable<MessageType>(subscriber => {
    const listener = (message: MessageType) => subscriber.next(message);
    ipc.addListener(eventName, listener);
    subscriber.add(() => ipc.removeListener(eventName, listener));
  });
}
