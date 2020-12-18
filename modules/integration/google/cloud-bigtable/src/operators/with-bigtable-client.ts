import { Bigtable } from '@google-cloud/bigtable';
import { withGcpClient } from '@komore/integration-gcp';

export const withBigtableClient = (bigtableClient: Bigtable) => withGcpClient('bigtable', bigtableClient, {});

const x = new Bigtable();
x.instance()