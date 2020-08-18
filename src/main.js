import '@babel/polyfill'
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

import App from './App'
import axios from '@/plugins/customAxios'
import commonUtils from '@/plugins/commonUtils'
import commonFilters from '@/plugins/commonFilters'
import constant from '@/plugins/constant'
import customRouter from '@/plugins/customRouter'
import customVeeValidatorExtends from '@/plugins/customVeeValidatorExtends'
import customVeeValidatorKorObject from '@/plugins/customVeeValidatorKorObject'
import flatPickr from 'vue-flatpickr-component'

import BootstrapVue from 'bootstrap-vue'

import store from './vuex/store.js'

import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/material_red.css'

import vuetify from "vuetify";

//extends vee-validate
Validator.localize('ko', customVeeValidatorKorObject);
for(let key in customVeeValidatorExtends) {
 VeeValidate.Validator.extend(key, customVeeValidatorExtends[key]);
}

//global filters
for(let key in commonFilters) {
 Vue.filter(key, commonFilters[key]);
}

Vue.config.productionTip = false;

//install plugins
Vue.use(VeeValidate, {
    locale: 'ko'
   ,events: 'submit|change'
});
Vue.use(BootstrapVue);
Vue.use(flatPickr);
Vue.use(vuetify); 

// define prototypes.
Vue.prototype.$axios = axios;

// clear localStorage
if(!!localStorage){
	localStorage.clear();
	createVue();
}

async function createVue() {
	try {
		const router = await customRouter.$setupRouter();

		new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
		
	} catch (error) {
		commonUtils.$alertUncatchedError(error);
	}
}