jest.mock('./log-event-records');
import { advanceTo } from 'jest-date-mock';
import { createLogEvent } from './create-log-event';
import { createLogGroup } from './create-log-group';
import type { LogEventRecord } from './log-event-record';
import { logEventRecordsSubject } from './log-event-records';
import { recordLogEvent } from './record-log-event';

describe('Record log event', () => {
  const testLogGroupName = 'test-group';
  const testLogGroup = createLogGroup(testLogGroupName);
  const mockLogEventRecordsSubject = logEventRecordsSubject as jest.Mocked<typeof logEventRecordsSubject>;

  beforeEach(() => {
    mockLogEventRecordsSubject.next.mockClear();
  });

  it('can record a direct log event', () => {
    given: 'a log event'
    const logEventCreator = createLogEvent(testLogGroup, 1, 42, 'test without properties');
    const logEvent = logEventCreator();
    and: 'a specific current time'
    advanceTo(42);
    when: 'recording the log event'
    recordLogEvent(logEvent);
    then: 'the log event has been dispatched to the log event stream'
    const expectedLogEventRecord: LogEventRecord<typeof logEvent> = {
      logContext: {}, // TODO: test context
      logEvent,
      message: logEvent.message,
      timestamp: new Date(42)
    };
    expect(mockLogEventRecordsSubject.next).toHaveBeenCalledTimes(1);
    expect(mockLogEventRecordsSubject.next).toHaveBeenCalledWith(expectedLogEventRecord);
  });
});
