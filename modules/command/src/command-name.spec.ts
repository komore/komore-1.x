import { type GenericDomain } from '@komore/domain';
import { feature } from '@komore/testing';

import { type Command } from './command';
import { type CommandName } from './command-name';
import { type CommandPropertiesSchema } from './properties/command-properties-schema';

feature('Command name', {
  'TODO: basic usage'() {
    type ExpectedCommandName = 'test';
    type CommandType = Command<GenericDomain, ExpectedCommandName, CommandPropertiesSchema<unknown>>;
    type Name = CommandName<CommandType>;
    Name === ExpectedCommandName;
  },
});
