/**
 * 
 * @param string 
 * @returns 
 */
export function toDataUrlData(dataUrl: URL | string): string {
  const dataUrlString = typeof dataUrl === 'string' ? dataUrl : dataUrl.toString();
  // TODO
  return dataUrlString;
}
