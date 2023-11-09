import { type testDomain } from '@komore/domain/testing';
import { feature } from '@komore/testing';

import { type Command } from './command';

feature('Command', {
  TODO() {
    type DomainType = typeof testDomain;
    type CommandName = 'testCommand';
    type Parameters = { test: string };
    type TestCommand = Command<DomainType, CommandName, Parameters>;
    const x: TestCommand['parameters'] = { test: 'hello' };
    x;
    const y: TestCommand['name'] = 'testCommand';
    y;
    const z: TestCommand['domain'];
    z;
  },
});
