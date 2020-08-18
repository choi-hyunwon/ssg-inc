<template>
	<div class="work_gnb"><!-- work_gnb -->
		<ul>
	
			<li>
				<a href="javascript:void(0)" class="bookmark"></a>
			</li>
	
			<li>
				<a href="javascript:void(0)" class="icon_01">1댑스<br />메뉴</a>
				<ul>
	
					<li>
						<a href="javascript:void(0)">2_1댑스메뉴</a>
						<ul>
							<li><a href="#/sample/manage">샘플</a></li><!-- 현재페이지 m_fix -->
							<li><a href="#/sample/list">샘플관리</a></li>
							<li><a href="#/sample/grid">샘플그리드</a></li>
						</ul>
					</li>
	
					<li>
						<a href="javascript:void(0)">2_1댑스메뉴</a>
						<ul>
							<li><router-link :to="{ path: '/'}">1_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">1_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">1_3댑스메뉴</router-link></li>
						</ul>
					</li>
	
				</ul>
			</li>
	
			<li>
				<a href="javascript:void(0)" class="icon_02">1댑스<br />메뉴</a>
				<ul>
	
					<li>
						<a href="javascript:void(0)">2_2댑스메뉴</a>
						<ul>
							<li><router-link :to="{ path: '/'}">2_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">2_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">2_3댑스메뉴</router-link></li>
						</ul>
					</li>
	
					<li>
						<a href="javascript:void(0)">2_2댑스메뉴</a>
						<ul>
							<li><router-link :to="{ path: '/'}">2_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">2_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">2_3댑스메뉴</router-link></li>
						</ul>
					</li>
	
				</ul>
			</li>
	
			<li>
				<a href="javascript:void(0)" class="icon_03">1댑스<br />메뉴</a>
				<ul>
	
					<li>
						<a href="javascript:void(0)">2_3댑스메뉴</a>
						<ul>
							<li><router-link :to="{ path: '/'}">3_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">3_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">3_3댑스메뉴</router-link></li>
						</ul>
					</li>
	
					<li>
						<a href="javascript:void(0)">2_3댑스메뉴</a>
						<ul>
							<li><router-link :to="{ path: '/'}">3_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">3_3댑스메뉴</router-link></li>
							<li><router-link :to="{ path: '/'}">3_3댑스메뉴</router-link></li>
						</ul>
					</li>
	
				</ul>
			</li>
			<template v-for="(menu, index) in menuList">
				<li>
					<a href="javascript:void(0)" class="icon_03">{{ menu.grpMenuNm }}</a>
					<ul>
						<template v-for="(uprRouter, uprIndex) in menu.grpRouters">
							<li
							
							>
								<a href="javascript:void(0)">{{ uprRouter.uprMenuNm }}</a>
								<ul>
									<template v-for="(router, index) in uprRouter.uprRouters">
										<li
											:class="{'m_fix' : $isMenuActive(router.menuCd)}"
				        					v-if="uprRouter.uprRouters.length > 0"
										>
				        					<!-- :class="{'m_fix': active}" -->
				        					<!--
											<router-link 
												:to="router.path" 
												:exact="true"
												@click.native="$clearLocalStogare(router.menuCd)"
											>{{ router.menuNm }}</router-link>
											-->
											<a href="javascript:void(0)" @click="$clearLocalStogare(router)">{{ router.menuNm }}</a>
										</li>
						            </template>
								</ul>
							</li>
						</template>
					</ul>
				</li>
		    </template>
		</ul>
	</div><!-- // work_gnb -->
</template>

<script>
import commonUtils from '@/plugins/commonUtils'

export default {
  name: 'Layout-Gnb',
  props : {
      gnbClickFunc : {
          type: Function
      }
  },
  data() {
    return {
      menuList : []
    }
  },
  
  beforeMount : function beforeMount () {
    
    const mainRouter = commonUtils.$getMainRouter(this.$router);
    
    const grpMenuMap = new Map();
    const uprMenuMap = new Map();
    
    for(let subRouter of mainRouter.children){
        if(!!subRouter.meta && !!subRouter.meta.grpMenuCd){
            const grpMenuCd = subRouter.meta.grpMenuCd;
            if(!grpMenuMap.has(grpMenuCd)){
                grpMenuMap.set(grpMenuCd, subRouter.meta.grpMenuNm);
            }
        }
        
        if(!!subRouter.meta && !!subRouter.meta.uprMenuCd){
            const uprMenuCd = subRouter.meta.uprMenuCd;
            if(!uprMenuMap.has(uprMenuCd)){
                uprMenuMap.set(uprMenuCd, subRouter.meta.uprMenuNm);
            }
        }
    }

    const menuList = [];
    for(let grpMenuMapkey of grpMenuMap.keys()){
	    let obj = {
		    grpMenuCd : grpMenuMapkey
		    , grpMenuNm : grpMenuMap.get(grpMenuMapkey)
		    , grpRouters : []
	    }
	    for(let uprMenuMapkey of uprMenuMap.keys()){
		  let routerObj = [];
		  
	      for(let router of mainRouter.children){
	      	let meta = router.meta;
	      	if(!!meta && meta.grpMenuCd === grpMenuMapkey && meta.uprMenuCd === uprMenuMapkey && !!meta.isMainMenu){
		        routerObj.push({
		           path : router.path
		          ,menuNm : router.meta.menuNm
		          ,menuCd : router.meta.menuCd
		        });
		    
		    }
		  }
		  
		  obj.grpRouters.push({
	        uprMenuCd : uprMenuMapkey
	        ,uprMenuNm : uprMenuMap.get(uprMenuMapkey)
	        ,uprRouters : routerObj
	      });
	    }
	    
	    menuList.push(obj);
    }
    
    this.menuList = menuList;
  },
  
  mounted () {
	$(document).on("click", ".work_gnb > ul > li", function(){ // 1댑 기본 구동
		$(this).addClass("on").siblings("li").removeClass("on");
		$(this).parents(".container").addClass("on");
		$(this).children("ul").addClass("on").parent("li").siblings("li").children("ul").removeClass("on");
	});

	$(document).on("click", ".work_gnb > ul > li > ul > li", function(){ // 2댑 기본 구동
		$(this).addClass("on").siblings("li").removeClass("on");
		$(this).children("ul").slideDown(500).parent("li").siblings("li").children("ul").slideUp(500);
	});
	
	$(document).on("click", ".work_gnb > ul > li > ul > li > ul > li", function(){ // 3댑 기본 구동
		$(".work_gnb").find("li").removeClass("m_fix");
		$(this).addClass("m_fix").siblings("li").removeClass("m_fix");
	});

	if($("li.m_fix").length){ // 현재 페이지 1댑 아이콘 on
		$("li.m_fix").parents("li").addClass("on");
		$("li.m_fix").parent("ul").addClass("on");
	};
	
	
	$(document).on("click", "button.gnb_sl", function(){ // 3댑 기본 구동
		$(".container").removeClass("on");
	});
  },
  
  methods: {
    $isMenuActive : function (menuCd) {
      const route = this.$route;
      return !!route.meta && route.meta.menuCd === menuCd;
    },
    
    $clearLocalStogare: function $clearLocalStogare (router){
      if(!!localStorage.getItem(router.menuCd)){
        localStorage.removeItem(router.menuCd);
      }
      
      this.gnbClickFunc(router);
    }
  }
}

</script>