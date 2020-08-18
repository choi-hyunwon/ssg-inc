<template>
  <nav class="layout-footer footer">
    <div class="container-fluid container-p-x pb-3 pt-3 text-center">
      
      <span class="footer-text font-weight-bolder">
        COPYRIGHT 신세계 I&amp;C ALL RIGHTS RESERVED.
      </span>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'layout-footer',

  methods: {
    getLayoutFooterBg () {
      return 'bg-footer-theme';
    }
  }
}
</script>
<style lang="scss">
.layout-footer.footer {
  background: #f4f4f4;
    .footer-text {
        font-size: 0.7rem;
        line-height: 1.2em;
        display: inline-block;
    }
}
</style>
