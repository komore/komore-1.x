import { defer } from 'rxjs';

const gumroadModule$$ = defer(() => import('@komore/integration-gumroad').then(({  }) => ({})));
const paddleModule$ = defer(() => import('@komore/integration-paddle').then(({  }) => ({})));
const paypalModule$ = defer(() => import('@komore/integration-paypal').then(({  }) => ({})));
const squareModule$ = defer(() => import('@komore/integration-square').then(({  }) => ({})));
const stripeModule$ = defer(() => import('@komore/integration-stripe').then(({ }) => ({})));
