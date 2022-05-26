import { filter, mergeMapTo, redactValue, type Observable } from '@komore/reactive';
import { type ConfigurationChangeEvent } from 'vscode';
import { executionOfCommand } from '../command/execution-of-command';
import { informationMessage } from '../ui/message/information-message';

export function offerConfigurationReloadOnConfigurationChange(_event: ConfigurationChangeEvent): Observable<void> {
  return informationMessage('Apply komore console configuration changes?', ['Apply']).pipe(
    filter(selected => selected === 'Apply'),
    mergeMapTo(executionOfCommand('komore.loadConfiguration')),
    redactValue()
  );
}
