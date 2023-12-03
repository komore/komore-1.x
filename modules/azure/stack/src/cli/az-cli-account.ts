/**
 * az CLI account
 */
export interface AzCliAccount {
  readonly cloudName: string;
  readonly homeTenantId: string;
  readonly id: string;
  readonly isDefault: boolean;
  readonly name: string;
  readonly state: 'Enabled';
  readonly tenantId: string;
  readonly user: {
    readonly name: string;
    readonly type: 'user';
  };
}
