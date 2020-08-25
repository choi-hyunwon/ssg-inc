export default {
	grpMenuCd : 'GNB-SAMPLE',
	grpMenuNm : '샘플 메뉴',
	childrens : [

			{
				path: '/sample/manage',
				meta : {
					isMainMenu : true,
					uprMenuCd : 'UPR-SAMPLE',
					uprMenuNm : '샘플',
					menuCd : 'SAMPLE-MANAGE',
					menuNm : '샘플 관리'
				},
				component: () => import('@/pages/sample/SampleManage')
			},
			// {
			// 	path: '/sample/grid',
			// 	meta : {
			// 		isMainMenu : true,
			// 		uprMenuCd : 'UPR-SAMPLE',
			// 		uprMenuNm : '샘플',
			// 		menuCd : 'SAMPLE-GRID',
			// 		menuNm : '샘플 그리드'
			// 	},
			// 	component: () => import('@/pages/sample/SampleGridList')
			// },
			{
				path: '/sample/editor',
				meta : {
					isMainMenu : true,
					uprMenuCd : 'UPR-SAMPLE',
					uprMenuNm : '샘플',
					menuCd : 'SAMPLE-EDITOR',
					menuNm : '샘플 EDITOR'
				},
				component: () => import('@/pages/sample/SampleEditor')
			},
			
			{
				path: '/sample/detail2',
				meta : {
					isMainMenu : true,
					uprMenuCd : 'UPR-SAMPLE2',
					uprMenuNm : '샘플2',
					menuCd : 'SAMPLE-DETAIL2',
					menuNm : '샘플 상세2'
				},
			},

			
			
			
			
			
			
			
			{
				path: '/sample/pub_guide',
				meta : {},
				component: () => import('@/pages/sample/pub_guide')
			},            
			
			

			{
				path: '/part2/SYS020100',
				meta : {},
				component: () => import('@/pages/part2/SYS020100')
			},
			{
				path: '/part2/SYS020200',
				meta : {},
				component: () => import('@/pages/part2/SYS020200')
			},
			{
				path: '/part2/SYS020201',
				meta : {},
				component: () => import('@/pages/part2/SYS020201')
			},
			{
				path: '/part2/SYS020600',
				meta : {},
				component: () => import('@/pages/part2/SYS020600')
			},
			{
				path: '/part2/SYS011201',
				meta : {},
				component: () => import('@/pages/part2/SYS011201')
			},
			{
				path: '/part2/SYS020500',
				meta : {},
				component: () => import('@/pages/part2/SYS020500')
			},
			{
				path: '/part2/SYS011600',
				meta : {},
				component: () => import('@/pages/part2/SYS011600')
			},
			{
				path: '/part2/SYS010300',
				meta : {},
				component: () => import('@/pages/part2/SYS010300')
			},
			{
				path: '/part2/SYS011300',
				meta : {},
				component: () => import('@/pages/part2/SYS011300')
			},
			{
				path: '/part2/SYS041100',
				meta : {},
				component: () => import('@/pages/part2/SYS041100')
			},
			{
				path: '/part2/SYS011400',
				meta : {},
				component: () => import('@/pages/part2/SYS011400')
			},
			{
				path: '/part2/SYS011500',
				meta : {},
				component: () => import('@/pages/part2/SYS011500')
			},
			{
				path: '/part2/SYS010400',
				meta : {},
				component: () => import('@/pages/part2/SYS010400')
			},
			{
				path: '/part2/SYS010500',
				meta : {},
				component: () => import('@/pages/part2/SYS010500')
			},
			{
				path: '/part2/SYS010401',
				meta : {},
				component: () => import('@/pages/part2/SYS010401')
			},
			{
				path: '/part2/SYS011200',
				meta : {},
				component: () => import('@/pages/part2/SYS011200')
			},
			{
				path: '/part2/SYS020600_1',
				meta : {},
				component: () => import('@/pages/part2/SYS020600_1')
			},
			{
				path: '/part2/SYS020300',
				meta : {},
				component: () => import('@/pages/part2/SYS020300')
			},
			{
				path: '/part2/SYS020401',
				meta : {},
				component: () => import('@/pages/part2/SYS020401')
			},
			{
				path: '/part2/SYS011000',
				meta : {},
				component: () => import('@/pages/part2/SYS011000')
			},
			{
				path: '/part2/SYS040500',
				meta : {},
				component: () => import('@/pages/part2/SYS040500')
			},
			{
				path: '/part2/SYS040300',
				meta : {},
				component: () => import('@/pages/part2/SYS040300')
			},
			{
				path: '/part2/SYS040400',
				meta : {},
				component: () => import('@/pages/part2/SYS040400')
			},
			{
				path: '/part2/SYS010700',
				meta : {},
				component: () => import('@/pages/part2/SYS010700')
			},
			{
				path: '/part2/SYS010800',
				meta : {},
				component: () => import('@/pages/part2/SYS010800')
			},
			{
				path: '/part2/SYS010900',
				meta : {},
				component: () => import('@/pages/part2/SYS010900')
			},
			{
				path: '/part2/SYS041300',
				meta : {},
				component: () => import('@/pages/part2/SYS041300')
			},
			{
				path: '/part2/SYS041400',
				meta : {},
				component: () => import('@/pages/part2/SYS041400')
			},
			{
				path: '/part2/SYS040201',
				meta : {},
				component: () => import('@/pages/part2/SYS040201')
			},
			{
				path: '/part2/SYS040100',
				meta : {},
				component: () => import('@/pages/part2/SYS040100')
			},
			{
				path: '/part2/SYS050001',
				meta : {},
				component: () => import('@/pages/part2/SYS050001')
			},
			{
				path: '/part2/SYS050002',
				meta : {},
				component: () => import('@/pages/part2/SYS050002')
			},
			{
				path: '/part2/SYS050003',
				meta : {},
				component: () => import('@/pages/part2/SYS050003')
			},
			{
				path: '/part2/SYS050004',
				meta : {},
				component: () => import('@/pages/part2/SYS050004')
			},
			{
				path: '/part2/SYS050005',
				meta : {},
				component: () => import('@/pages/part2/SYS050005')
			},

			{
				path: '/part2/SYS050006',
				meta : {},
				component: () => import('@/pages/part2/SYS050006')
			},
			
			{
				path: '/part2/SYS050007',
				meta : {},
				component: () => import('@/pages/part2/SYS050007')
			},
			
			{
				path: '/part2/SYS050008',
				meta : {},
				component: () => import('@/pages/part2/SYS050008')
			},
			{
				path: '/part2/SYS050008_2',
				meta : {},
				component: () => import('@/pages/part2/SYS050008_2')
			},

			{
				path: '/part2/SYS050009',
				meta : {},
				component: () => import('@/pages/part2/SYS050009')
			},

			{
				path: '/part2/SYS050010',
				meta : {},
				component: () => import('@/pages/part2/SYS050010')
			},

			{
				path: '/part2/SYS050011',
				meta : {},
				component: () => import('@/pages/part2/SYS050011')
			},
			
			{
				path: '/part2/SYS050012',
				meta : {},
				component: () => import('@/pages/part2/SYS050012')
			},
			
			{
				path: '/part2/SYS050013',
				meta : {},
				component: () => import('@/pages/part2/SYS050013')
			},

			{
				path: '/part2/SYS050014',
				meta : {},
				component: () => import('@/pages/part2/SYS050014')
			},

			{
				path: '/part2/SYS050015',
				meta : {},
				component: () => import('@/pages/part2/SYS050015')
			},
			
			{
				path: '/part2/SYS050015_2',
				meta : {},
				component: () => import('@/pages/part2/SYS050015_2')
			}
			
						
	],

	get routers() {
		const routers = [];
		const temp = this.childrens;
		
		for(let router of this.childrens){
			router.meta.grpMenuCd = this.grpMenuCd;
			router.meta.grpMenuNm = this.grpMenuNm;
			routers.push(router);
		}
		return routers;
	}
}
