import {
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse
} from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Updates the configuration of an event destination
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateConfigurationSetEventDestination.html UpdateConfigurationSetEventDestination}
 */
export const updateConfigurationSetEventDestination: Command<
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse
> = throwUnimplementedCommand('UpdateConfigurationSetEventDestination');
