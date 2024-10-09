import { registerPlugin } from '@capacitor/core';

import type { appleLoginPlugin } from './definitions';

const appleLogin = registerPlugin<appleLoginPlugin>('appleLogin', {
  web: () => import('./web').then(m => new m.appleLoginWeb()),
});

export * from './definitions';
export { appleLogin };
