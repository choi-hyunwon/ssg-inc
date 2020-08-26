<template>
<div>
    <div class="page_tit">
        <h2>상품 관리</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>상품 관리</li>
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
                    <th>상품명</th>
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
        <h3>상품 목록</h3>
        <p class="num">[총 0 건]</p>
    </div>

    <div class="form_table list">
        <table>
            <colgroup>
                <col style="width: 50px;" />
                <col style="width: auto;" />
                <col style="width: 200px;" />
                <col style="width: 200px;" />
                <col style="width: 200px;" />
                <col style="width: 200px;" />
            </colgroup>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>브랜드</th>
                    <th>노출여부</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>28</td>
                    <td>모카 프라푸치노</td>
                    <td>7,000원</td>
                    <td>스따벅수</td>
                    <td>미노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>빅버거</td>
                    <td>7,000원</td>
                    <td>노브랜드 버거</td>
                    <td>미노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>7월호</td>
                    <td>7,000원</td>
                    <td>맥심</td>
                    <td>미노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>수퍼스타</td>
                    <td>7,000원</td>
                    <td>아디다스</td>
                    <td>노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>와우</td>
                    <td>7,000원</td>
                    <td>블리쟈드</td>
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
        <h3>상품 상세</h3>
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
                        <col style="width: 150px;" />
                        <col style="width: auto;" />
                    </colgroup>

                    <tbody>
                        <tr>
                            <th class="e">상품명</th>
                            <td><input type="text" :value= tab.content /></td>
                        </tr>

                        <tr>
                            <th>등록일</th>
                            <td>2020-05-23 12:34:11</td>
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
                <col style="width: 150px;" />
                <col style="width: auto;" />
                <col style="width: 150px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th class="e">가격</th>
                    <td class="flex alignCenter"><input class="width100" type="text" /><label>원</label></td>
                    <th>브랜드</th>
                    <td>
						<select>
							<option>스타벅스</option>
						</select>
					</td>
                </tr>

				<tr>
                    <th class="e">이미지</th>
                    <td colspan="3">
                        <input type="file" /><button class="s_btn">파일검색</button><button class="s_btn">파일삭제</button>
                    </td>
                </tr>

                <tr>
                    <th>노출 여부</th>
                    <td colspan="3">
                        <select>
                            <option value>노출</option>
                            <option value>미노출</option>
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
                    { id: 0, title: '한국어', content: '모카 프라프치노' },
                    { id: 1, title: '영어', content: 'Mocha Frappuccino' },
                    { id: 2, title: '일본어', content: 'モカフラペチーノ' },
                    { id: 3, title: '중국어', content: '摩卡星冰乐' }
                ]
            }
        },

        beforeMount: function beforeMount() {},

        mounted: function mounted() {},

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
            }
        }
    }
</script>