import { type S3XmlResponse } from './s3-xml-response';

export function s3XmlResponseToResult<RootTag extends string>(
  rootTag: RootTag
): <T>(xmlResponse: S3XmlResponse<RootTag, T>) => Omit<T, '@_xmlns'> {
  return xmlResponse => {
    const { '@_xmlns': _, ...result } = xmlResponse[rootTag];
    return result;
  };
}
