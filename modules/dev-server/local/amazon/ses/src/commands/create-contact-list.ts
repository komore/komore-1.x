import { CreateContactListRequest, CreateContactListResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a contact list
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContactList.html CreateContactList}
 */
export const createContactList: Command<
  CreateContactListRequest,
  CreateContactListResponse
> = throwUnimplementedCommand('CreateContactList');
