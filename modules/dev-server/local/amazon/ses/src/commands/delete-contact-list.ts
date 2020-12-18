import { DeleteContactListRequest, DeleteContactListResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Deletes a contact list
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContactList.html DeleteContactList}
 */
export const deleteContactList: Command<
  DeleteContactListRequest,
  DeleteContactListResponse
> = throwUnimplementedCommand('DeleteContactList');
