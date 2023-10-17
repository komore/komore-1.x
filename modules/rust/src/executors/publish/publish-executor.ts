import { type PublishSchema } from './publish-schema';

/**
 * Publish executor
 * @param publishSchema Publish schema
 */
export default async function publishExecutor(_publishSchema: PublishSchema): Promise<void> {
  // TODO
  `
    --dry-run
    --registry <registry>
    --no-verify
    --allow-dirty
  `
}
