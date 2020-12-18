import { CreateConfigurationSetRequest, CreateConfigurationSetResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a configuration set
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSet.html CreateConfigurationSet}
 */
export const createConfigurationSet: Command<
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse
> = throwUnimplementedCommand('CreateConfigurationSet');
