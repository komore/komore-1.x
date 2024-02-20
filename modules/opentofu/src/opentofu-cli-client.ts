import { type OpenTofuLog } from './log/opentofu-log';
import { type OpenTofuCliClientCommandOptions } from './opentofu-cli-client-command-options';

/**
 * OpenTofu CLI client
 */
export interface OpenTofuCliClient {
  /**
   * Executes an OpenTofu command, emitting a stream of OpenTofu logs
   *
   * @param commandParameters Command parameters
   * @param commandOptions Command options
   * @returns Observable stream of OpenTofu logs
   */
  (
    commandParameters: ReadonlyArray<string>,
    commandOptions: Omit<OpenTofuCliClientCommandOptions, 'asLogs'> & { readonly asLogs: true }
  ): Observable<OpenTofuLog>;
  /**
   * Executes an OpenTofu command
   *
   * @param commandParameters Command parameters
   * @param commandOptions Command options
   * @returns Command standard output text
   */
  (commandParameters: ReadonlyArray<string>, commandOptions?: OpenTofuCliClientCommandOptions): Observable<string>;
}
