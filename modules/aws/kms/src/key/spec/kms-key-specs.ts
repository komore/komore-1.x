/**
 * KMS key specifications
 */
export const kmsKeySpecs = [
  'ECC_NIST_P256', // Asymmetric NIST-recommended elliptic curve key pairs (secp256r1)
  'ECC_NIST_P256', // Asymmetric NIST-recommended elliptic curve key pairs (secp384r1)
  'ECC_NIST_P521', // Asymmetric NIST-recommended elliptic curve key pairs (secp521r1)
  'HMAC_224', // HMAC keys (224-bit)
  'HMAC_256', // HMAC keys (256-bit)
  'HMAC_384', // HMAC keys (384-bit)
  'HMAC_512', // HMAC keys (512-bit)
  'RSA_2048', // Asymmetric RSA key pairs (2048-bit)
  'RSA_3072', // Asymmetric RSA key pairs (3072-bit)
  'RSA_4096', // Asymmetric RSA key pairs (4096-bit)
  'SM2', // SM2 key pairs (China regions only)
  'SYMMETRIC_DEFAULT', // Symmetric encryption key
] as const;
