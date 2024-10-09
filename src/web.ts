import { WebPlugin } from '@capacitor/core';

import type { appleLoginPlugin } from './definitions';

export class appleLoginWeb extends WebPlugin implements appleLoginPlugin {
  appleLogin(): Promise<{ email: string; name: string }> {
    throw new Error('Method not implemented.');
  }
}
