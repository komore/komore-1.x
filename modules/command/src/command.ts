import { type Domain } from '@komore/domain';

/**
 * Command
 *
 * @template DomainType Domain type
 * @template CommandName Command name
 * @template CommandParameters Command parameters
 */
export interface Command<
  DomainType extends Domain = Domain,
  CommandName extends string = string,
  CommandParameters = any,
> {
  /**
   * Domain type
   */
  readonly domain: DomainType;
  /**
   * Command name
   */
  readonly name: CommandName;
  /**
   * Command parameters
   */
  readonly parameters: CommandParameters;
}
