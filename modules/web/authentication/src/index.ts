export { createWebCredential } from './create-web-credential';
export { getWebCredential } from './get-web-credential';

// TODO: remove once available in lib.dom.d.ts
declare global {
    interface CredentialData {
      id: string;
    }
  
    interface PasswordCredentialData extends CredentialData {
      name?: string;
      iconURL?: string;
      password: string;
    }
  
    interface FederatedCredentialInit extends CredentialData {
      name?: string;
      iconURL?: string;
      provider: string;
      protocol?: string;
    }
  
    interface CredentialCreationOptions {
      password?: HTMLFormElement | PasswordCredentialData;
      federated?: FederatedCredentialInit;
    }
  
    interface PasswordCredential extends Credential {
      readonly iconUrl: string;
      readonly name: string;
      readonly password: string;
    }
  
    interface FederatedCredential extends Credential {
      readonly provider: string;
      readonly protocol: string;
    }
  }
  