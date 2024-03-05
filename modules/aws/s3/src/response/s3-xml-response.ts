import { type ReadonlyRecord } from '@komore/typescript';
import { type UrlString } from '@komore/url';

/**
 * S3 XML response
 */
export type S3XmlResponse<RootTag extends string, T> = ReadonlyRecord<
  RootTag,
  T & {
    readonly '@_xmlns': UrlString;
  }
>;
