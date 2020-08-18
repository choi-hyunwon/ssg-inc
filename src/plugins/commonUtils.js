import constant from '@/plugins/constant'
import axios from '@/plugins/customAxios'

export default {

    $isLocal : function $isLocal () {
        return process.env.VUE_APP_PROFILE === 'LOCAL';
    },

    $isPrd: function $isPrd () {
        return process.env.VUE_APP_PROFILE === 'PRD';
    },

    $isWebpackServer : function $isWebpackServer () {
        return !this.ABALABLE_ADMIN_FO_SERVER;
    },

    $alertUncatchedError : function $alertUncatchedError(error){
        if(!error){
            throw new Error('error is undefined');
        }
        if(!this.$isPrd()){
            this.$log(error);
        }
        this.$alert('서버오류가 발생하였습니다.\n서버 관리자에게 연락부탁드립니다.');
    },

    $alert : function $alert(msg) {
        alert(msg);
    },

    $confirm : function $confirm(msg) {
        return confirm(msg);
    },

    $log : function $log(msg) {
        if(!this.$isPrd()){
            console.log(msg);
        }
    },
    
    $alertValidationError : function $alertValidationError($validator){
        let alertMsg = '';
        const errorList = $validator.errors.items;
        for(let error of errorList){
            alertMsg += error.msg + '\n';
        }
        alertMsg += '입력 항목을 확인 후 등록해주세요.'
        this.$alert(alertMsg);
    },

    $getMainRouter : function $getMainRouter($router){
        let mainRouter = null;
        for(let route of $router.options.routes){
            if(!!route.meta && !!route.meta.isDefaultMainRouter){
                mainRouter = route;
            }
        }

        if(!mainRouter){
            throw new Error('default main router is undefined.');
        }
        return mainRouter;
    },
    
    $getCommonCodes : function $getCommonCodes (databaseType, clssCds) {

//      if(!databaseType || !clssCds){
//          throw new Error('databaseType or clssCds is undefined.');
//      }
//
//      if(!(clssCds.length > 0)){
//          throw new Error('clssCds.length is undefined.');
//      }

      const _this = this;
      return new Promise(function(resolve,reject){
          const url = constant.boardFoHost + '/mssage/v1.0.0/common-codes'
//          const config = {
//              params : {
//                  databaseType : databaseType,
//                  clssCds : clssCds.join(',')
//              }
//          }

//          axios.post(url, config).then( response => {
         	axios.get(url).then( response => {
              if(!!response.data && !!response.data.data){
                  const result = response.data.data;
                  resolve(result);
              } else {
                  reject();
              }
          }).catch( error => {
              if(!!_this.$isLocal()){
                  resolve([]);
              } else {
                  _this.$alertUncatchedError(error);
              }
          });
      });
  }
}