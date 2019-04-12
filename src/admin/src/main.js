// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './api/identity_server/api_property'
import './api/identity_server/api_resource'
import './api/identity_server/api_scope'
import './api/identity_server/api_secret'
import './api/identity_server/client'
import './api/identity_server/client_claim'
import './components/identity_server/api_resource/index.vue'
import './components/identity_server/api_resource/api_property.vue'
import './components/identity_server/api_resource/api_scope.vue'
import './components/identity_server/api_resource/api_secret.vue'
import './components/identity_server/api_resource/manager.vue'

import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style.scss'
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})