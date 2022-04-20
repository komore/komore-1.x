import { type AzCliAccount } from './az-cli-account';
import { type AzCliProfile } from './az-cli-profile';

export function azCliAccountToAzCliProfile(azCliAccount: AzCliAccount): AzCliProfile {
  const { id, name } = azCliAccount;
  return { id, name };
}
