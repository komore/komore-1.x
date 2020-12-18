import { DeleteContactRequest, DeleteContactResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Removes a contact from a contact list
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContact.html DeleteContact}
 */
export const deleteContact: Command<DeleteContactRequest, DeleteContactResponse> = throwUnimplementedCommand(
  'DeleteContact'
);
