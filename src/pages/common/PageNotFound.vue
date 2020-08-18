<template>
    <div class="overflow-hidden">
        <div class="container d-flex align-items-stretch p-0">
        <div class="row w-100">
            <div class="d-flex col-md justify-content-center align-items-center order-2 order-md-1 position-relative p-5">
            <div class="error-bg-skew bg-white"></div>

            <div class="text-md-left">
                <h1 class="display-2 font-weight-bolder mb-4">Whoops...</h1>
                <div class="text-xlarge font-weight-light mb-5">We couldn't find the page<br> you are looking for :(</div>
                <button type="button" class="btn btn-primary" @click="$router.go(-1)">←&nbsp; Go Back</button>
            </div>
            </div>

            <div class="d-flex col-md-5 justify-content-center align-items-center order-1 order-md-2 text-center text-white p-5">
            <div class="error-bg-skew right"></div>
            <div class="text-md-right">
                <div class="error-code font-weight-bolder mb-2">404</div>
                <div class="error-description font-weight-light">Not Found</div>
            </div>
            </div>

        </div>
        </div>
    </div>
</template>

<style src="@/assets/css/error.css" lang="css"></style>
<script>
export default {
//   name: '404',
  metaInfo: {
    title: '404 Not Found'
  }
}
</script>
