import { type testDomain } from '@komore/domain/testing';
import { feature, type } from '@komore/testing';

import { type LogEvent } from './log-event';

feature('Log event', {
  'can be defined without properties'() {
    given: 'a domain type';
    type DomainType = typeof testDomain;
    and: 'a log event type without properties';
    type TestLogEvent = LogEvent<DomainType, 'test-name', 'test message'>;

    expect: 'the interface to correctly expose all property types';
    type<TestLogEvent['domain']>() === type<DomainType>();
  },
});
