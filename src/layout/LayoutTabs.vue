<template>
	<div class="work_body"><!-- work_body -->
	
		<div class="page_nav"><!-- page_nav -->

			<button class="gnb_sl"></button>

			<v-tabs v-model="activeTab" grow>
				<div v-for="tab of menuTabs" :class="tab.menuCd === 'Home'?'home':''">
				    <v-tab :key="tab.menuCd" :to="tab.path" exact :class="activeTab === tab.path?'v-tabs__item--active':''">
				    	{{ tab.menuNm }}
				    </v-tab>
			    	<button class="btn btn-secondary btn-test" @click.parent="$removeMenuTabNav(tab.menuCd)" v-if="tab.menuCd != 'Home'">X</button>
		    	</div>
		    </v-tabs>
		    
		    <div class="tab_btn">
		    	<button class="arr_left"></button>
		    	<button class="arr_right"></button>
		    	<button class="close"></button>
		    </div>
		</div><!-- // page_nav -->
		
		<div class="work_page"><!-- work_page -->
			<v-tabs v-model="activeTab" grow>
			    <v-tab-item v-for="tab of menuTabs" :key="tab.menuCd" :value="tab.path" :id="tab.menuCd" v-show="activeTab === tab.path">
				    <keep-alive>
				    	<router-view v-if="activeTab === tab.path"></router-view>
				    </keep-alive>
			    </v-tab-item>
	    	</v-tabs>
		</div><!-- // work_page -->
		
	</div><!-- // work_body -->
</template>

<script>
import Vue from 'vue'
import commonUtils from '@/plugins/commonUtils'

export default {
  name: 'LayoutTabs',
  components: {
  },
  props : {
  },
  data() {
    return {
      activeTab: "'/'",
      menuTabs: [
      	{menuCd: 'Home', menuNm: 'HOME', path: '/'}
      ]
    };
  },
  methods: {
	  $addMenuTabNav : function $addMenuTabNav (obj) {
	  	let bAddTab = false;
	  	let objMenuCd = '';
	  	let objMenuNm = '';
	  	let objPath = obj.path;
	  	
	  	let meta = obj.meta;
	    if(!!meta) {
		    objMenuCd = obj.meta.menuCd;
		  	objMenuNm = obj.meta.menuNm;
	    } else {
		    objMenuCd = obj.menuCd;
		  	objMenuNm = obj.menuNm;
	    }
	    
	  	for(let tab of this.menuTabs){
            const tabId = tab.menuCd;
            if(tabId == objMenuCd){
            	bAddTab = true;
            	break;
            }
	    }
	    
	    if(!bAddTab) {
	    	this.menuTabs.push({menuCd: objMenuCd, menuNm: objMenuNm, path: objPath});
	    }
	    this.$router.push({ path: objPath});
	    this.activeTab = "'" + objPath + "'";
	    console.log(this.activeTab);
	  },
	  
	  $removeMenuTabNav : function $removeMenuTabNav (menuCd) {
		const index = this.menuTabs.findIndex(function(item){ return item.menuCd === menuCd; })
	  	const menuTabId = this.menuTabs[index].menuCd;
		
	  	if(menuTabId == this.$route.meta.menuCd) {
			if(index < 1) {
				this.$router.push({ path: '/'});
				this.activeTab = '/';
			} else {
				const prevIndex = Number(index-1);
				this.activeTab = this.menuTabs[prevIndex].path;
				this.$addMenuTabNav(this.menuTabs[prevIndex]);
			}
	  	}
		this.menuTabs.splice(index, 1);
	  }
  },
  mounted () {
	this.$addMenuTabNav(this.$route);
  },
}
</script>
