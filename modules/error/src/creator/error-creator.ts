import { type Domain } from '@komore/domain';

import { type ErrorGroup } from '../group/error-group';

export interface ErrorCreator<ErrorGroupType extends ErrorGroup<Domain<string>, string>> {
  (properties: unknown): Error;
}
