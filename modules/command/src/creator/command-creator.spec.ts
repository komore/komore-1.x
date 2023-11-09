import { feature } from '@komore/testing';

import { type CommandCreator } from './command-creator';

feature('Command creator', {
  todo() {
    type CommandName = 'testCommand';
    type CommandParameters = { test: string };
    type TestCommandCreator = CommandCreator<CommandName, CommandParameters, unknown>;
  },
});
