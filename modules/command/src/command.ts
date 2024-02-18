import { type Domain } from '@komore/domain';

/**
 * Command
 *
 * @template DomainType Domain type
 * @template CommandName Command name
 * @template CommandParameters Command parameters
 */
export interface Command<DomainType extends Domain, CommandName extends string, CommandParameters> {
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
