import { type HttpHeader } from './http-header';

/**
 * Returns an inline Content-Disposition HTTP header
 *
 * @param contentDisposition Inline content disposition
 * @returns Content-Disposition HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition Content-Disposition}
 */
export function createContentDispositionHttpHeader(contentDisposition: 'inline'): HttpHeader;

/**
 * Returns an attachment Content-Disposition HTTP header
 *
 * @param contentDisposition Attachment content disposition
 * @param fileName Optional file name
 * @returns Content-Disposition HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition Content-Disposition}
 */
export function createContentDispositionHttpHeader(contentDisposition: 'attachment', fileName?: string): HttpHeader;

/**
 * Returns a form data Content-Disposition HTTP header
 *
 * @param contentDisposition Form data content disposition
 * @param fieldName Form field name
 * @param fileName Optional file name
 * @returns Content-Disposition HTTP header
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition Content-Disposition}
 */
export function createContentDispositionHttpHeader(
  contentDisposition: 'form-data',
  fieldName: string,
  fileName?: string
): HttpHeader;

export function createContentDispositionHttpHeader(
  contentDisposition: 'inline' | 'attachment' | 'form-data',
  fileOrFieldName?: string,
  formFileName?: string
): HttpHeader {
  // TODO: handle form-data filename* directive
  const value =
    contentDisposition === 'inline'
      ? contentDisposition
      : contentDisposition === 'attachment'
        ? [contentDisposition, ...(fileOrFieldName !== undefined ? [`filename="${fileOrFieldName}"`] : [])].join('; ')
        : [
            contentDisposition,
            `name="${fileOrFieldName ?? ''}"`,
            ...(formFileName !== undefined ? [`filename="${formFileName}"`] : []),
          ].join('; ');
  return ['content-disposition', value];
}
