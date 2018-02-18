
require('browser-env')()
const Vue = require('vue');
var hooks = require('require-extension-hooks')

Vue.config.productionTip = false;
// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()
