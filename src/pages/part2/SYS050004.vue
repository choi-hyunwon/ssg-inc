<template>
<div>
    <div class="page_tit">
        <h2>멤버십 소개</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>멤버십 관리</li>
        </ul>
    </div>

    <div class="comm_btn">
        <button>초기화</button>
        <button>저장</button>
    </div>

    <v-tabs>
        <ul class="formTabs withLine">
            <li @click="$setTabs(tab.id)" v-for="tab of tabs" :key="tab.id" :class="{'on' : tab.id === activeTab}">
                <v-tab>{{ tab.title}}</v-tab>
            </li>
        </ul>
    </v-tabs>

    <div class="con_tit">
        <h3>상단 멤버십 소개</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:100px" />
                <col style="width:100px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
                <tr>
                    <th rowspan="2" class="e">이미지</th>
                    <th>PC</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 18Mb</span>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <th>Mobile</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 27Mb</span>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="con_tit">
        <h3>혜택 소개</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:150px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
                <tr>
                    <th class="e">이미지</th>
                    <td>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <th class="e">제목</th>
                    <td>
                        <input type="text" />
                    </td>
                </tr>

                <tr>
                    <th class="e">소개글</th>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="con_tit">
        <h3>혜택 상세</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width: 100px;" />
                <col style="width: 100px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th class="e" rowspan="3">혜택 1</th>
                    <td class="e center">이미지</td>
                    <td>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택명</td>
                    <td>
                        <span class="tdInfoSpan">최대 10자</span>
                        <input type="text" class="width500" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택내용</td>
                    <td>
                        <div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}"></quill-editor>
                        </div>
                        <div class="inp_tip">
                            <span v-show="errors.has('testConts')" class="help is-invalid">{{ errors.first('testConts') }}</span>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width: 100px;" />
                <col style="width: 100px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th class="e" rowspan="3">혜택 2</th>
                    <td class="e center">이미지</td>
                    <td>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택명</td>
                    <td>
                        <span class="tdInfoSpan">최대 10자</span>
                        <input type="text" class="width500" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택내용</td>
                    <td>
                        <div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}"></quill-editor>
                        </div>
                        <div class="inp_tip">
                            <span v-show="errors.has('testConts')" class="help is-invalid">{{ errors.first('testConts') }}</span>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width: 100px;" />
                <col style="width: 100px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th class="e" rowspan="3">혜택 3</th>
                    <td class="e center">이미지</td>
                    <td>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택명</td>
                    <td>
                        <span class="tdInfoSpan">최대 10자</span>
                        <input type="text" class="width500" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택내용</td>
                    <td>
                        <div class="example">
                            <quill-editor ref="myQuillEditor" :options="editorOption" name="testConts" v-validate="'required'" v-model="sampleEditor.testConts" data-vv-as="내용" @blur="$onEditorBlur($event)" @focus="$onEditorFocus($event)" @ready="$onEditorReady($event)" @change="$onEditorChange($event)" class="editor text-left" :class="{'select': true, 'is-invalid': errors.has('testConts')}"></quill-editor>
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
        <h3>혜택 상세</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width: 100px;" />
                <col style="width: 100px;" />
                <col style="width: auto;" />
            </colgroup>

            <tbody>
                <tr>
                    <th class="e center" colspan="2">이미지</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 18Mb</span>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />

                    </td>
                </tr>

                <tr>
                    <th class="e center" rowspan="2">앱 URL</th>
                    <th class="center">
                        Google Play
                    </th>
                    <td>
                        <input class="width500" type="text" />
                    </td>
                </tr>

                <tr>
                    <th class="center">App Store</th>
                    <td>
                        <input class="width500" type="text" />
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

    watch: {
        '$route.path': function () {
            this.activeTab = 0
        }
    },

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

            activeTab: 0,
            tabs: [
                { id: 0, title: '한국어', content: '' },
                { id: 1, title: '영어', content: '' },
                { id: 2, title: '일본어', content: '' },
                { id: 3, title: '중국어', content: '' }
            ]
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
