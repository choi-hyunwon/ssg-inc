<!--화면 레이아웃 템플릿 영역 -->
<template>
    <div>
    	<!-- Page 타이틀 영역    -->
		<page-title />
		
		<div class="comm_btn">
			<button class="btn btn-primary" @click.prevent="$beforeSave">저장</button>
		</div>
		
		<div class="con_tit">
			<h3>샘플 Editor</h3>
		</div>
		
		<div class="form_table">
		    <table>
		        <tbody>
		            <tr>
		                <td>
		                    <div class="example">
								<quill-editor
									ref="myQuillEditor"
									:options="editorOption"
									name="testConts"
									v-validate="'required'"
									v-model="sampleEditor.testConts"
									data-vv-as="내용"
				  					@blur="$onEditorBlur($event)"
									@focus="$onEditorFocus($event)"
									@ready="$onEditorReady($event)"
									@change="$onEditorChange($event)"
									class="editor text-left"
									:class="{'select': true, 'is-invalid': errors.has('testConts')}"
									>
								</quill-editor>
							</div>
							<div class="inp_tip">
							<span v-show="errors.has('testConts')" class="help is-invalid">{{ errors.first('testConts') }}</span>
							</div>
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

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import Quill from 'quill'
import {quillEditor} from 'vue-quill-editor'

import { ImageDrop } from 'quill-image-drop-module'
Quill.register('modules/imageDrop', ImageDrop)

import PageTitle from '@/components/common/PageTitle'

export default {
    name: 'sampleWrite',
    metaInfo: {
        title: '샘플 Editor'
    },

    props : {
    },

    components: {
    	quillEditor,
    	'page-title' : PageTitle
    },

    watch : {
    },

    data() {
        return {
            sampleEditor: {
                testConts: null
            },
            editorOption: {
		        modules: {
			        toolbar: {
			        	container : [
					        [{ 'size': ['small', false, 'large'] }],
					        ['bold', 'italic', 'underline'],
					        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
					        ['image'],
				        ],
				        handlers: {
				            // image: this.$uploadFunction
			            } 
			        },
			        history: {
				        delay: 1000,
				        maxStack: 50,
				        userOnly: false
			        },
			        imageDrop: true
		        },
		        placeholder:'내용을 입력하세요.'
	        },
	        
	        editorLimit: 50
        }
    },
    
	beforeMount : function beforeMount(){
    },
    
    mounted: function mounted() {
    	this.quillEditor = this.$refs.myQuillEditor.quill;
    },

    methods: {
    	$onEditorBlur : function  $onEditorBlur (quill) {
			console.log('editor blur!', quill)
		},
    	$onEditorFocus : function  $onEditorFocus (quill) {
			console.log('editor focus!', quill)
		},
    	$onEditorReady : function  $onEditorReady (quill) {
		},
    	$onEditorChange : function  $onEditorChange ({ quill, html, text }) {
			if (this.quillEditor.getLength() > this.editorLimit) {
				this.quillEditor.deleteText(this.editorLimit, this.quillEditor.getLength());
			}
		},
		
		$uploadFunction : function  $uploadFunction (e) {
             const input = document.createElement('input');
			 input.setAttribute('type', 'file');
			 input.setAttribute('accept', 'image/*');
			 input.click();
			
			 input.onchange = async () => {
			   	const file = input.files[0];
			   	const formData = new FormData();
			   	formData.append('image', file);
			
			   	//const range = this.quillEditor.getSelection(true);
			   	//this.quillEditor.setSelection(range.index + 1);
			
			   	// 파일업로드
				//this.quillEditor.insertEmbed(range.index, 'image', file); //임시
			 }
         },
		
        $beforeSave : function  $beforeSave () {
            const _this = this;
            
            _this.$validator.validateAll().then((isValid) => {
                if(isValid){
                    console.log("저장");
                } else {
                    commonUtils.$alertValidationError(_this.$validator);
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    height: 20rem;
    overflow: hidden;

    .editor {
      width: 100%;
    }

    $toolbar-height: 46px;

    .editor {
      padding-bottom: $toolbar-height;
    }
  }
</style>