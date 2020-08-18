Vue 템플릿 로컬 빌드 방법
==================

# 1. Node.js 설치

 아래 주소로 이동하여 Node.js 설치.
 
* https://nodejs.org/dist/v12.16.1/

``` v12.16.1 버전 설치 (2020.03.05 기준)
` 개인별 사용 OS 맞는 버전 다운로드 
` 명령 프롬프트 시작하여 설치 됐는지 확인

## 2020.03.05 v10.18.1 -> v12.16.1 버전 업
* node.js 버전(v12.16.1)인 경우 ./frontend/package.json 에서 버전 확인 이전버전인 경우 '4.13.1'으로 버전 변경 후 'npm install' 진행필수
	- 참고
		- devDependencies : 'node-sass': '~4.13.1'
		- resolutions : 'sass-loader/node-sass': '~4.13.1' 


[ 노드 버전 확인 ] 
  node -v

[ npm 버전 확인 ] 
  npm -v
```

# 2. Vue-cli 4.x 설치

 명령 프롬프트 에서 NPM명령어를 사용하여 Vue-cli 설치.
 
* Vue 4.x 글로벌 설치
	- $ npm install -g @vue/cli 
* Vue 버전 확인
	- $ vue --version 

# 3. Yarn 설치

 명령 프롬프트 에서 NPM명령어를 사용하여 Yarn 설치.

* Yarn 설치
	- $ npm install -g yarn
* Yarn 버전 확인
	- $ yarn --version 

# 4. package.json으로부터 의존성 모듈 설치

 명령 프롬프트 에서 Yarn OR NPM명령어를 사용하여 의존성 모듈 설치.

* 경로 설정
	- 명령 프롬프트 에서 해당 프로젝트 frontend 경로로 이동 ( ex) cd C:/scm/workspace/프로젝트FO/frontend )
	- 프로젝트에서 frontend 폴더 선택 후 마우스 우클릭 'Show In -> Terminal' 선택
	
* yarn install 또는 npm install

# 5. 템플릿 빌드 및 서버구동

 명령 프롬프트 에서 Yarn OR NPM명령어를 사용하여 빌드 및 서버를 구동

* 경로
	- 명령 프롬프트 에서 해당 프로젝트 frontend 경로로 이동( ex) cd C:/scm/workspace/프로젝트FO/frontend)
	- 프로젝트에서 frontend 폴더 선택 후 마우스 우클릭 'Show In -> Terminal' 선택
	
* Vue 빌드 : yarn run build-local 또는 npm run build-local 
	- 빌드된 파일은 '../src/main/resources/static'에 생성되고 해당 경로에서 'Refresh'
* Vue 서버구동 : yarn run serve-local 또는 npm run serve-local
	- 종료시에는 명령프롬프트 에서 Ctrl + C -> 'y' 입력 후 Enter

* Vue 화면 개발시 참고
	- 서비스(Java)가 없거나 수정이 없으면서 Vue화면 수정하는 경우.
		- Fo프로젝트 서버(Spring Boot) 실행.
			- (마우스 우클릭 'Run As -> Spring Boot App' 또는 'Boot Dashboard' window창에서  프로젝트 서버 실행)
		- Vue 서버구동(yarn 또는 npm)하여 'Terminal'에서 접속주소 확인하여 접속해서 확인.
			- (npm 또는 yarn 로 하지 않는경우 'Build' 후 'Refresh')
		
``` 빌드 완료 및 서버 구동이 되면 접속주소를 확인할 수 있으며
``` 해당 주소를 브라우저로 접속


## 1. Vue 화면 개발시 참고
* Fo프로젝트 서버(Spring Boot) 실행.
	- (마우스 우클릭 'Run As -> Spring Boot App' 또는 'Boot Dashboard' window창에서  프로젝트 서버 실행)
* Vue 서버구동(yarn 또는 npm)하여 'Terminal'에서 접속주소 확인하여 접속해서 확인.
	- (SpringBoot서버 IP로 확인하는 경우 Vue소스 'Build' 후 'Refresh' )
	
## 2. 폴더 경로
* assets : image, css 등.. 외부 자원들에 대한 폴더
* components : 공통으로 사용되는 Vue 컴포넌트들이 모여 있는 디렉토리
* layout : 화면 Layout (Header, Footer, Main)
* pages : 업무별 화면
* plugins : 공통함수
* router : 업무별 메뉴정보, vue-router 설정을 하는 디렉토리
* vendor : Vue Layout Template 에서 사용하는 컴포넌트 .scss
* vuex : 상태관리를 위한 패턴이자 라이브러리