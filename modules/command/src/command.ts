import { type GenericDomain } from '@komore/domain';

/**
 * Command
 *
 * @template DomainType Domain type
 * @template CommandName Command name
 * @template CommandParameters Command parameters
 */
export interface Command<DomainType extends GenericDomain, CommandName extends string, CommandParameters> {
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
