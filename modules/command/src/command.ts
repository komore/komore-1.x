import { type Domain } from '@komore/domain';

/**
 * Command
 *
 * @template DomainType Domain name
 * @template CommandName Command name
 * @template CommandProperties Command properties type
 */
export type Command<
  DomainType extends Domain<string>,
  CommandName extends string,
  CommandProperties extends object | void = void
> = Readonly<{
  readonly commandName: CommandName;
  readonly domain: DomainType;
}> &
  (CommandProperties extends object ? Readonly<CommandProperties> : {});
