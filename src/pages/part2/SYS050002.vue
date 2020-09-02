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
			<select class="floatRight">
				<option>5개씩 보기</option>
				<option>10개씩 보기</option>
				<option>20개씩 보기</option>
				<option>30개씩 보기</option>
				<option>40개씩 보기</option>
				<option>50개씩 보기</option>
			</select>
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
							<button type="button" class="s_btn redBtn">P 적립제외</button>
							<button type="button" class="s_btn blueBtn">P 사용가능</button>
						</td>
						<td>미노출</td>
						<td>2020-07-01 11:23:23</td>
					</tr>

					<tr>
						<td>30</td>
						<td>스타벅스 강남점</td>
						<td>스타벅스</td>
						<td>
							<button type="button" class="s_btn blueBtn">P 적립가능</button>
							<button type="button" class="s_btn redBtn">P 사용제외</button>
						</td>
						<td>노출</td>
						<td>2020-07-01 11:23:23</td>
					</tr>

					<tr>
						<td>31</td>
						<td>아디다스 성수점</td>
						<td>스타벅스</td>
						<td>
							<button type="button" class="s_btn redBtn">P 적립제외</button>
							<button type="button" class="s_btn redBtn">P 사용제외</button>
						</td>
						<td>미노출</td>
						<td>2020-07-01 11:23:23</td>
					</tr>

					<tr>
						<td>32</td>
						<td>나이키 성수점</td>
						<td>스타벅스</td>
						<td>
							<button type="button" class="s_btn blueBtn">P 적립가능</button>
							<button type="button" class="s_btn blueBtn">P 사용가능</button>
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
								<th>매장명</th>
								<td>{{tab.content}}</td>
								<th>주소</th>
								<td>서울시 성동구 성수동2가 세림비딩</td>
							</tr>
							<tr>
								<th class="e">이용시간</th>
								<td colspan="3">
									
								</td>
							</tr>

							<tr>
								<th class="e">이용안내 및 주차안내</th>
								<td colspan="3">
									
								</td>
							</tr>

							<!-- 등록 -->
							<tr>
								<th>등록일</th>
								<td colspan="3">2002-07-01 11:23:12</td>
							</tr>

							<!-- 상세, 수정 -->
							<tr class="none">
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
						<th>매장 전화번호</th>
						<td>1455-2233</td>
						<th>브랜드명</th>
						<td>스타벅스</td>
					</tr>

					<tr>
						<th>포인트 적립 여부</th>
						<td>
							<select>
								<option value>미사용</option>
								<option value>사용</option>
							</select>
						</td>
						<th>포인트 사용 여부</th>
						<td>
							<select>
								<option value>미사용</option>
								<option value>사용</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>노출 여부</th>
						<td colspan="3">
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
	},
};
</script>