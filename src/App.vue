<template>
  <v-app> <router-view></router-view></v-app>
</template>

<!-- style src="@/vendor/styles/bootstrap.scss" lang="scss"></style -->
<style src="@/vendor/styles/appwork.scss" lang="scss"></style>
<!-- style src="@/vendor/styles/theme-corporate.scss" lang="scss"></style -->
<!-- style src="@/vendor/styles/colors.scss" lang="scss"></style -->
<!-- style src="@/vendor/styles/uikit.scss" lang="scss"></style -->
<!-- style src="./style.scss" lang="scss"></style -->
<style src="./cloud.css" lang="css"></style>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: 'Index',
    titleTemplate: '샘플 - %s '
  },
  updated () {
    // Remove loading state
    // setTimeout(() => document.body.classList.remove('app-loading'), 1)
  } 
} 
</script>

