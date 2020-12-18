/**
 * Variables available on Cloud Function host environments
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FUNCTION_TARGET: string;
      FUNCTION_SIGNATURE_TYPE: string;
      K_SERVICE: string;
      K_REVISION: string;
      PORT: string;
    }
  }
}

/**
 * Cloud Function provider name
 */
export const cloudFunctionProviderName = 'gcp:function';
