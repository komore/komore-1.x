import { type ApplicationOptions } from '@komore/application';
import { type BrowserHost } from '@komore/browser';
import { type GenericCommand } from '@komore/command';

/**
 * Browser application options
 */
export interface BrowserApplicationOptions<CommandType extends GenericCommand>
  extends ApplicationOptions<URL, CommandType, BrowserHost> {}
