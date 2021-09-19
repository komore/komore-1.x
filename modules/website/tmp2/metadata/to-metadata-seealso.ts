/**
 * See also regular expression
 */
const SEE_ALSO_REGEXP = /^([^\s]+)(?:\s+)?(.+)?$/;

/**
 * Returns an URL and an optional title, given a metadata see-also definition value
 * @param value Metadata see-also definition value
 * @returns URL and title
 */
export function toMetadataSeeAlso(value: string): [url: string, title?: string] {
  const matches = value.match(SEE_ALSO_REGEXP);
  if (matches === null) {
    throw new Error(`invalid see-also value ${value}`);
  }

  const url = matches[1];
  const title = matches[2];

  return [url, title];
}
