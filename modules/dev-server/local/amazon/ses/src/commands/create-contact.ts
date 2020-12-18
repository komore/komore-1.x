import { CreateContactRequest, CreateContactResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a contact and adds it to a contact list
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContact.html CreateContact}
 */
export const createContact: Command<CreateContactRequest, CreateContactResponse> = throwUnimplementedCommand(
  'CreateContact'
);
