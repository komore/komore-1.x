import { toMessageEventData } from './to-message-event-data';

describe('To message event data', () => {
  it("can get a message event's data from a message event", () => {
    given: 'a message event';
    const data = 42;
    const messageEvent = { data } as MessageEvent<number>;
    when: 'getting the message event data';
    const messageEventData = toMessageEventData(messageEvent);
    expect: 'the message event data to have been returned';
    expect(messageEventData).toBe(data);
  });
});
