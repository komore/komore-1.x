/**
 * AWS API metadata
 */
export interface AwsApiMetadata {
  readonly apiVersion: string;
  readonly awsQueryCompatible: {}; // TODO
  readonly endpointPrefix: string;
  readonly jsonVersion: string;
  readonly protocol: 'json';
  readonly serviceAbbreviation: string;
  readonly serviceFullName: string;
  readonly serviceId: string;
  readonly signatureVersion: string;
  readonly targetPrefix: string;
  readonly uid: string;
}
