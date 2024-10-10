import { registerPlugin } from '@capacitor/core';
const appleLogin = registerPlugin('appleLogin', {
    web: () => import('./web').then(m => new m.appleLoginWeb()),
});
export * from './definitions';
export { appleLogin };
//# sourceMappingURL=index.js.map