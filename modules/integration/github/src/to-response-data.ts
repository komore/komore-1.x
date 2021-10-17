export function toResponseData<T>(response: { readonly data: T }): T {
  return response.data;
}
