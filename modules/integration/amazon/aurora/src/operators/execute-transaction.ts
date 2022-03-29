import { type Message } from '@komore/message';
import { pipe, type MonoTypeOperatorFunction } from '@komore/reactive';

export function executeTransaction<M extends Message<any, any>>(): MonoTypeOperatorFunction<M> {
  pipe(
    
    message
  );
}
