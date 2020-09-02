import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import commonUtils from '@/plugins/commonUtils'
import commonFilters from '@/plugins/commonFilters'
import constant from '@/plugins/constant'

import axios from '@/plugins/customAxios'
 
const mainLayoutName = 'LayoutAppMain';

// Layouts
import LayoutAppMain from '@/layout/LayoutAppMain'

Vue.use(Router)
Vue.use(Meta)

// subRouters
import routerSample from '@/router/router-sample'

export default {

    $router : null,

    $setupRouter : async function $setupRouter () {
        const _this = this;

        const mainRouters = [
            {
                path: '/',
                meta : { menuCd : 'Home', menuNm : 'HOME'},
                component: () => import('@/pages/common/Dashboard')
            }
        ];

        const childrenRouters = routerSample.routers
            //.concat(routerSample2.routers)

        const newChildrenRouters = [];

        for(let subRouter of childrenRouters){
            if(!subRouter.meta){
                newChildrenRouters.push(subRouter);
                continue;
            }

            newChildrenRouters.push(subRouter);
        }

        _this.$router = new Router({
            base: '/',
//            mode: 'hash',   // 주소에 '#' 기본모드가 'hash' mode 를  'history' 로 변경 하면 # 없어진다.
            mode: 'history',
            routes: [
            {
                path: '/',
                component: LayoutAppMain,
                meta : { isDefaultMainRouter : true},
                props: { resManager: null, menuList:[] },
                children: mainRouters.concat(newChildrenRouters)
            },

            // 404
            {
                path: '*', 
                name: 'PageNotFound',
                component: () => import('@/pages/common/PageNotFound')
            },

            // 500 
            {
                path: '/error', 
                name: '500',
                component: () => import('@/pages/common/Error')
            }]
        });
        
        return _this.$router;
    }
} 