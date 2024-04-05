/**
 * Returns the default HTML log layout CSS styles
 *
 * @returns Default HTML log layout CSS styles
 */
export function defaultHtmlLogLayoutCssStyles(): string {
  return [
    'table { border-collapse: collapse }',
    'th { background-color: black; color: white; font-weight: normal; }',
    'td { }',
  ].join('\r\n');
}
