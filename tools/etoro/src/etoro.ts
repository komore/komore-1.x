import { createHttpClient } from '@komore/http/client';
import { firstValueFrom, mergeMap, tapNext } from '@komore/reactive';

import {
  createEToroApiClient,
  createEToroLightStreamerSession,
  eToroLoginDataToLightStreamerSessionOptions,
  getEToroLoginData,
} from '@/etoro';

function getToken(): string {
  // TODO: remove
  return 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiNjA1NTYiLCJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QifQ..DFgfBkUh0dOp98I_nLI-yA.GtI9PdmaUoNvHENrmI-KYjqDfGLNivVizp9PzQRxCcGFNVUn24TUzNJlWLJyUPY0Zuhk78Vx-H_p9tAQpB1xh1hYmXagkqa8VledSr36V-Se9tqGTdWu4PSsiYVI_DMr2q1RMjofaXlyOihUwFq1h_qtLRU2KNHRnx5JBrwF3mD7eA1Lki_MGtYDE5hXmwiRSLl50JhdPKGuEiDmrnXYDnJf2oSNpsS5Y-4wpFYwVTcBDen8Ln7fqYkS_RCxi_94IGZrPHxCZbSFLNpVg-yY5Ezs2oPuM7vit3NDoteAD0HTFHY3R263soxrA3aFABj_BXf3PKaue07No4cY1Sp3q_YgKRmwEsOQ_eltYeJNjQJNbPJs5auq8nza5igA1mQyjL9TK-FtZ29M-Ftw1eIEraB9KJKsek0IuWrh0UuVlqT673DVEVhx0G7u-twX_h8qLVKoRpI-AR-U7MKDvCT00HFSsrD9h5TbBdAySoSUSTzOLZaKpcaiL0iKX95XgOOqd2WxTg_Ld_6hRtnv-DcmSgKvL8behdou9c8B4_XsfMLBUo2rJPvjMTRcfng19_a9uAei630wMuyH2-GtCeRc2lObRqOB5eOPx6O396HqQC33Tic4nnPtWD-t8ZjqQVmxgg5JcVVv9sLrGoTL207EX6iTxCRprhd7nr2Pa1D9rfIWoailrhLhqSmxdhObpt4p6PRaZS4l6U9bal2pnhEuoi9OK02uEvO8X45HUsSTQ5PMDL5Qc_ZUhUqJW34il1bwZCQg_HB4eu91NbU7847hR466Sf161PRyvkqELbhHlGF1jrP9pH1uyZjH2iK_gqplUjdQEdl5zu0aJU5Br4WQr4wX5EWlmFZfo3ENMFvfnGLDCeqGnqaLJ22CMAm4hjFKJpm53SBTjY8QVPvD-InueRF0LyGkR5f7W5L96pXMp7EDm4i5k-NBLWc6_2Ttw53ADpmi3Vf1AscYpeAn6P2VDlQat4koj442pQHi44GN9ITg05ze3hUfi6_i6Vbu9UeKRPORQcAMawrjVowdmOIgTmphsDyNaUuUFDlQj5-OJqcb9C0olCvctGl15FxFXaVcLBspOzOYVrKVVLIWtrpLcU9FTHGQOyiKu0uNEGDFbT4TUMBZzYseGBkTXUgCW7OrJZo-4ttAo5rd0Fy4KAnunSyQkkbX9P8BkDwR5S_j4SXfsGjrCy-wUDdfw8BHn0iMHHhleiI6Rn1V29mSqTVYvYxNkeHJBcZ9FYhHa94wX3tez0CYer3RZjCUZ8jQ-JFkxk6elxAvI6wG0R4F0nfF_B9VjJ2gjiF5M698mWzmAXXiyUPm94uEo5qTwDHrEO6jwPq8fLlFlRBaCJvY1gEXZJW16FN-K0Rp5e9SCaXX0itm-0X43mLY9Zt3HsINytXgDbS9PAltsB9LByhcTMQsaSKNcaRl694VpuCaeslXHXkw1QUJY49mDS5aktnjGmQwINRfVu2dRNXU-Rc07qLRjQ.44Ni6jsxxplhM8gMoF4Z1XxdtveuHMg8zuHMJ_fOrUo';
}

async function main() {
  const httpClient = createHttpClient();
  const token = getToken();
  const apiClient = createEToroApiClient({ httpClient, token });
  const toLightStreamerSessionOptions = eToroLoginDataToLightStreamerSessionOptions(httpClient, token);
  const result$ = getEToroLoginData(apiClient)().pipe(
    tapNext(loginData => {
      console.log('api responses', loginData.AggregatedResult.ApiResponses);
    }),
    mergeMap(loginData =>
      createEToroLightStreamerSession(toLightStreamerSessionOptions(loginData)).pipe(
        tapNext(lightStreamerSession => {
          console.log('ls session!', lightStreamerSession);
        })
      )
    )
  );
  const result = await firstValueFrom(result$);
  console.log('wee, result', result);
  /*const messages$ = createWebSocketClient(url).pipe(
    tapNext(message => console.log('message', message)),
    shareReplay({ refCount: true })
  );
  messages$.subscribe();
  emitter.next(
    'bind_session\nLS_session=S15c751c06c2ce34eM519T3508382&LS_phase=4403&LS_cause=loop1&LS_keepalive_millis=5000&LS_container=lsc&'
  );
  await lastValueFrom(messages$);*/
}

main();
