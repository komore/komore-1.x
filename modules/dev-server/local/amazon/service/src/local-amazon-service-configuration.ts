/**
 * Local Amazon service configuration
 */
export type LocalAmazonServiceConfiguration = Readonly<{
  basePath: string;
  tags: Readonly<{
    path: string;
  }>;
}>;

/**
 * Retrieves the default local Amazon service configuration
 * @returns Default local Amazon service configuration
 */
export function buildLocalAmazonServiceConfiguration(localAmazonServiceConfiguration: Partial<LocalAmazonServiceConfiguration>): LocalAmazonServiceConfiguration {
  
  return {
    basePath,
    tags: {
      path: 'service-tags.json'
    }
  };
}
