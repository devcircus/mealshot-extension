import Vue from 'vue'
import App from './App'
import GetsErrors from 'MIXINS/GetsErrors';
import Dispatcher from 'PLUGINS/Dispatcher';


Vue.mixin(GetsErrors);
Vue.use(Dispatcher);

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

/* eslint-disable no-new */
new Vue({
    el: '#app',


    render: h => h(App)
})
