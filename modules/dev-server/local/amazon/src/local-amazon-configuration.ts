import { S3EmulationConfiguration } from '@komore/dev-server-local-amazon/s3';

/**
 * Local Amazon configuration
 */
export type LocalAmazonConfiguration = Readonly<{
  s3?: S3EmulationConfiguration;
}>;

const defaultAmazonEmulationConfiguration: LocalAmazonConfiguration = {
  s3: {
    basePath: '~/.komore/dev-server/local/amazon/s3'
  }
};
