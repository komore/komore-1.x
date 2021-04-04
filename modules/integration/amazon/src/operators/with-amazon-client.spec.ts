import type { Client } from '@aws-sdk/smithy-client';
import { createMessage } from '@komore/message';
import { mock } from 'jest-mock-extended';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { withAwsClient } from './with-amazon-client';

describe('With Amazon client', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('attaches an AWS client to an emitted message', () =>
    testScheduler.run(({ expectObservable }) => {
      given: 'a message';
      const message = createMessage('test', {});
      and: 'an AWS client';
      const client = mock<Client<any, any, any, any>>();
      when: 'using the operator';
      const obs$ = of(message).pipe(withAwsClient('test', client));
      expect: 'the message to have the attached AWS client';
      expectObservable(obs$).toBe('(a|)', { a: { ...message, integration: { aws: { clients: { test: client } } } } });
    }));
});
