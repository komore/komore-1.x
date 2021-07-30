
const regExp = /^data:([^,]*),.+$/;

export function toDataUrlMediaType(dataUrl: URL | string): string {
  const dataUrlString = typeof dataUrl === 'string' ? dataUrl : dataUrl.toString();
  const matches = dataUrlString.match(regExp);
  if (matches !== null) {
    const mediaType = matches[1];
  }
}
