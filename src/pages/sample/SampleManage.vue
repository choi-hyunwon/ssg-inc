<template>
<div>
	<!-- Page 타이틀 영역    -->
    <page-title />

	<div class="comm_btn">
		<button>조회</button>
	</div>                        

	<div class="search_table"><!-- search_table -->
	<table>
	<caption></caption>
	<colgroup>
	<col style="width:100px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>분류</th>
	    <td>
            <select class="form-control"
                name="searchColId"
                v-model="searchInfo.searchColId"
                @change="$changeSearchColId"
            >
                <option value="ALL">전체</option>
                <option value="testId">작성자</option>
                <option value="testNm">제목</option>
                <option value="testConts">내용</option>
            </select>
	    </td>
	    <th>검색명</th>
	    <td>
	    	<div class="inp_tip">
	            <input type="text" name="searchValue" placeholder="" maxlength="50"
	                id="keyword"
	                v-model="searchInfo.searchValue"
	                v-validate="{ required: searchInfo.searchColId !== 'ALL' && !searchInfo.searchValue
	                            ,min:2
	                            ,isNoEmojiChar: searchInfo.searchValue }"
	                data-vv-as="검색어 "
	                :class="{'input': true, 'is-invalid': errors.has('searchValue')}"
	            >
	            <span v-show="errors.has('searchValue')">{{ errors.first('searchValue') }}</span>
            </div>
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- search_table -->

	<div class="con_tit">
	<h3>샘플 목록</h3>
	<p class="num">[총 {{ totalRows }} 건]</p>
	</div>


    <div class="form_table list">
    <table>
    <colgroup>
    <col class="col-chk">
    <col style="width:20%">
    <col style="width:10%">
    <col style="width:30%">
    <col style="width:40%">
    </colgroup>
    <orderable-thead
        :columns="columns"
        :searchInfo="searchInfo"
        :totalRows="totalRows"
        :clickHeaderFunction="$getSamples"
        :handleCheckAllDataList="sampleList"
        ref="orderableThead"
    />
   
    
    <tbody v-if="sampleList.length > 0">
        <tr v-for="(sample, index) in sampleList" track-by="index" :key="index"
          :class="{ selectedRow : !!sample.isSelected}"
          @click="$clickRowsColId($event, index)"
        >	
        	<td>
                <b-form-checkbox 
                    v-model="sample.isSelected"
                ></b-form-checkbox>
            </td>
            <td class="">{{ sample.testId }}</td>
            <td class="">{{ sample.expRnk }}</td>
            <td class="text-left">{{ sample.testNm }}</td>
            <td class="text-left">{{ sample.testConts }}</td>
        </tr>
    </tbody>
    <tbody v-else>
        <tr>
            <td colspan="100%" class="no-result">
                <template>조회내역이 없습니다.</template>
                <div class="spinner" v-if="!!isShowSpinner">
                    <span role="status" class="spinner-border text-light"><span class="sr-only">Spinning</span></span>
                </div>
            </td>
        </tr>
    </tbody>
    </table>
    </div>
    
    
    <div class="float-right" v-if="totalRows > 9">
        <b-pagination 
            size="sm"
            v-model="searchInfo.page"
            :per-page="searchInfo.size"
            :total-rows="totalRows"
            limit="10"
            @input="$getSamples()"
            first-text="<<"
            prev-text="<"
            next-text=">"
            last-text=">>"
        >
        </b-pagination>
    </div>



	<div class="con_tit">
	<h3>샘플 정보</h3>
	<div class="btn">
	    <button class="s_btn" @click.prevent="$clearInputForm">초기화</button>
	    <button class="s_btn" @click.prevent="$beforeSave">저장</button>
	</div>
	</div>


	<div class="form_table">
    <table>
        <colgroup>
        <col style="width:100px;">
        <col style="width:auto;">
        <col style="width:100px;">
        <col style="width:auto;">
        </colgroup>
        <tbody>
            <tr>
            	<th class="e">작성자</th>
                <td>
                    <div class="input-container">
                        <input type="text"
                            name="testId"
                            v-validate="'required'"
                            v-model.trim="sampleMgmt.testId"
                            maxlength="20" 
                            class="form-control w-wbtn150-calc input"
                            data-vv-as="작성자"
                        >
                    </div>
                </td>
            	<th class="e">우선순위</th>
                <td>
                    <div class="input-container">
                        <input type="text" class="form-control expRnk w-auto min-150px input" maxlength="2"
                            name="expRnk"
                            v-model.number.trim="sampleMgmt.expRnk"
                            v-validate="'required|numeric|max:2'"
                            data-vv-as="우선순위 "
                            @keyup ="$inputNumberOnlyFilter"
                            @focusout ="$inputNumberOnlyFilter"
                        >
                    </div>
                </td>
            </tr>
            <tr>
                <th class="e">제목</th>
                <td colspan="3">
                    <div class="input-container">
                        <input type="text"
                            name="testNm"
                            v-validate="'required'"
                            v-model.trim="sampleMgmt.testNm"
                            class="form-control w-wbtn150-calc input"
                        >
                    </div>
                </td>
            </tr>
            <tr>
                <th class="e">내용</th>
                <td colspan="3">
                    <b-form-textarea class="text-left select"
                        rows="5"
                        max-rows="8"
                        name="testConts"
                        v-validate="'required'"
                        v-model="sampleMgmt.testConts"                                    
                        :maxlength="200"
                    >
                    </b-form-textarea>
                </td>
            </tr>
        </tbody>
    </table>
    </div>


</div>
</template>



<script>
import Vue from 'vue'
import commonUtils from '@/plugins/commonUtils'
import commonFilters from '@/plugins/commonFilters'
import constant from '@/plugins/constant'

import OrderableThead from '@/components/common/OrderableThead'
import PageTitle from '@/components/common/PageTitle'

export default {
    name: 'sampleManage',
    metaInfo: {
        title: '샘플 관리'
    },

    props : {
    },

    components: {
    	'orderable-thead' : OrderableThead,
    	'page-title' : PageTitle
    },

    data() {
        return {
            searchInfo : {
                searchColId: 'ALL',
                searchValue: '',
                orderColId: '',
                orderType: 'DESC',
                page: 1,
                size: 10
            },
            
			chkAll: false,
			checkedList : [],

            columns : [
            	{ colId : 'chk', colName : '', notOrder : true, fixedOrder : true }
                ,{ colId : 'testId', colName : '작성자', fixedOrder : true }
                ,{ colId : 'expRnk', colName : '우선순위' }
                ,{ colId : 'testNm', colName : '제목' }
                ,{ colId : 'testConts', colName : '내용' }
            ],
            sampleList : [],
            totalRows: 0,
            isShowSpinner: false,
            
            sampleMgmt: {
                testId: null
                ,testNm: null
                ,testConts: null
                ,expRnk : null
                ,oldTestId: null
            },
            defaultSampleMgmt : {},
            
            isModeType : false
        }
    },

    mounted: function mounted() {
    	this.defaultSampleMgmt = Object.assign({}, this.sampleMgmt);
    	this.$getSamples();
    },

    methods: {
    	$inputNumberOnlyFilter : commonFilters.$inputNumberOnlyFilter,
    	
    	$changeSearchColId : function $changeSearchColId () {
            this.searchInfo.searchValue = ''; 
        },
        
    	$clickRowsColId : function $clickRowsColId (event, nIdx) {
            if(event.target.cellIndex > 0) {
	            this.sampleMgmt.testId = this.sampleList[nIdx].testId;
	            this.sampleMgmt.oldTestId = this.sampleList[nIdx].testId;
	            this.sampleMgmt.testNm = this.sampleList[nIdx].testNm;
	            this.sampleMgmt.testConts = this.sampleList[nIdx].testConts;
	            this.sampleMgmt.expRnk = this.sampleList[nIdx].expRnk;
	            
	            this.isModeType = true;
            }
        },
        
        $submitSearch : function $submitSearch () {
        	const _this = this;
            _this.$validator.validateAll().then((isValid) => {
                if(isValid){
	                    _this.$getSamples();
                }
            });
        },

        $getSamples : function $getSamples () {
            const _this = this;
            _this.isShowSpinner = true;
 
            const url = constant.boardFoHost + '/sample/v1.0.0/samples';
            
            const config = {
                params : _this.searchInfo
            }
            
            this.$axios.get(url, config).then( response => {
                if(!!response.data && !!response.data.data){
                	const result = response.data.data;
                    _this.$afterGetSamples(result);
                }
                
            }).catch( error => {
                commonUtils.$alertUncatchedError(error);
            });
        },
        
        $afterGetSamples : function $afterGetSamples(result){
            const list = result.list;
            for(let sample of list){
                sample.isSelected = false;
            }
            this.sampleList = list

            this.totalRows = result.totalRows;
            //this.totalRows = result.length;
            this.isShowSpinner = false;
            this.chkAll = false;

            const orderableThead = this.$refs['orderableThead'];
            orderableThead.$resetChkAll();
        },
        
        $clickColHeader : function $clickColHeader (column) {
            if(!!column.notOrder){
                return;
            } else {
                if(column.colId === this.searchInfo.orderColId){
                    this.searchInfo.orderType = this.searchInfo.orderType === 'ASC' ? 'DESC' : 'ASC'
                } else {
                    this.searchInfo.orderType = 'DESC';
                }
                this.searchInfo.orderColId = column.colId;
                this.$getSamples();
            }
        },
        
        
        $initSampleMgmt : function  $initSampleMgmt () {
	        this.sampleMgmt = Object.assign({}, this.defaultSampleMgmt);
	        this.isModeType = false;
        },
        
        $clearInputForm : function  $clearInputForm () {
            const _this = this;
	        if(commonUtils.$confirm('초기화 하시겠습니까?')){
		        this.$initSampleMgmt();
	        }
        },
        
        $beforeSave : function  $beforeSave () {
            const _this = this;
            _this.$validator.validateAll().then((isValid) => {
                if(isValid){
			        if(commonUtils.$confirm('저장하시겠습니까?')){
			            _this.$executeSave();
			        }
		        } else {
                    commonUtils.$alertValidationError(_this.$validator);
                }
            });
        },
        $executeSave : function $executeSave () {
            const url = constant.boardFoHost + '/sample';
            const payload = this.sampleMgmt;
            console.log(!!this.isModeType);
			if(!!this.isModeType){
	            this.$axios.put(url, payload).then( response => {
	                if(!!response && response.status === 200){
	                    commonUtils.$alert('저장에 성공하였습니다.');
	                    this.$getSamples();
	                }
	            }).catch( error => {
	                commonUtils.$alertUncatchedError(error);
	            });
			} else{
				this.$axios.post(url, payload).then( response => {
	                if(!!response && response.status === 200){
	                    commonUtils.$alert('저장에 성공하였습니다.');
	                    this.$initSampleMgmt();
	                    this.$getSamples();
	                }
	            }).catch( error => {
	            console.log(error);
	                commonUtils.$alertUncatchedError(error);
	            });
			}
        }
    }
}
</script>
