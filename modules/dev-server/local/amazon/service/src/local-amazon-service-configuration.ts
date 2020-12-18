
/**
 * Gets an Amazon emulation service configuration
 * @param serviceName Service 
 * @returns Amazon emulation service configuration
 * @template ServiceName Service name
 */
export function getLocalAmazonServiceConfiguration<ServiceName extends keyof LocalAmazonConfiguration>(
    serviceName: ServiceName
  ): NonNullable<LocalAmazonConfiguration[ServiceName]> {
    const serviceConfiguration = amazonEmulationConfiguration[serviceName];
  
    if (serviceConfiguration === undefined) {
      throw new Error(`Local Amazon service configuration for ${serviceName} cannot be retrieved: service disabled`);
    }
  
    return serviceConfiguration as NonNullable<LocalAmazonConfiguration[ServiceName]>;
  }
  
  /**
   * Tests whether a local Amazon service is enabled
   * @param serviceName Service name
   * @returns true if the service is enabled
   * @template ServiceName Service name
   */
  export function isLocalAmazonServiceEnabled<ServiceName extends keyof LocalAmazonConfiguration>(
    serviceName: ServiceName
  ): boolean {
    return amazonEmulationConfiguration[serviceName] !== undefined;
  }
  