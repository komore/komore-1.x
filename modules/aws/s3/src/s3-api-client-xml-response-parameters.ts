import { type S3ApiClientParameters } from './s3-api-client-parameters';

/**
 * S3 API client parameters for an XML response
 */
export interface S3ApiClientXmlResponseParameters<RootTag extends string> extends S3ApiClientParameters {
  /**
   * Root tag for the XML response
   */
  readonly rootTag: RootTag;
}
