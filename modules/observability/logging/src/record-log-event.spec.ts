jest.mock('./log-event-stream');
import { createLogEvent } from './create-log-event';
import { createLogGroup } from './create-log-group';
import { logEventStream } from './log-event-stream';
import { recordLogEvent } from './record-log-event';

describe('Record log event', () => {
  const testLogGroupName = 'test-group';
  const testLogGroup = createLogGroup(testLogGroupName);
  const mockLogEventStream = logEventStream as jest.Mocked<typeof logEventStream>;

  beforeEach(() => {
    console.log('hmpf', mockLogEventStream);
  });

  it('can record a direct log event', () => {
    given: 'a log event'
    const logEventCreator = createLogEvent(testLogGroup, 1, 42, 'test without properties');
    const logEvent = logEventCreator();
    when: 'recording the log event'
    recordLogEvent(logEvent);
    then: 'the log event has been dispatch to the log event stream'
    expect(logEventStream).toBeTruthy();
  });

  it('can record a log event via a log event creator, without properties', () => {

  });

  it('can record a log event via a log event creator, with properties', () => {

  });
});
