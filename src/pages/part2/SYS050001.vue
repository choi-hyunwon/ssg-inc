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
						<th id="divisionList">브랜드명</th>
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
				<li
					@click="$setTabs(tab.id)"
					v-for="tab of tabs"
					:key="tab.id"
					:class="{'on' : tab.id === activeTab}"
				>
					<v-tab>{{ tab.title}}</v-tab>
				</li>
			</ul>

			<v-tab-item v-for="tab of tabs" :key="tab.id">
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
								<th>브랜드명</th>
								<td colspan="3">{{tab.content}}</td>
							</tr>
							<tr>
								<th class="e">요약소개</th>
								<td colspan="3"></td>
							</tr>

							<tr>
								<th class="e">상세내용</th>
								<td colspan="3"></td>
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
					<col style="width: 150px;" />
					<col style="width: auto;" />
					<col style="width: 150px;" />
					<col style="width: auto;" />
				</colgroup>

				<tbody>
					<tr>
						<th>SNS 사용여부</th>
						<td colspan="3">
							<select @change="toggleDisabled">
								<option value="0">미사용</option>
								<option value="1">사용</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>SNS 채널 URL</th>
						<td colspan="3">
							<ul class="formList" id="toggleInput">
								<li disabled>
									<label>트위터</label>
									<input type="text" disabled />
								</li>
								<li disabled>
									<label>인스타그램</label>
									<input type="text" disabled />
								</li>
								<li disabled>
									<label>페이스북</label>
									<input type="text" disabled />
								</li>
							</ul>
						</td>
					</tr>

					<tr>
						<th class="e">로고 이미지</th>
						<td colspan="3">
							<span class="fileInfo placeholder">파일을 선택하세요.</span>
							<label class="s_btn">
								<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
							</label>
							<button class="s_btn" @click="deleteFile">파일삭제</button>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
					</tr>

					<tr>
						<th>론칭 일자</th>
						<td>
							<input type="number" @keyup="numberOnly" />
							<label>년</label>
							<input type="number" @keyup="numberOnly" />
							<label>월</label>
						</td>
						<th>노출 여부</th>
						<td>
							<select>
								<option value>미노출</option>
								<option value>노출</option>
							</select>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script>
import commonUtils from "@/plugins/commonUtils";
import PageTitle from "@/components/common/PageTitle";

export default {
	name: "sampleWrite",

	components: {
		"page-title": PageTitle,
	},

	watch: {
		"$route.path": function () {
			this.activeTab = 0;
		},
	},

	data() {
		return {
			activeTab: 0,
			tabs: [
				{ id: 0, title: "한국어", content: "스타벅스" },
				{ id: 1, title: "영어", content: "starbucks" },
				{ id: 2, title: "일본어", content: "スターバックス" },
				{ id: 3, title: "중국어", content: "星巴克" },
			],
		};
	},

	methods: {
		$setTabs: function $setTabs(activeTab) {
			this.activeTab = activeTab;
		},

		showThumb: commonUtils.showThumb,
		getFileInfo: commonUtils.getFileInfo,
		deleteFile: commonUtils.deleteFile,
		numberOnly: commonUtils.numberOnly,

		toggleDisabled: function (e) {
			const group = "#toggleInput";
			const selector = "li, input";
			const value = "1";
			const elements = document.querySelector(group).querySelectorAll(selector);
			
			for(var i = 0; i < elements.length; i++) {
				if (e.target.value === value) {
					elements[i].removeAttribute("disabled");
				} else {
					elements[i].setAttribute("disabled", "disabled");
				}

			}
		},
	},
};
</script>
