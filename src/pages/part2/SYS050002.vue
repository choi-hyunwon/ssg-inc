<template>
<div>
    <div class="page_tit">
        <h2>매장 관리</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>매장 관리</li>
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
                    <th>매장명</th>
                    <td>
                        <input type="text" />
                    </td>
                    <th>브랜드명</th>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <th>매장 옵션</th>
                    <td>
                        <label>
                            <input type="checkbox" />포인트적립
                        </label>
                        <label>
                            <input type="checkbox" />포인트사용
                        </label>
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
        <h3>매장 목록</h3>
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
                    <th>매장명</th>
                    <th>브랜드명</th>
                    <th>매장 옵션</th>
                    <th>주소</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>29</td>
                    <td>스타벅스 성수점</td>
                    <td>스타벅스</td>
                    <td>
                        <button type="button" class="s_btn redBtn">적립제외</button>
                        <button type="button" class="s_btn blueBtn">사용가능</button>
                    </td>
                    <td>미노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
                
				<tr>
                    <td>30</td>
                    <td>스타벅스 강남점</td>
                    <td>스타벅스</td>
                    <td>
                        <button type="button" class="s_btn blueBtn">적립가능</button>
                        <button type="button" class="s_btn redBtn">사용제외</button>
                    </td>
                    <td>노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
				
				<tr>
                    <td>31</td>
                    <td>아디다스 성수점</td>
                    <td>스타벅스</td>
                    <td>
                        <button type="button" class="s_btn redBtn">적립제외</button>
                        <button type="button" class="s_btn redBtn">사용제외</button>
                    </td>
                    <td>미노출</td>
                    <td>2020-07-01 11:23:23</td>
                </tr>
				
				<tr>
                    <td>32</td>
                    <td>나이키 성수점</td>
                    <td>스타벅스</td>
                    <td>
                        <button type="button" class="s_btn blueBtn">적립가능</button>
                        <button type="button" class="s_btn blueBtn">사용가능</button>
                    </td>
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

    <ul class="formTabs">
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
                <col style="width: 150px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th>매장명</th>
                    <td>스타벅스</td>
                    <th>주소</th>
                    <td>서울시 성동구 성수동2가 세림비딩</td>
                </tr>
                <tr>
                    <th class="e">이용시간</th>
                    <td colspan="3">
                        <div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}"></quill-editor>
                        </div>
                        <div class="inp_tip">
                            <span v-show="errors.has('testConts')" class="help is-invalid">{{ errors.first('testConts') }}</span>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th class="e">이용안내 및 주차안내</th>
                    <td colspan="3">
                        <div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}"></quill-editor>
                        </div>
                        <div class="inp_tip">
                            <span v-show="errors.has('testConts')" class="help is-invalid">{{ errors.first('testConts') }}</span>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th>등록일</th>
                    <td colspan="3">2002-07-01 11:23:12</td>
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
                <col style="width: 150px;" />
                <col style="width: auto;" />
                <col style="width: 150px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th>매장 전화번호</th>
                    <td>1455-2233</td>
                    <th>브랜드명</th>
                    <td>스타벅스</td>
                </tr>

                <tr>
                    <th>포인트 적립 여부</th>
                    <td>
                        <select>
							<option value="">사용</option>
							<option value="">미사용</option>
						</select>
                    </td>
                    <th>포인트 사용 여부</th>
                    <td>
                        <select>
							<option value="">사용</option>
							<option value="">미사용</option>
						</select>
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
import Vue from "vue";
import commonUtils from "@/plugins/commonUtils";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import Quill from "quill";
import {
    quillEditor
} from "vue-quill-editor";

import {
    ImageDrop
} from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);

import PageTitle from "@/components/common/PageTitle";

export default {
    name: "sampleWrite",
    metaInfo: {
        title: "샘플 Editor",
    },

    props: {},

    components: {
        quillEditor,
        "page-title": PageTitle,
    },

    watch: {},

    data() {
        return {
            sampleEditor: {
                testConts: null,
            },
            editorOption: {
                modules: {
                    toolbar: {
                        container: [
                            [{
                                size: ["small", false, "large"],
                            }, ],
                            ["bold", "italic", "underline"],
                            [{
                                    list: "ordered",
                                },
                                {
                                    list: "bullet",
                                },
                            ],
                            ["image"],
                        ],
                        handlers: {
                            // image: this.$uploadFunction
                        },
                    },
                    history: {
                        delay: 1000,
                        maxStack: 50,
                        userOnly: false,
                    },
                    imageDrop: true,
                },
                placeholder: "내용을 입력하세요.",
            },

            editorLimit: 50,
        };
    },

    beforeMount: function beforeMount() {},

    mounted: function mounted() {
        this.quillEditor = this.$refs.myQuillEditor.quill;
    },

    methods: {
        $onEditorBlur: function $onEditorBlur(quill) {
            console.log("editor blur!", quill);
        },
        $onEditorFocus: function $onEditorFocus(quill) {
            console.log("editor focus!", quill);
        },
        $onEditorReady: function $onEditorReady(quill) {},
        $onEditorChange: function $onEditorChange({
            quill,
            html,
            text
        }) {
            if (this.quillEditor.getLength() > this.editorLimit) {
                this.quillEditor.deleteText(
                    this.editorLimit,
                    this.quillEditor.getLength()
                );
            }
        },

        $uploadFunction: function $uploadFunction(e) {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
                const file = input.files[0];
                const formData = new FormData();
                formData.append("image", file);

                //const range = this.quillEditor.getSelection(true);
                //this.quillEditor.setSelection(range.index + 1);

                // 파일업로드
                //this.quillEditor.insertEmbed(range.index, 'image', file); //임시
            };
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
    },
};
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
