export function normalizeUrl(url: string | URL): string {
  if (typeof url === 'string') {
    return url;
  }

  return url.href;
}
