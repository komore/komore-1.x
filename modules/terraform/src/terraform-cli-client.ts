import { type TerraformLog } from './log/terraform-log';
import { type TerraformCliClientCommandOptions } from './terraform-cli-client-command-options';

/**
 * Terraform CLI client
 */
export interface TerraformCliClient {
  /**
   * Executes an Terraform command, emitting a stream of Terraform logs
   *
   * @param commandParameters Command parameters
   * @param commandOptions Command options
   * @returns Observable stream of Terraform logs
   */
  (
    commandParameters: ReadonlyArray<string>,
    commandOptions: Omit<TerraformCliClientCommandOptions, 'asLogs'> & { readonly asLogs: true }
  ): Observable<TerraformLog>;
  /**
   * Executes an Terraform command
   *
   * @param commandParameters Command parameters
   * @param commandOptions Command options
   * @returns Command standard output text
   */
  (commandParameters: ReadonlyArray<string>, commandOptions?: TerraformCliClientCommandOptions): Observable<string>;
}
