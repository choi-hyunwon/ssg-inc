<template>
    <b-modal
        class="modal-top vps-default"
        ref="modal"
        size="xl"
        title="샘플 검색"
        ok-only ok-variant="secondary"
        ok-title="닫기"
        @hidden="$hiddenModal"
        no-close-on-backdrop
    >






                <b-form id="search-form" autocomplete="off" class="form-inline" role="form" novalidate="novalidate" @submit.prevent="$submitSearch">
                
                
					<div class="comm_btn">
						<button type="submit">조회</button>
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



                </b-form>



				<div class="con_tit">
				<h3>샘플 목록</h3>
				<p class="num">[총 {{ totalRows }} 건]</p>
				</div>



            <div class="form_table">
            <table>
            <colgroup>
            <col style="width:20%">
            <col style="width:10%">
            <col style="width:30%">
            <col style="width:40%">
            </colgroup>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index">
                        {{ column.colName }}</th>
                </tr>
            </thead>
            <tbody v-if="sampleList.length > 0">
                <tr v-for="(sample, index) in sampleList" track-by="index" :key="index"
                  :class="{ selectedRow : !!sample.isSelected}"
                  @click="$clickRowsColId($event, index)"
                >	
                    <td class="">{{ sample.testId }}</td>
                    <td class="">{{ sample.expRnk }}</td>
                    <td class="text-left">{{ sample.testNm }}</td>
                    <td class="text-left" v-html="sample.testConts"></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                <td colspan="100%" class="center">
                    <template>조회내역이 없습니다.</template>
                    <div class="spinner" v-if="!!isShowSpinner">
                        <span role="status" class="spinner-border text-light"><span class="sr-only">Spinning</span></span>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
            </div>


            <div class="btn-pagination" v-if="sampleList.length > 0">
                <div class="float-right" v-if="totalRows > 9">
                    <b-pagination
                        size="sm"
                        v-model="searchInfo.page"
                        :per-page="searchInfo.size"
                        :total-rows="totalRows"
                        limit="10"
                        @input="$getManagers()"
                        first-text="<<"
                        prev-text="<"
                        next-text=">"
                        last-text=">>"
                    >
                    </b-pagination>
                </div>
            </div>



    </b-modal>
</template>

<script>
import Vue from 'vue'
import commonUtils from '@/plugins/commonUtils'
import commonFilters from '@/plugins/commonFilters'
import constant from '@/plugins/constant'

export default {
    name: 'SampleSearch',
    metaInfo: {
        title: '샘플 검색 팝업'
    },
    props : {
        submit : {
            type: Function,
            required: false
        },
        cancel : {
            type: Function,
            required: false
        }
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
                { colId : 'testId', colName : '작성자', fixedOrder : true }
                ,{ colId : 'expRnk', colName : '우선순위' }
                ,{ colId : 'testNm', colName : '제목' }
                ,{ colId : 'testConts', colName : '내용' }
            ],
            sampleList : [],
            totalRows: 0,
            isShowSpinner: false,
            
            defaultSearchInfo: {}
        }
    },

    mounted: function mounted() {
    	this.defaultSearchInfo = Object.assign({}, this.searchInfo);
    	this.sampleList = [];
    },

    methods: {
    	$initSearchInfo : function $initSearchInfo (){
            this.searchInfo = Object.assign({}, this.defaultSearchInfo);
            this.sampleList = [];
        },
        
    	$closeModal : function $closeModal (){
            const modal = this.$refs['modal'];
            modal.hide();
        },

        $hiddenModal : function $hiddenModal (bvModalEvt) {
            if(!!this.cancel && typeof this.cancel === 'function'){
                this.cancel();
            }
            this.$initSearchInfo();
        },
        
        $show : function $show () {
            const modal = this.$refs['modal'];
            modal.show();
        },

        $changeSearchColId : function $changeSearchColId () {
            this.searchInfo.searchValue = ''; 
        },
        
    	$clickRowsColId : function $clickRowsColId (event, nIdx) {
            if(!!this.submit && typeof this.submit === 'function'){
                const result = {
                        samplePopParam : {
                             testId : this.sampleList[nIdx].testId,
                             testNm : this.sampleList[nIdx].testNm
                        }
                }
                this.submit(result);
            } else {
                commonUtils.$log('submit function is invalid.');
            }
            this.$closeModal();
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
        }
    }
}
</script>
