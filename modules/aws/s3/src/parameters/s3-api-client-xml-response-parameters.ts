import { type S3ApiClientParameters } from './s3-api-client-parameters';

/**
 * S3 API client parameters for an XML response
 */
export interface S3ApiClientXmlResponseParameters<RootTag extends string, T, X = unknown>
  extends S3ApiClientParameters<T> {
  /**
   * Adjusts the parsed XML result
   *
   * @param xmlResult XML result
   * @returns Result
   */
  readonly projectXml?: (xmlResult: X) => T;
  /**
   * Root tag for the XML response
   */
  readonly rootTag: RootTag;
}
