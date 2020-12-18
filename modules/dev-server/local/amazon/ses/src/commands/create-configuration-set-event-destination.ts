import {
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse
} from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates an event destination
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateConfigurationSetEventDestination.html CreateConfigurationSetEventDestination}
 */
export const createConfigurationSetEventDestination: Command<
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse
> = throwUnimplementedCommand('CreateConfigurationSetEventDestination');
