import { UrlString } from '@komore/url';
import { EToroAccountType } from '../account/etoro-account-type';

export interface EToroLoginResponseSummary {
  readonly AccountType: EToroAccountType;
  readonly ApplicationName: string;
  readonly ApplicationVersion: string;
  readonly Cid: number;
  readonly ClientRatesRefreshIntervalInSeconds: number;
  readonly ErrorInCall: unknown | null;
  readonly ErrorMessage: string | null;
  readonly IsInMaintenance: boolean;
  readonly IsSuccess: boolean;
  readonly MaintenanceRedirectUrl: UrlString | null;
  readonly StatusCode: number;
}
