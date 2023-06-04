import { type Domain } from '@komore/domain';

/**
 * Command
 *
 * @template DomainType Domain name
 * @template CommandType Command name
 * @template S Command schema type
 */
export type Command<
  DomainType extends Domain<string>,
  CommandType extends string,
  CommandProperties extends object | void = void
> = Readonly<{
  readonly commandType: CommandType;
  readonly domain: DomainType;
}> &
  (CommandProperties extends object ? Readonly<CommandProperties> : {});

/**
 * Command schema type from an command type
 * @template Command type
 */
export type CommandSchemaType<E> = E extends Command<any, infer S> ? S : never;
