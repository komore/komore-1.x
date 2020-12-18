import { normalize, resolve } from 'path';
import { getAmazonEmulationServiceConfiguration } from '../amazon-emulation-configuration';

export function getS3EmulationPath(): string {
  const basePath = getAmazonEmulationServiceConfiguration('s3').basePath;
  const p = resolve(process.cwd(), basePath);
  console.log('emulation path', p);
  return p;
}

export function getS3EmulationBucketPath(bucketName: string): string {
  const normalized = normalize(bucketName);
  console.log('normalizedpath', normalized);
  return normalized;
}
