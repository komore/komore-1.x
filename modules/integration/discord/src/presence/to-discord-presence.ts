import { type Observable } from '@komore/reactive';
import { type DiscordRpcClient } from '../rpc/discord-rpc-client';

export function toDiscordPresence<T>(rpcClient: DiscordRpcClient): (x: T) => Observable<T> {
  
}
// TODO: discord game sdk activity (presence has been deprecated)
// TODO: https://github.com/devsnek/node-register-scheme
