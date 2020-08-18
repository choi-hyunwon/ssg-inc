<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form name="form" ref="test" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="loginId">ID</label>
          <input
            type="text"
            class="form-control"
            name="loginId"
            v-model="user.loginId"
            v-validate="'required'"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.has('loginId')"
          >ID 를 입력하세요.</div>
        </div>
        <div class="form-group">
          <label for="passwd">비밀번호</label>
          <input
            type="password"
            class="form-control"
            name="passwd"
            v-model="user.passwd"
            v-validate="'required'"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.has('passwd')"
          >비밀번호 를 입력하세요.</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import commonUtils from '@/plugins/commonUtils'
import constant from '@/plugins/constant'

export default {
  name: 'login',
  computed: {
    loggedIn() {
      return this.$store.state.isAuth;
    }
  },
  data() {
    return {
    	user: {
            loginId: null
            ,passwd: null
            ,email : null
        },
      message: ''
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleLogin() {
      this.$validator.validateAll();

      if (this.errors.any()) {
        return;
      }

      if (this.user.loginId && this.user.passwd) {
      
		const url = constant.boardFoHost + '/auth/v1.0.0/login';
		
		const config = new FormData();
		config.append('loginId', this.user.loginId);
		config.append('passwd', this.user.passwd);
		
		this.$axios.post(url, config).then( response => {
            if(!!response && response.status === 200){
            	commonUtils.$getLoginUserInfo().then(res => {
	                try {
		                this.$store.commit("loginSuccess", res); 
				        this.$router.push({ path: '/'});
	                } catch (error) {
	                    commonUtils.$alertUncatchedError(error);
	                }
	            }).catch(error => {
			        this.$router.push({ path: '/'});
	            });
            }
		}).catch( error => {
			console.log(error);
		    commonUtils.$alertUncatchedError(error);
		});
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>