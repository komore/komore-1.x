import { GetContactListRequest, GetContactListResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a contact list's metadata
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContactList.html GetContactList}
 */
export const getContactList: Command<GetContactListRequest, GetContactListResponse> = throwUnimplementedCommand(
  'GetContactList'
);
