<template>
<div>
    <div class="page_tit">
        <h2>공지사항 관리</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>서비스 관리</li>
        </ul>
    </div>

    <div class="comm_btn">
        <button type="button">조회</button>
        <button type="button">신규</button>
        <button type="button">삭제</button>
        <button type="button">저장</button>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:150px" />
                <col style="width:auto" />
                <col style="width:150px" />
                <col style="width:auto" />
            </colgroup>

            <tbody>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text" />
                    </td>
                    <th>노출 여부</th>
                    <td>
                        <select>
							<option>전체</option>
							<option>노출</option>
							<option>미노출</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <th>기간</th>
                    <td colspan="3">
                        <!-- <flat-pickr class="width300" v-model="startDate" :config="configs.start" placeholder="시작일자" name="startDate" @on-change="onStartChange"></flat-pickr> ~ <flat-pickr class="width300" v-model="endDate" :config="configs.end" placeholder="종료일자" name="endDate" @on-change="onStartChange"></flat-pickr> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="con_tit">
        <select class="floatRight">
            <option>5개씩 보기</option>
            <option>10개씩 보기</option>
            <option>20개씩 보기</option>
            <option>30개씩 보기</option>
            <option>40개씩 보기</option>
            <option>50개씩 보기</option>
        </select>
        <h3>공지사항 목록</h3>
        <p class="num">[총 30 건]</p>
    </div>

    <div class="form_table list">
        <table>
            <colgroup>
                <col style="width:50px" />
                <col style="width:50px" />
                <col style="width:auto" />
                <col style="width:100px" />
                <col style="width:150px" />
            </colgroup>

            <thead>
                <tr>
                    <th></th>
                    <th>No</th>
                    <th>제목</th>
                    <th>노출여부</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>100</td>
                    <td class="left">개인정보 처리방침 변경 안내</td>
                    <td>미노출</td>
                    <td>2020-09-21 11:32:34</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>100</td>
                    <td class="left">개인정보 처리방침 변경 안내</td>
                    <td>미노출</td>
                    <td>2020-09-21 11:32:34</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>100</td>
                    <td class="left">개인정보 처리방침 변경 안내</td>
                    <td>미노출</td>
                    <td>2020-09-21 11:32:34</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>100</td>
                    <td class="left">개인정보 처리방침 변경 안내</td>
                    <td>미노출</td>
                    <td>2020-09-21 11:32:34</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>100</td>
                    <td class="left">개인정보 처리방침 변경 안내</td>
                    <td>미노출</td>
                    <td>2020-09-21 11:32:34</td>
                </tr>

            </tbody>
        </table>
    </div>

    <div class="pagingList">
        <a class="first">&lt;&lt;</a>
        <a class="prev">&lt;</a>
        <a class="on">1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a>
        <a>6</a>
        <a>7</a>
        <a>8</a>
        <a>9</a>
        <a>10</a>
        <a class="next">&gt;</a>
        <a class="last">&gt;&gt;</a>
    </div>

    <div class="con_tit">
        <h3>공지사항 상세</h3>
    </div>

	<ul class="formTabs withLine">
        <li class="on">한국어</li>
        <li>영어</li>
        <li>일본어</li>
        <li>중국어</li>
    </ul>

	<div class="form_table">
		<table>
			<colgroup>
				<col style="width: 150px" />
				<col style="width: auto" />
			</colgroup>

			<tbody>
				<tr>
					<th class="e">제목</th>
					<td colspan="3">
						<input type="text" />
					</td>
				</tr>

				<tr>
					<th>내용</th>
					<td colspan="3">
						<div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}">
                            </quill-editor>
                        </div>
                        <div class="inp_tip">
                            <span v-show="errors.has('testConts')" class="help is-invalid">{{ errors.first('testConts') }}</span>
                        </div>
					</td>
				</tr>

				<tr>
					<th>등록일</th>
					<td>2020.10.23 22:34:12</td>
					<th>수정일</th>
					<td>2020.10.23 22:34:12</td>
				</tr>
			</tbody>
		</table>
    </div>

	<div class="con_tit">
        <h3>공통정보 관리</h3>
	</div>

	<div class="form_table">
		<table>
			<colgroup>
				<col style="width: 150px" />
				<col style="width: auto" />
			</colgroup>

			<tbody>

				<tr>
					<th>노출 여부</th>
					<td><select>
							<option>미노출</option>
							<option>노출</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</template>

<script>
import Vue from "vue";
import {
    Korean
} from "flatpickr/dist/l10n/ko";

import commonUtils from '@/plugins/commonUtils'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import Quill from 'quill'
import {
    quillEditor
} from 'vue-quill-editor'

import {
    ImageDrop
} from 'quill-image-drop-module'
Quill.register('modules/imageDrop', ImageDrop)

import PageTitle from '@/components/common/PageTitle'

export default {
    name: 'sampleWrite',
    metaInfo: {
        title: '샘플 Editor'
    },

    props: {},

    components: {
        quillEditor,
        'page-title': PageTitle
    },

    watch: {},

    data() {
        return {
            sampleEditor: {
                testConts: null
            },
            editorOption: {
                modules: {
                    toolbar: {
                        container: [
                            [{
                                'size': ['small', false, 'large']
                            }],
                            ['bold', 'italic', 'underline'],
                            [{
                                'list': 'ordered'
                            }, {
                                'list': 'bullet'
                            }],
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
                placeholder: '내용을 입력하세요.'
            },

            editorLimit: 50
        }
    },

    beforeMount: function beforeMount() {},

    mounted: function mounted() {
        this.quillEditor = this.$refs.myQuillEditor.quill;
    },

    methods: {
        $onEditorBlur: function $onEditorBlur(quill) {
            console.log('editor blur!', quill)
        },
        $onEditorFocus: function $onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        $onEditorReady: function $onEditorReady(quill) {},
        $onEditorChange: function $onEditorChange({
            quill,
            html,
            text
        }) {
            if (this.quillEditor.getLength() > this.editorLimit) {
                this.quillEditor.deleteText(this.editorLimit, this.quillEditor.getLength());
            }
        },

        $uploadFunction: function $uploadFunction(e) {
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

        $beforeSave: function $beforeSave() {
            const _this = this;

            _this.$validator.validateAll().then((isValid) => {
                if (isValid) {
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