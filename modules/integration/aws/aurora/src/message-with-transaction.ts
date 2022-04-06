import { type Message } from '@komore/message';

export type MessageWithTransaction<M extends Message<any, any>> = M & Readonly<{
  aws: {
    aurora: {
      transactionId: string
    }
  }
}>;
