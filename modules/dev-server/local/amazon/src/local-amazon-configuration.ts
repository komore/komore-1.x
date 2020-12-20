import { LocalAmazonS3Configuration } from '@komore/dev-server-local-amazon/s3';

/**
 * Local Amazon configuration
 */
export type LocalAmazonConfiguration = Readonly<{
  service: LocalAmazonServiceConfiguration;
  s3?: LocalAmazonS3Configuration;
}>;

const defaultAmazonEmulationConfiguration: LocalAmazonConfiguration = {
  service: {
    tags: {
      path: ''
    }
  },
  s3: {
    basePath: '~/.komore/dev-server/local/amazon/s3'
  }
};
