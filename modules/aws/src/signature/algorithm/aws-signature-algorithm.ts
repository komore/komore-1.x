import { type awsSignatureAlgorithms } from './aws-signature-algorithms';

/**
 * AWS signature algorithm
 */
export type AwsSignatureAlgorithm = (typeof awsSignatureAlgorithms)[number];
