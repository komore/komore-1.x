import { type Domain } from '@komore/domain';
import { feature } from '@komore/testing';

import { type Command } from './command';
import { type CommandName } from './command-name';
import { type CommandPropertiesSchema } from './properties/command-properties-schema';

feature('Command name', {
  'TODO: basic usage with a command type'() {
    type ExpectedCommandName = 'test';
    type CommandType = Command<Domain, ExpectedCommandName, CommandPropertiesSchema<unknown>>;
    type Name = CommandName<CommandType>;
    Name === ExpectedCommandName;
  },
  'TODO: basic usage with a command'() {
    // TODO
  },
});
