<template>
<div>
    <div class="page_tit">
        <h2>뉴스 관리</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>컨텐츠 관리</li>
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
                    <th>노출 위치</th>
                    <td>
                        <label>
                            <input type="checkbox" />메인
                        </label>
                        <label>
                            <input type="checkbox" />브랜드
                        </label>
                    </td>
                </tr>

                <tr>
                    <th>기간</th>
                    <td class="flex alignCenter">
                        <input type="date" />&nbsp;~&nbsp;
                        <input type="date" />
                    </td>
                    <th>노출여부</th>
                    <td>
                        <select>
                            <option>전체</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="con_tit">
        <select class="floatRight">
            <option>5개씩 보기</option>
        </select>
        <h3>뉴스 목록</h3>
        <p class="num">[총 30 건]</p>
    </div>

    <div class="form_table list">
        <table>
            <colgroup>
                <col style="width:50px" />
                <col style="width:50px" />
                <col style="width:auto" />
                <col style="width:80px" />
                <col style="width:80px" />
                <col style="width:80px" />
                <col style="width:150px" />
            </colgroup>

            <thead>
                <tr>
                    <th></th>
                    <th>No</th>
                    <th>제목</th>
                    <th>노출 위치</th>
                    <th>관련 브랜드</th>
                    <th>노출 여부</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td class="left">일회용컵 없는 날 캠페인</td>
                    <td><a>노출 위치</a></td>
                    <td>아디다스</td>
                    <td>미노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>99</td>
                    <td class="left">일회용컵 없는 날 캠페인</td>
                    <td><a>노출 위치</a></td>
                    <td>아디다스</td>
                    <td>미노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>98</td>
                    <td class="left">일회용컵 없는 날 캠페인</td>
                    <td><a>노출 위치</a></td>
                    <td>아디다스</td>
                    <td>미노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>97</td>
                    <td class="left">일회용컵 없는 날 캠페인</td>
                    <td><a>노출 위치</a></td>
                    <td>아디다스</td>
                    <td>미노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>96</td>
                    <td class="left">일회용컵 없는 날 캠페인</td>
                    <td><a>노출 위치</a></td>
                    <td>아디다스</td>
                    <td>미노출</td>
                    <td>2020-09-21 11;32;34</td>
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
        <h3>뉴스 상세</h3>
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
                <col style="width: 150px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th class="e">제목</th>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}">
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

	<div class="con_tit">
        <h3>공통 정보 관리</h3>
    </div>

	<div class="form_table">
		<table>
			<colgroup>
				<col style="width: 150px" />
				<col style="width: auto" />
			</colgroup>

			<tbody>
				<tr>
					<th class="e">노출 위치</th>
					<td>
						<label><input type="checkbox" />메인</label><label><input type="checkbox" />브랜드</label><select><option>브랜드 선택</option></select>
					</td>
				</tr>

				<tr>
					<th>노출 여부</th>
					<td><select>
							<option>미노출</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <!-- <div class="con_tit">
        <h3>배너 상세</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:100px" />
                <col style="width:100px" />
                <col style="width:auto" />
                <col style="width:100px" />
                <col style="width:auto" />
            </colgroup>

            <tbody>

                <tr>
                    <th colspan="2" class="e">배너명</th>
                    <td colspan="3">
                        <span class="tdInfoSpan">* 입력하신 배너명은 화면에 노출되지 않습니다.</span>
                        <input type="text" class="width500" />
                    </td>
                </tr>

                <tr>
                    <th rowspan="2" class="e">이미지</th>
                    <th>PC</th>
                    <td colspan="3">
                        <span class="tdInfoSpan">000 x 0.00Kb</span>
                        <input type="file" class="width500" placeholder="파일을 선택하세요." />
                        <button type="button" class="s_btn">파일 검색</button>
                        <button type="button" class="s_btn">파일 삭제</button>
                    </td>
                </tr>

                <tr>
                    <th>Mobile</th>
                    <td colspan="3">
                        <span class="tdInfoSpan">000 x 0.00Kb</span>
                        <input type="file" class="width500" placeholder="파일을 선택하세요." />
                        <button type="button" class="s_btn">파일 검색</button>
                        <button type="button" class="s_btn">파일 삭제</button>
                    </td>
                </tr>

                <tr>
                    <th class="e" colspan="2">URL</th>
                    <td colspan="3">
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <th colspan="2">노출여부</th>
                    <td colspan="3">
                        <select>
                            <option>미노출</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <th colspan="2">등록일</th>
                    <td>2020-01-21 12:23:34</td>
                    <th>수정일</th>
                    <td>2020-03-11 12:23:04</td>
                </tr>

            </tbody>
    </table>-->
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