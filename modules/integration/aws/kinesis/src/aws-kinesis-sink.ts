import { Sink } from '@komore/core';
import * as AWS from 'aws-sdk';

/**
 * AWS Kinesis sink
 */
class AwsKinesisSink implements Sink {
  /**
   * Class constructor
   * @param clientConfiguration Client configuration
   */
  constructor(private readonly clientConfiguration: AWS.Kinesis.ClientConfiguration) {}

  async wee(): Promise<void> {
    const x: AWS.Kinesis = new AWS.Kinesis()
  }
}
