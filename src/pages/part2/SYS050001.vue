<template>
<div>
    <div class="page_tit">
        <h2>브랜드 관리</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>브랜드관리</li>
        </ul>
    </div>

    <div class="comm_btn">
        <button>동기화</button>
        <button>조회</button>
        <button>저장</button>
    </div>

    <div class="search_table">
        <table>
            <colgroup>
                <col style="width:100px" />
                <col style="width:auto" />
                <col style="width:100px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
                <tr>
                    <th>브랜드명</th>
                    <td>
                        <input type="text" />
                    </td>
                    <th>노출 여부</th>
                    <td>
                        <select>
                            <option value>전체</option>
                            <option value>노출</option>
                            <option value>미노출</option>
                        </select>
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
        <h3>브랜드 목록</h3>
        <p class="num">[총 0 건]</p>
    </div>

    <div class="form_table list">
        <table>
            <colgroup>
                <col style="width: 50px;">
                <col style="width: auto;">
                <col style="width: 200px;">
                <col style="width: 200px;">
                <col style="width: 200px;">
                <col style="width: 200px;">
            </colgroup>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>브랜드명</th>
                    <th>론칭 일자</th>
                    <th>SNS 사용 여부</th>
                    <th>노출 여부</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
				<tr>
					<td>29</td>
					<td>스무디킹</td>
					<td>-</td>
					<td>미사용</td>
					<td>미노출</td>
					<td>2020-07-01 11:23:23</td>
				</tr>
				<tr>
					<td>28</td>
					<td>올반</td>
					<td>-</td>
					<td>미사용</td>
					<td>미노출</td>
					<td>2020-07-01 11:23:23</td>
				</tr>
				<tr>
					<td>27</td>
					<td>보노보노</td>
					<td>-</td>
					<td>미사용</td>
					<td>미노출</td>
					<td>2020-07-01 11:23:23</td>
				</tr>
				<tr>
					<td>26</td>
					<td>노브랜드</td>
					<td>-</td>
					<td>미사용</td>
					<td>미노출</td>
					<td>2020-07-01 11:23:23</td>
				</tr>
            </tbody>
        </table>
    </div>

	<div class="pagingList">
		<a class="first">&lt;&lt;</a>
		<a class="prev">&lt;</a>
		<a>1</a>
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
        <h3>브랜드 상세</h3>
    </div>

    <v-tabs v-model="activeTab">
        <ul class="formTabs">
            <li @click="$setTabs(tab.id)" v-for="tab of tabs" :key="tab.id" :class="{'on' : tab.id === activeTab}">
                <v-tab>{{ tab.title}}</v-tab>
            </li>
        </ul>

        <v-tab-item v-for="tab of tabs" :key="tab.id" >
            <div class="form_table">
            <table>
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: auto;">
                    <col style="width: 150px;">
                    <col style="width: auto;">
                </colgroup>

                <tbody>
                    <tr>
                        <th>브랜드명</th>
                        <td colspan="3">{{tab.content}}</td>
                    </tr>
                    <tr>
                        <th class="e">요약소개</th>
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
                        <th class="e">상세내용</th>
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
                        <td>2002-07-01 11:23:12</td>
                        <th>수정일</th>
                        <td>2002-07-01 11:23:12</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </v-tab-item>
    </v-tabs>

    <div class="con_tit">
        <h3>공통 정보 관리</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width: 150px;">
                <col style="width: auto;">
                <col style="width: 150px;">
                <col style="width: auto;">
            </colgroup>

            <tbody>
                <tr>
                    <th>SNS 사용여부</th>
                    <td colspan="3">
                        <select>
                            <option value="">미사용</option>
                            <option value="">사용</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <th>SNS 채널 URL</th>
                    <td colspan="3">
                        <ul class="formList">
                            <li class="disabled"><label>트위터</label><input type="text" disabled /></li>
                            <li class="disabled"><label>인스타그램</label><input type="text" disabled /></li>
                            <li class="disabled"><label>페이스북</label><input type="text" disabled /></li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <th class="e">로고 이미지</th>
                    <td colspan="3">
                        <input type="file" /><button class="s_btn">파일검색</button><button class="s_btn">파일삭제</button><img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <th>론칭 일자</th>
                    <td class="flex alignCenter"><input type="text" /><label>년</label>
                        <input type="text" /><label>월</label>
                    </td>
                    <th>노출 여부</th>
                    <td>
                        <select>
                            <option value="">미노출</option>
                            <option value="">노출</option>
                        </select>
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

    watch: {
        '$route.path': function () {
            this.activeTab = 0
        }
    },

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

            editorLimit: 50,

            activeTab: 0,
            tabs: [
                { id: 0, title: '한국어', content: '스타벅스' },
                { id: 1, title: '영어', content: 'starbucks' },
                { id: 2, title: '일본어', content: 'スターバックス' },
                { id: 3, title: '중국어', content: '星巴克' }
            ]
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
        },

        $setTabs: function $setTabs (activeTab) {
            this.activeTab = activeTab
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
