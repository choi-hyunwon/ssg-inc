<!--화면 레이아웃 템플릿 영역 -->
<template>
	<div>
		<!-- Page 타이틀 영역    -->
		<page-title />
		
		<div class="comm_btn">
			<button class="btn btn-secondary" @click.prevent="$clickSampleSearchModal">팝업</button>
			<button class="btn btn-dark" @click.prevent="$beforeSearch">조회</button>
			<button class="btn btn-primary" @click.prevent="$beforeSave">저장</button>
		</div>                        
		
		<div class="con_tit">
			<h3>마스터</h3>
			<div class="btn">
				<button class="s_btn icon_01" @click.prevent="$onMstGridRowAddClick">행추가</button>
				<button class="s_btn icon_02" @click.prevent="$onMstGridRowDeleteClick">행삭제</button>
			</div>
		</div>
		
		<div class="grid_edge">
			<!--
				Grid Event 목록
				@check ,@checkAll, @click, @collapse, @dbclick, @editingFinish, @editingStart, @expand
				@focusChange, @mousedown, @mouseout, @mouseover, @onGridBeforeDestroy, @onGridMounted
				@onGridUpdated, @uncheck, @uncheckAll
			-->
			<grid
				ref="mstGrid"
				:data="mstGridProps.data"
				:columns="mstGridProps.columns"
				:options="mstGridProps.options"
				@click="$onMstGridClick"
				:rowHeaders="mstGridProps.rowHeaders"
				:columnOptions="mstGridProps.columnOptions"
			></grid>
		</div>
		
		
		<div class="con_tit">
			<h3>상세</h3>
			<div class="btn">
			<button type="submit" class="s_btn icon_01" @click.prevent="$onSubGridRowAddClick">추가</button>
			<button type="submit" class="s_btn icon_02" @click.prevent="$onSubGridRowDeleteClick">삭제</button>
			</div>
		</div>
		
		<div class="grid_edge">
			<grid
				ref="subGrid"
				:data="subGridProps.data"
				:columns="subGridProps.columns"
				:options="subGridProps.options"
				:rowHeaders="subGridProps.rowHeaders"
				:columnOptions="subGridProps.columnOptions"
			></grid>
		</div>
	
		<sample-search ref="sampleSearch" :submit="$popupSampleSearchCallback" />
	</div>
</template>
<!-- //화면 레이아웃 템플릿 영역 -->

<!-- 스크립트 영역 -->
<script>
import Vue from 'vue'
import commonUtils from '@/plugins/commonUtils'
import constant from '@/plugins/constant'

import { Grid } from '@toast-ui/vue-grid'
import 'tui-grid/dist/tui-grid.css';
import customTuiGridUtils, { CustomTextEditor, CustomSelectEditor } from '@/plugins/customTuiGridUtils'

import SampleSearch from '@/pages/sample/popup/SampleSearch'
import PageTitle from '@/components/common/PageTitle'

export default {
	name: 'SampleManage.vue',
	metaInfo: {
		title: 'Toast Grid'
	},
	components: {
		grid: Grid,
		mstGrid: null,
		subGrid: null,
		'sample-search' : SampleSearch,
		'page-title' : PageTitle
	}, 
	created() {
		this.mstGridProps = {
			name: 'mstGrid',
			rowHeaders: ['checkbox', 'rowNum'],
			columns: [
				{
					header: '메시지ID',
					name: 'mssageId',
					align: 'center',
					editor: {
						type: CustomTextEditor,
						options: {
							maxLength: 30
						}
					},
					validation: {
						required: true
					}
				},
				{
					header: '사용여부',
					name: 'useYn',
					align: 'center',
					width: 250,
					formatter: 'listItemText',
					editor: {
						type: CustomSelectEditor,
						options: {
							listItems: []
						}
					},
					validation: {
						required: true
					}
				},
				{
					header: '상태',
					name: 'saveType',
					hidden: true
				}
			],
			data: []
		};
    
		this.subGridProps = {
			name: 'subGrid',
			rowHeaders: ['checkbox', 'rowNum'],
			columnOptions: {
				frozenCount: 0
			},
			columns: [
				{
					header: '메시지ID',
					name: 'mssageId',
					align: 'center',
					width: 250,
				},
				{
					header: '언어유형코드',
					name: 'langTyCode',
					align: 'center',
					width: 250,
					formatter: 'listItemText',
					editor: {
						type: CustomSelectEditor,
						options: {
							listItems: []
						}
					},
					validation: {
						required: true
					}
				},
				{
					header: '메시지',
					name: 'mssage',
					align: 'left',
					editor: {
						type: CustomTextEditor,
						options: {
							maxLength: 150
						}
					},
					validation: {
						required: true
					}
				}
			],
			data: [],
			options: { 
			  rowHeaders: ['checkbox'],
			  bodyHeight: 200
			}
		};
	},
  
	data() {
		return {
			mstList : {
				check: '',
				mssageId: '',
				useYn: '',
				saveType: 'I'
			},
			mstSelectedRow: null,
			subList : {
				mssageId: '',
				langTyCode: '',
				mssage: ''
			},
			useYnList: [],
			langTyCodeList: []
		}
	},
	
	mounted: async function mounted() {
		const commonCodes = await commonUtils.$getCommonCodes();
		commonCodes['useYn'].forEach( (x) => { this.useYnList.push( { text: x.codeNm, value: x.codeValue } ); } );
		commonCodes['langTyCode'].forEach( (x) => { this.langTyCodeList.push( { text: x.codeNm, value: x.codeValue } ); } );
		
		this.mstGridProps.columns[1].editor.options.listItems = this.useYnList;
		this.subGridProps.columns[1].editor.options.listItems = this.langTyCodeList;

		this.mstGrid = this.$refs.mstGrid;
		this.subGrid = this.$refs.subGrid;
		
		this.$getSampleMst();
	},
      
	methods: {
		/**
		 * 저장 전 유효성 체크
		 */
		$beforeSave : function $beforeSave () {
			this.$finishEdit();
			/*
			const mstRows = this.mstGrid.invoke('getModifiedRows');
			const subRows = this.subGrid.invoke('getModifiedRows');
			
			if ((mstRows.createdRows.length == 0 && mstRows.updatedRows.length == 0) &&
				(subRows.createdRows.length == 0 && subRows.updatedRows.length == 0)
			) {
				commonUtils.$alert('저장할 항목이 없습니다.');
			    return;
			}
			*/
			const isMstRows = this.mstGrid.invoke('isModified');
			const isSubRows = this.subGrid.invoke('isModified');
			
			if (!isMstRows && !isSubRows) {
				commonUtils.$alert('저장할 항목이 없습니다.');
			    return;
			}
			
			
			if(!customTuiGridUtils.$checkGridValidation(this.mstGrid)) {
				return;
			}
			
			if(!customTuiGridUtils.$checkGridValidation(this.subGrid)) {
				return;
			}
			
			if(commonUtils.$confirm('저장하시겠습니까?')){
				this.$executeSave();
			}
		},
		
		/**
		 * 저장 서비스 호출
		 */
		$executeSave : function $executeSave () {
			const _this = this;
			const url = constant.boardFoHost + '/mssage/v1.0.0/mssage-to-info';      
		  
			const payload = {
				sampleMst : customTuiGridUtils.$createArrayData(_this.mstGrid, ['I', 'U']),
				sampleSub : customTuiGridUtils.$createArrayData(_this.subGrid, ['I', 'U'])
			};
			    
			_this.$axios.post(url, payload).then( response => {
				if(!!response && response.status === 200){
					commonUtils.$alert('저장에 성공하였습니다.');
					_this.subGrid.invoke('clear');
					_this.subGrid.invoke('clearModifiedData');
					_this.$getSampleMst();
				}
			}).catch( error => {
				commonUtils.$alertUncatchedError(error);
			});
		},
		
		/**
		 * 마스터 Grid 목록 조회 서비스 호출
		 */
		$getSampleMst : function $getSampleMst () {
			const _this = this;
			const url = constant.boardFoHost + '/mssage/v1.0.0/mssages';    
			  
			this.$axios.get(url).then( response => {
				if(!!response.data && !!response.data.data){
					_this.mstSelectedRow = null;
					this.mstGrid.invoke('resetData', response.data.data);
					
					this.subGrid.invoke('clear');
					this.subGrid.invoke('clearModifiedData');
				}
			}).catch( error => {
				commonUtils.$alertUncatchedError(error);
			});
		},
		
		/**
		 * 상세 Grid 목록 조회 서비스 호출
		 */
		$getSampleSub : function $getSampleSub (msgId) {
			const _this = this;
			const url = constant.boardFoHost + '/mssage/v1.0.0/lang-mssages';
			const config = {
				params: {
					mssageId : msgId
				}
			};
			
			this.$axios.get(url, config).then( response => {
				if(!!response.data && !!response.data.data){
					this.subGrid.invoke('resetData', response.data.data);
				}
			}).catch( error => {
				commonUtils.$alertUncatchedError(error);
			});
		},
		
		/**
		 * 조회 버튼 click 이벤트
		 */
		$beforeSearch : function $beforeSearch () {
			this.$finishEdit();
			
			if(this.mstGrid.invoke('isModified') || this.subGrid.invoke('isModified')) {
				if(commonUtils.$confirm('저장하지 않은 변경사항은 유실됩니다.\r\n조회 하겠습니까?')){
					this.$getSampleMst();
				}
			} else {
				this.$getSampleMst();
			}
		},

		/**
		 * 마스터 Grid click 이벤트
		 */
		$onMstGridClick : function $onMstGridClick (ev) {
			if(ev.targetType == 'rowHeader') {
				if(ev.columnName == '_checked') { return false;return false; }	// rowHeader Checkbox 컬럼 선택시 return fasle;
			}

			if(ev.rowKey != undefined && ev.rowKey != 'undefined') {
				if(this.mstSelectedRow != ev.rowKey) {
					if(this.subGrid.invoke('isModified')) {
						if(commonUtils.$confirm('저장하지 않은 상세항목의 변경사항은 유실됩니다.\r\n마스터 선택항목을 변경하겠습니까?')){
							this.$changMstGridSelected(ev.rowKey);
						} else {
							this.mstGrid.invoke('focusAt', this.mstSelectedRow, 0, true);
						}
					} else {
						this.$changMstGridSelected(ev.rowKey);
					}
				}
			}
		},
		
		/**
		 * 마스터 Grid click 시 상세 Grid 초기화 및 목록 재조회
		 * @param : 선택한 마스터Grid rowIndex
		 */
		$changMstGridSelected : function $changMstGridSelected (rowKey) {
			this.$finishEdit();
			
			this.mstSelectedRow = rowKey;
			this.subGrid.invoke('clear');
			this.subGrid.invoke('clearModifiedData');
			
			const focusCell = this.mstGrid.invoke('getFocusedCell');

		  	const gridCellType = this.mstGrid.invoke('getValue', rowKey, 'saveType', false);
			if(gridCellType != 'I') {
				const mstSelectedValue = this.mstGrid.invoke('getValue', this.mstSelectedRow, "mssageId", true);
			  	this.$getSampleSub(mstSelectedValue);
			}
		},
		
		/**
		 * 마스터 Grid 추가버튼 click 이벤트
		 */
		$onMstGridRowAddClick : function $onMstGridRowAddClick () {
			this.$finishEdit();
			
			this.mstGrid.invoke('appendRow', this.mstList);
		},
		
		/**
		 * 마스터 Grid 삭제버튼 click 이벤트
		 */
		$onMstGridRowDeleteClick : function $onMstGridRowDeleteClick () {
			this.$finishEdit();
			
			const mstChkRows = this.mstGrid.invoke('getCheckedRows');
			
			if(mstChkRows.length < 1) {
				commonUtils.$alert('삭제할 항목이 없습니다.');
				return;
			} else {
				if(commonUtils.$confirm('선택한 항목을 삭제하시겠습니까?\r\n삭제된 정보는 복구되지 않습니다.')){
					const deleteArr = [];

					for(let mstRow of mstChkRows) {
			        	if(mstRow.saveType != "I") {
			        		deleteArr.push(mstRow);
			        	}
			        }
					
					if(deleteArr.length > 0) {
						const url = constant.boardFoHost + '/mssage/v1.0.0/mssage';      
						const payload = {
							data : deleteArr
						};
						    
						this.$axios.delete(url, payload).then( response => {
							if(!!response && response.status === 200){
								commonUtils.$alert('삭제에 성공하였습니다.');
								this.mstGrid.invoke('removeCheckedRows');
								this.mstGrid.invoke('clearModifiedData', 'DELETE');
								
								this.subGrid.invoke('clear');
								this.subGrid.invoke('clearModifiedData');
							}
						}).catch( error => {
							commonUtils.$alertUncatchedError(error);
						});
					} else {
						commonUtils.$alert('삭제에 성공하였습니다.');
						this.mstGrid.invoke('removeCheckedRows');
						this.mstGrid.invoke('clearModifiedData', 'DELETE');
						
						this.subGrid.invoke('clear');
						this.subGrid.invoke('clearModifiedData');
					}
				}
			}
		},
		
		/**
		 * 상세 Grid 추가버튼 click 이벤트
		 */
		$onSubGridRowAddClick : function $onSubGridRowAddClick () {
			this.$finishEdit();
			
			if(this.mstSelectedRow == null) {
				commonUtils.$alert('선택한 마스터 항목이 없습니다.');
				return;
			} else {
				const mstSelectedValue = this.mstGrid.invoke('getValue', this.mstSelectedRow, "mssageId", true);
				
				if(mstSelectedValue == null || mstSelectedValue == '') {
					commonUtils.$alert('마스터 항목의 메시지ID 값이 없습니다.');
					return;
				} else {
					this.subGrid.invoke('appendRow', {mssageId : mstSelectedValue, saveType:'I'});
				}
			}
		},
		
		/**
		 * 상세 Grid 삭제버튼 click 이벤트
		 */
		$onSubGridRowDeleteClick : function $onSubGridRowDeleteClick () {
			this.$finishEdit();
			
			const subChkRows = this.subGrid.invoke('getCheckedRows');
			
			if(subChkRows.length < 1) {
				commonUtils.$alert('삭제할 항목이 없습니다.');
				return;
			} else {
				if(commonUtils.$confirm('선택한 항목을 삭제하시겠습니까?\r\n삭제된 정보는 복구되지 않습니다.')){
					const deleteArr = [];
					
					for(let subRow of subChkRows) {
			        	if(subRow.saveType != "I") {
			        		deleteArr.push(subRow);
			        	}
			        }
					
					if(deleteArr.length > 0) {
						const url = constant.boardFoHost + '/mssage/v1.0.0/lang-mssage';      
						
						const payload = {
							data : deleteArr
						};
						
						this.$axios.delete(url, payload).then( response => {
							if(!!response && response.status === 200){
								commonUtils.$alert('삭제에 성공하였습니다.');
								this.subGrid.invoke('removeCheckedRows');
								this.subGrid.invoke('clearModifiedData', 'DELETE');
							}
						}).catch( error => {
							commonUtils.$alertUncatchedError(error);
						});
					} else {
						commonUtils.$alert('삭제에 성공하였습니다.');
						this.subGrid.invoke('removeCheckedRows');
						this.subGrid.invoke('clearModifiedData', 'DELETE');
					}    
				}
			}
		},
		
		$clickSampleSearchModal : function $clickSampleSearchModal () {
            const sampleSearch = this.$refs['sampleSearch'];
            sampleSearch.$show();
        },
        $popupSampleSearchCallback : function $popupSampleSearchCallback (result) {
        	console.log(result.samplePopParam);
        },
        
        $finishEdit : function $finishEdit () {
        	const mstCell = this.mstGrid.invoke( 'getFocusedCell' );
			this.mstGrid.invoke( 'finishEditing', mstCell.rowKey, mstCell.columnName );
			const subCell = this.subGrid.invoke( 'getFocusedCell' );
			this.subGrid.invoke( 'finishEditing', subCell.rowKey, subCell.columnName );
        }
	}
}
</script>
<!-- //스크립트 영역 -->
