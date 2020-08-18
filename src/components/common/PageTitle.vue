<template>
	<div class="page_tit">
		<h2>{{ $route.meta.menuNm }}</h2>
		<ul>
			<li>HOME</li>
			<li>{{ $route.meta.grpMenuNm }}</li>
			<li>{{ $route.meta.uprMenuNm }}</li>
		</ul>
	</div>
</template>
<script>
import Vue from 'vue'

export default {
	name: 'PageTitle',
  components: {
  },
  props : {
  },
  mounted () {
  },

  beforeDestroy () {
  }
}
</script>
