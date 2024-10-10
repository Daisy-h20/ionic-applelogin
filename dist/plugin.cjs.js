'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const appleLogin = core.registerPlugin('appleLogin', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.appleLoginWeb()),
});

class appleLoginWeb extends core.WebPlugin {
    appleLogin() {
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    appleLoginWeb: appleLoginWeb
});

exports.appleLogin = appleLogin;
//# sourceMappingURL=plugin.cjs.js.map
