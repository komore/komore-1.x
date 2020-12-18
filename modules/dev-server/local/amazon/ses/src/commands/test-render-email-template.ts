import { TestRenderEmailTemplateRequest, TestRenderEmailTemplateResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a preview of an email
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TestRenderEmailTemplate.html TestRenderEmailTemplate}
 */
export const testRenderEmailTemplate: Command<
  TestRenderEmailTemplateRequest,
  TestRenderEmailTemplateResponse
> = throwUnimplementedCommand('TestRenderEmailTemplate');
