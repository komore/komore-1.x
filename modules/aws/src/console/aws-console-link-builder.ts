import { type AwsConsoleLinkBuilderParameters } from './aws-console-link-builder-parameters';

/**
 * AWS console link builder
 *
 * @see {@link https://docs.aws.amazon.com/singlesignon/latest/userguide/createshortcutlink.html Creating shortcut links to AWS Management Console destinations}
 */
export interface AwsConsoleLinkBuilder {
  (parameters: AwsConsoleLinkBuilderParameters): URL;
}
