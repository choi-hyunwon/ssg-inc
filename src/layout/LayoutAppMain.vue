<template>
  <div class="wrap"><!-- wrap -->

	<div class="header"><!-- header -->
		<h1><a href="#/">신세계 아이앤씨</a></h1>
		<div class="h_sv">
			오른쪽기능 (미정)
		</div>
	</div><!-- // header -->
	
	
	<div class="container"><!-- container -->
	
		<Layout-Gnb
			:gnbClickFunc="$clickRouter" 
		/><!-- Left Menu -->

		<Layout-Tabs ref="tabsLayout"/><!-- LayoutTabs -->

		<!-- 로딩 바(s) -->
		<div id="loading" class="loading_wrap" v-if="loading">
			<div class="loadani"></div>
		</div>
		<!--// 로딩 바(e) -->
		
	</div><!-- // container -->
  </div><!-- // wrap -->
</template>
<script>
import Vue from 'vue'
import commonUtils from '@/plugins/commonUtils'

import LayoutHorizontalSidenav from '@/layout/LayoutHorizontalSidenav'
import LayoutGnb from '@/layout/LayoutGnb'
import LayoutTabs from '@/layout/LayoutTabs'

export default {
  name: 'layout-main-layout',
  components: {
    'layout-horizontal-sidenav': LayoutHorizontalSidenav,
    'Layout-Gnb': LayoutGnb,
    'Layout-Tabs': LayoutTabs
  },
  props : {
      menuList : {
          type: Array
      }
  },
  computed: {
	  loading() {
	  	return this.$store.state.loading
	  }
  },
  methods: {
  	$clickRouter : function $clickRouter (obj) {
  		this.$refs['tabsLayout'].$addMenuTabNav(obj);
  	}
  }
}
</script>

<style>
	.loading_wrap{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,.3);
		z-index: 100;
	}
	.loading_wrap .loadani{
		position: absolute;
		width: 120px;
		height: 120px;
		top: 50%;
		left: 50%;
		margin: -60px 0 0 -60px;
		background: url('../assets/images/loading.gif') no-repeat #fff center;
		background-size: 120px auto;
		border-radius: 10px;
		-o-border-radius: 10px;
		-ms-border-radius: 10px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		z-index: 200;
	}
</style>
