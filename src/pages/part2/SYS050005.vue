<template>
<div>
    <div class="page_tit">
        <h2>등급/혜택 안내</h2>
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
        <h3>상단 등급/혜택 소개</h3>
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
		<button type="button" class="s_btn floatRight">템플릿 추가</button>
        <h3>쿠폰 이용 안내</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:150px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
                <tr>
                    <th>쿠폰 이용 안내</th>
                    <td>
                      
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

	<div class="con_tit">
        <h3>포인트 이용 안내</h3>
		<button type="button" class="s_btn floatRight">템플릿 추가</button>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:150px" />
                <col style="width:100px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
				<tr>
                    <th rowspan="2">포인트 이용 안내 1</th>
					<td class="center">제목</td>
					<td>
						<span class="tdInfoSpan">최대 10자</span>
						<input class="width500" maxlength="10" type="text" />
					</td>
				</tr>
                <tr>
					<td class="center">내용</td>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
	<div class="form_table">
        <table>
            <colgroup>
                <col style="width:150px" />
                <col style="width:100px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
				<tr>
                    <th rowspan="2">포인트 이용 안내 2<br /><button type="button" class="s_btn">템플릿 삭제</button></th>
					<td class="center">제목</td>
					<td>
						<span class="tdInfoSpan">최대 10자</span>
						<input class="width500" type="text" maxlength="10" />
					</td>
				</tr>
                <tr>
					<td class="center">내용</td>
                    <td>

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

    props: {},

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
    },
};
</script>
