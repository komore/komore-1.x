import { type AwsConsoleLinkBuilder } from './aws-console-link-builder';
import { type AwsConsoleLinkBuilderOptions } from './aws-console-link-builder-options';

/**
 * Creates an AWS console link builder
 *
 * @param builderOptions AWS console link builder options
 * @returns AWS console link builder
 * @see {@link https://docs.aws.amazon.com/singlesignon/latest/userguide/createshortcutlink.html Creating shortcut links to AWS Management Console destinations}
 */
export function createAwsConsoleLinkBuilder(builderOptions: AwsConsoleLinkBuilderOptions): AwsConsoleLinkBuilder {
  const { accountId, subdomain } = builderOptions;
  const baseUrl = new URL(`https://${subdomain}.awsapps.com/#/console`);
  return ({ destinationUrl, roleName }) => {
    const searchParams = new URLSearchParams({
      account_id: accountId,
      role_name: roleName,
      destination: destinationUrl.toString(),
    });
    return new URL(`${baseUrl}?${searchParams}`);
  };
}
