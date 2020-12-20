/**
 * HTTP response progress
 */
export type HttpResponseProgress =
  | Readonly<{
      bytesRemaining: undefined;
      bytesPerSecond: number;
      bytesTotal: undefined;
      bytesTransferred: number;
      completionPercentage: undefined;
    }>
  | Readonly<{
      bytesRemaining: number;
      bytesPerSecond: number;
      bytesTotal: number;
      bytesTransferred: number;
      completionPercentage: number;
    }>;
