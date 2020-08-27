<template>
	<div>
		<div class="page_tit">
			<h2>FAQ 관리</h2>
			<ul>
				<li>HOME</li>
				<li>웹/앱</li>
				<li>서비스 관리</li>
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
						<th>구분</th>
						<td>
							<select>
								<option>전체</option>
								<option>분류1</option>
								<option>분류2</option>
							</select>
						</td>

						<th>노출 여부</th>
						<td>
							<select>
								<option>전체</option>
								<option>노출</option>
								<option>미노출</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>제목</th>
						<td>
							<input type="text" />
						</td>

						<th>기간</th>
						<td>
							<flat-pickr
								autocomplete="off"
								class="width200"
								v-model="startDate"
								:config="configs.start"
								placeholder="시작일자"
								name="startDate"
								@on-change="onStartChange"
							></flat-pickr>~
							<flat-pickr
								autocomplete="off"
								class="width200"
								v-model="endDate"
								:config="configs.end"
								placeholder="종료일자"
								name="endDate"
								@on-change="onStartChange"
							></flat-pickr>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="con_tit correctB-Modal">
			<SYS050015Popup v-slot="slotProps">
				<h3>공지사항 목록</h3>
				<p class="num">[총 30 건]</p>
				<button type="button" class="s_btn marginLeft10" @click="slotProps.togglePopup">분류 관리</button>
			</SYS050015Popup>
		</div>

		<div class="form_table list">
			<table>
				<colgroup>
					<col style="width:50px" />
					<col style="width:50px" />
					<col style="width:auto" />
					<col style="width:100px" />
					<col style="width:150px" />
				</colgroup>

				<thead>
					<tr>
						<th></th>
						<th>No</th>
						<th>제목</th>
						<th>노출여부</th>
						<th>등록일</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td class="left">개인정보 처리방침 변경 안내</td>
						<td>미노출</td>
						<td>2020-09-21 11:32:34</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td class="left">개인정보 처리방침 변경 안내</td>
						<td>미노출</td>
						<td>2020-09-21 11:32:34</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td class="left">개인정보 처리방침 변경 안내</td>
						<td>미노출</td>
						<td>2020-09-21 11:32:34</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td class="left">개인정보 처리방침 변경 안내</td>
						<td>미노출</td>
						<td>2020-09-21 11:32:34</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td class="left">개인정보 처리방침 변경 안내</td>
						<td>미노출</td>
						<td>2020-09-21 11:32:34</td>
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
			<h3>공지사항 상세</h3>
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
		</v-tabs>

		<div class="form_table">
			<table>
				<colgroup>
					<col style="width: 150px" />
					<col style="width: auto" />
					<col style="width: 150px" />
					<col style="width: auto" />
				</colgroup>

				<tbody>
					<tr>
						<th class="e">제목</th>
						<td colspan="3">
							<input type="text" />
						</td>
					</tr>

					<tr>
						<th>내용</th>
						<td colspan="3"></td>
					</tr>

					<tr>
						<th>등록일</th>
						<td>2020.10.23 22:34:12</td>
						<th>수정일</th>
						<td>2020.10.23 22:34:12</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="con_tit">
			<h3>공통정보 관리</h3>
		</div>

		<div class="form_table">
			<table>
				<colgroup>
					<col style="width: 150px" />
					<col style="width: auto" />
				</colgroup>

				<tbody>
					<tr>
						<th>구분</th>
						<td>
							<select>
								<option>멤버십</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>노출 여부</th>
						<td>
							<select>
								<option>미노출</option>
								<option>노출</option>
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
import { Korean } from "flatpickr/dist/l10n/ko";
import SYS050015Popup from "../part2/SYS050015_popup";

export default {
	name: "SYS050015",
	components: {
		SYS050015Popup,
	},
	watch: {
		"$route.path": function () {
			this.activeTab = 0;
		},
	},
	data() {
		return {
			startDate: "",
			endDate: "",

			configs: {
				start: {
					allowInput: true,
					dateFormat: "Y-m-d",
					altFormat: "Y-m-d",
					minDate: new Date(),
					maxDate: null,
					method: function () {
						cosole.log(arguments);
					},
				},

				end: {
					allowInput: true,
					dateFormat: "Y-m-d",
					altFormat: "Y-m-d",
					minDate: null,
				},
			},

			activeTab: 0,
			tabs: [
				{ id: 0, title: "한국어", content: "" },
				{ id: 1, title: "영어", content: "" },
				{ id: 2, title: "일본어", content: "" },
				{ id: 3, title: "중국어", content: "" },
			],
		};
	},

	methods: {
		onStartChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.end, "minDate", dateStr);
		},
		onEndChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.start, "maxDate", dateStr);
		},
		$setTabs: function $setTabs(activeTab) {
			this.activeTab = activeTab;
		},
	},
};
</script>