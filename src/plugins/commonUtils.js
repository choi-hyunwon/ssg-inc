import constant from '@/plugins/constant'
import axios from '@/plugins/customAxios'

export default {

	$isLocal: function $isLocal() {
		return process.env.VUE_APP_PROFILE === 'LOCAL';
	},

	$isPrd: function $isPrd() {
		return process.env.VUE_APP_PROFILE === 'PRD';
	},

	$isWebpackServer: function $isWebpackServer() {
		return !this.ABALABLE_ADMIN_FO_SERVER;
	},

	$alertUncatchedError: function $alertUncatchedError(error) {
		if (!error) {
			throw new Error('error is undefined');
		}
		if (!this.$isPrd()) {
			this.$log(error);
		}
		this.$alert('서버오류가 발생하였습니다.\n서버 관리자에게 연락부탁드립니다.');
	},

	$alert: function $alert(msg) {
		alert(msg);
	},

	$confirm: function $confirm(msg) {
		return confirm(msg);
	},

	$log: function $log(msg) {
		if (!this.$isPrd()) {
			console.log(msg);
		}
	},

	$alertValidationError: function $alertValidationError($validator) {
		let alertMsg = '';
		const errorList = $validator.errors.items;
		for (let error of errorList) {
			alertMsg += error.msg + '\n';
		}
		alertMsg += '입력 항목을 확인 후 등록해주세요.'
		this.$alert(alertMsg);
	},

	$getMainRouter: function $getMainRouter($router) {
		let mainRouter = null;
		for (let route of $router.options.routes) {
			if (!!route.meta && !!route.meta.isDefaultMainRouter) {
				mainRouter = route;
			}
		}

		if (!mainRouter) {
			throw new Error('default main router is undefined.');
		}
		return mainRouter;
	},

	$getCommonCodes: function $getCommonCodes(databaseType, clssCds) {

		//      if(!databaseType || !clssCds){
		//          throw new Error('databaseType or clssCds is undefined.');
		//      }
		//
		//      if(!(clssCds.length > 0)){
		//          throw new Error('clssCds.length is undefined.');
		//      }

		const _this = this;
		return new Promise(function (resolve, reject) {
			const url = constant.boardFoHost + '/mssage/v1.0.0/common-codes'
			//          const config = {
			//              params : {
			//                  databaseType : databaseType,
			//                  clssCds : clssCds.join(',')
			//              }
			//          }

			//          axios.post(url, config).then( response => {
			axios.get(url).then(response => {
				if (!!response.data && !!response.data.data) {
					const result = response.data.data;
					resolve(result);
				} else {
					reject();
				}
			}).catch(error => {
				if (!!_this.$isLocal()) {
					resolve([]);
				} else {
					_this.$alertUncatchedError(error);
				}
			});
		});
	},

	showThumb: function (e) {
		const src = e.target.getAttribute("src");
			
		const dim = document.createElement("div");
		dim.setAttribute("class", "dim");
		document.body.appendChild(dim);

		const layer = document.createElement("div");
		layer.setAttribute("class", "layer noMin");
		dim.appendChild(layer);

		const img = document.createElement("img");
		img.setAttribute("src", src);
		layer.appendChild(img);

		const close = document.createElement("div");
		close.setAttribute("class", "closeBox");
		layer.appendChild(close);

		close.addEventListener("click", function(){
			dim.remove();
		});
	},

	getFileInfo: function (e) {
		var filename;
		const input = e.target;
		if(window.FileReader){
			filename = input.files[0].name;
		} else {
			filename = input.value.split('/').pop().split('\\').pop();
		}
		const label = input.parentNode;
		const span = label.previousElementSibling;
		span.innerHTML = filename;
		span.classList.remove("placeholder");
	},

	deleteFile: function (e) {
		const button = e.target;
		const td = button.parentNode;
		const span = td.querySelector(".fileInfo");
		span.innerHTML = "파일을 선택하세요.";
		span.classList.add("placeholder");
		const input = td.querySelector("input[type='file']");
		input.value = "";
	},

	numberOnly: function(e) {
		e.target.value = e.target.value.match(/[0-9]*/);
	}
}