import { type Domain } from '@komore/domain';

import { type ErrorGroup } from './error-group';

/**
 * Creates an error group
 *
 * An error group is used to define errors that belong that belong together, without necessarily having a scope as large
 * as a full domain.
 *
 * @param domain Domain
 * @param groupName Group name
 * @returns Error group
 * @template DomainType Domain type
 * @template GroupName Group name
 */
export function createErrorGroup<DomainType extends Domain<string>, GroupName extends string>(
  domain: DomainType,
  groupName: GroupName
): ErrorGroup<DomainType, GroupName> {
  const creator = {};
  Object.defineProperty(creator, 'domain', { enumerable: false, value: domain, writable: false });
  Object.defineProperty(creator, 'groupName', { enumerable: false, value: groupName, writable: false });
  return creator as ErrorGroup<DomainType, GroupName>;
}
