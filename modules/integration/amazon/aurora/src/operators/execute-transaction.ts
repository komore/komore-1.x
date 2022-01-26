import { type UnaryFunction } from '@komore/functional';
import { type Message } from '@komore/message';
import { type Observable, pipe } from '@komore/reactive';
import { MessageWithTransaction } from './message-with-transaction';

export function executeTransaction<M extends Message<any, any>>(): UnaryFunction<Observable<M>> {
  pipe(
    
    message
  );
}
