import * as AWS from 'aws-sdk';

import * as X from 'aws-lambda';

export class KinesisSource {

  constructor() {
  }

  async initialize(): Promise<void> {
      const y: X.APIGatewayProxyHandler;
    const kinesis = new AWS.Kinesis();
    const x = await kinesis.registerStreamConsumer().promise();
    x.Co
  }
}
