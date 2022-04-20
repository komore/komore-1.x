jest.mock('./definition/log-event-records');
import { mockCurrentPlainDateTime } from '@komore/temporal/testing';
import { Temporal } from '@js-temporal/polyfill';
import { createLogEvent } from './event/create-log-event';
import { type LogEventRecord } from './event-record/log-event-record';
import { logEventRecordsSubject } from './event-record/log-event-records';
import { createLogGroup } from './group/create-log-group';
import { recordLogEvent } from './record-log-event';

describe('Record log event', () => {
  const testLogGroupName = 'test-group';
  const testLogGroup = createLogGroup(testLogGroupName);
  const mockLogEventRecordsSubject = logEventRecordsSubject as jest.Mocked<typeof logEventRecordsSubject>;
  let mockedPlainDateTime: ReturnType<typeof mockCurrentPlainDateTime>;

  beforeEach(() => {
    mockLogEventRecordsSubject.next.mockClear();
    mockedPlainDateTime = mockCurrentPlainDateTime(Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'));
  });

  afterEach(() => mockedPlainDateTime.clearMock());

  it('can record a direct log event', () => {
    given: 'a log event';
    const logEventCreator = createLogEvent(testLogGroup, 1, 42, 'test without properties');
    const logEvent = logEventCreator();

    when: 'recording the log event';
    recordLogEvent(logEvent);

    expect: 'the log event to have been dispatched to the log event stream';
    const expectedLogEventRecord: LogEventRecord<typeof logEvent> = {
      logContext: {},
      logEvent,
      message: logEvent.message,
      timestamp: Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'),
    };
    expect(mockLogEventRecordsSubject.next).toHaveBeenCalledTimes(1);
    expect(mockLogEventRecordsSubject.next).toHaveBeenCalledWith(expectedLogEventRecord);
  });
});
