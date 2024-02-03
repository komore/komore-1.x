import { type ConfigurationChangeEvent } from 'vscode';

import { filter, mergeMapTo, redactValue } from '@komore/reactive';

import { executionOfCommand } from '../command/execution-of-command';
import { informationMessage } from '../ui/message/information-message';

export function offerConfigurationReloadOnConfigurationChange(_event: ConfigurationChangeEvent): Observable<void> {
  return informationMessage('Apply komore console configuration changes?', ['Apply']).pipe(
    filter(selected => selected === 'Apply'),
    mergeMapTo(executionOfCommand('komore.loadConfiguration')),
    redactValue()
  );
}
