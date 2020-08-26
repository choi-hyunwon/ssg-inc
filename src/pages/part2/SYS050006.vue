<template>
<div>
    <div class="page_tit">
        <h2>클럽 안내</h2>
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
        <h3>상단 클럽 소개</h3>
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
						<img class="thumb" src="" />
                    </td>
                </tr>

                <tr>
                    <th>Mobile</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 27Mb</span>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" src="" />
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
                    { id: 0, title: '한국어', content: '' },
                    { id: 1, title: '영어', content: '' },
                    { id: 2, title: '일본어', content: '' },
                    { id: 3, title: '중국어', content: '' }
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