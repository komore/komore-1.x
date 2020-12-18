import { Message } from '@komore/message';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { MessageWithTransaction } from './message-with-transaction';

export function executeTransaction<M extends Message<any, any>>(): UnaryFunction<Observable<M>> {
  pipe(
    
    message
  );
}
