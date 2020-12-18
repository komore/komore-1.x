import { GetContactRequest, GetContactResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a contact from a list
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContact.html GetContact}
 */
export const getContact: Command<GetContactRequest, GetContactResponse> = throwUnimplementedCommand('GetContact');
