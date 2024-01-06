import { feature } from '@komore/testing';

import { messageEventToData } from './message-event-to-data';

feature('Message event to data', {
  "can get a message event's data from a message event"() {
    given: 'a message event';
    const data = 42;
    const messageEvent = { data } as MessageEvent<number>;

    when: 'getting the message event data';
    const messageEventData = messageEventToData(messageEvent);

    expect: 'the message event data to have been returned';
    messageEventData === data;
  },
});
