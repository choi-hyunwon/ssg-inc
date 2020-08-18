export default {
    grpMenuCd : 'GNB-GRID',
    grpMenuNm : '샘플 그리드',
    childrens : [

            {
            	path: '/sample/grid',
            	meta : {
            		isMainMenu : true,
            		menuCd : 'GNB-TUIGRID',
            		uprMenuCd : 'GNB-GNB-TUIGRID',
            		menuNm : '샘플 TUI그리드',
            		uprMenuNm : '샘플 TUI그리드'
            	},
            	component: () => import('@/pages/grid/SampleGridList')
            },
            
            {
            	path: '/sample/jqGrid',
            	meta : {
            		isMainMenu : true,
            		menuCd : 'GNB-JQGRID',
            		uprMenuCd : 'GNB-GNB-JQGRID',
            		menuNm : '샘플 JQ그리드',
            		uprMenuNm : '샘플 JQ그리드'
            	},
            	component: () => import('@/pages/grid/SampleJqGridList')
            }
    ],

    get routers() {
        const routers = [];
        for(let router of this.childrens){
            router.meta.grpMenuCd = this.grpMenuCd;
            router.meta.grpMenuNm = this.grpMenuNm;
            routers.push(router);
        }
        return routers;
    }
}
