
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

		<v-tab-item v-for="tab of tabs" :key="tab.id">

		

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
						<span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <th>Mobile</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 27Mb</span>
						<span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
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
                        <span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
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
                        <span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택명</td>
                    <td>
                        <span class="tdInfoSpan">최대 10자</span>
                        <input type="text" maxlength="10" class="width500" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택내용</td>
                    <td>
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
                        <span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택명</td>
                    <td>
                        <span class="tdInfoSpan">최대 10자</span>
                        <input type="text" maxlength="10" class="width500" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택내용</td>
                    <td>
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
                        <span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
						<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택명</td>
                    <td>
                        <span class="tdInfoSpan">최대 10자</span>
                        <input type="text" class="width500" maxlength="10" />
                    </td>
                </tr>

                <tr>
                    <td class="center">혜택내용</td>
                    <td>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>

    <div class="con_tit">
        <h3>앱 소개</h3>
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
                        <span class="fileInfo placeholder">파일을 선택하세요.</span>
						<label class="s_btn">
							<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
						</label>
						<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
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
</v-tab-item>
    </v-tabs>
</div>
</template>

<script>
import Vue from "vue";
import commonUtils from "@/plugins/commonUtils";

import PageTitle from "@/components/common/PageTitle";

export default {
    name: "sampleWrite",
    metaInfo: {
        title: "샘플 Editor",
    },


    components: {
        "page-title": PageTitle,
    },

    watch: {
        '$route.path': function () {
            this.activeTab = 0
        }
    },

    data() {
        return {
            activeTab: 0,
            tabs: [
                { id: 0, title: '한국어', content: '' },
                { id: 1, title: '영어', content: '' },
                { id: 2, title: '일본어', content: '' },
                { id: 3, title: '중국어', content: '' }
            ]
        };
    },

    methods: {
    
        $setTabs: function $setTabs (activeTab) {
            this.activeTab = activeTab
		},

		showThumb: commonUtils.showThumb,
		getFileInfo: commonUtils.getFileInfo,
		deleteFile: commonUtils.deleteFile
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
