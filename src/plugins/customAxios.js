import axios from 'axios'
import commonUtils from '@/plugins/commonUtils'
import constant from '@/plugins/constant'
import store from '@/vuex/store.js'

axios.defaults.timeout = 300 *1000;

axios.interceptors.request.use(config => {
	
    // axios 통신시 헤더(x-lang-cd:언어, x-partner-id:고객사ID)
    config.headers = {
    	'x-lang-cd': 'ko',
    	'x-partner-id': store.state.loginUer.loginId
    }
    if(config.method != 'get') {
    	store.commit('loading', true);
    }
    
    return config;
}, error => {
	store.commit('loading', false);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
	store.commit('loading', false);
    return response;
}, error => {
	store.commit('loading', false);
    return Promise.reject(error);
});

export default axios;