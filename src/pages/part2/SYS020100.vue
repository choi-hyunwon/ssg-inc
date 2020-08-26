<template>
	<div>
		<div class="page_tit">
			<h2>[시스템]고객사 관리</h2>
			<ul>
				<li>HOME</li>
				<li>1댑스</li>
				<li>2댑스</li>
			</ul>
		</div>

		<div class="comm_btn">
			<button>조회</button>
			<button>신규</button>
			<button>삭제</button>
			<button>저장</button>
		</div>

		<div class="con_tit">
			<h3>게시판 목록 제목</h3>
		</div>

		<div class="grid_edge">여기 그리드</div>

		<div class="con_tit">
			<h3>목록에서 선택한 게시물의 제목</h3>
		</div>

		<div class="form_table">
			<!-- form_table -->
			<table>
				<colgroup>
					<col style="width:150px" />
					<col style="width:auto" />
					<col style="width:150px" />
					<col style="width:auto" />
				</colgroup>
				<tbody>
					<tr>
						<th class="e">고객사코드</th>
						<td>
							<input type="text" />
						</td>
						<th class="e">고객사명</th>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th class="e">계열사여부</th>
						<td>
							<select>
								<option>--</option>
							</select>
						</td>
						<th class="e">서비스상태</th>
						<td>
							<select>
								<option>--</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>서비스 시작일자</th>
						<td>
							<flat-pickr
								autocomplete="off"
								v-model="startDate"
								:config="configs.start"
								placeholder="시작일자"
								name="startDate"
								@on-change="onStartChange"
							></flat-pickr>
						</td>
						<th>서비스 종료일자</th>
						<td class="flex">
							<flat-pickr
								autocomplete="off"
								v-model="endDate"
								:config="configs.end"
								placeholder="종료일자"
								name="endDate"
								@on-change="onEndChange"
							></flat-pickr>
							<flat-pickr
								autocomplete="off"
								v-model="monthDate"
								:config="configs.month"
								placeholder="월달력"
								name="monthDate"
							></flat-pickr>
						</td>
					</tr>
					<tr>
						<th class="e">사용언어</th>
						<td colspan="3">
							<select>
								<option>--</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>서비스 URL</th>
						<td colspan="3">
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th class="e">대표자 성명</th>
						<td>
							<input type="text" />
						</td>
						<th class="e">대표전화</th>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th>법인등록번호</th>
						<td>
							<input type="text" />
						</td>
						<th class="e">사업자등록번호</th>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th class="e">주소</th>
						<td colspan="3">
							<div class="add_form">
								<input type="text" readonly />
								<button class="s_btn">우편번호</button>
								<p>
									<span>
										<input type="text" />
									</span>
									<span>
										<input type="text" />
									</span>
								</p>
							</div>
						</td>
					</tr>
					<tr>
						<th>대표품목명</th>
						<td>
							<input type="text" />
						</td>
						<th>대표브랜드명</th>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th>업종코드</th>
						<td>
							<input type="text" />
						</td>
						<th>업태명</th>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th>업태</th>
						<td>
							<input type="text" />
						</td>
						<th>종목</th>
						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th>비고</th>
						<td colspan="3">
							<input type="text" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- form_table -->

		<div class="con_tit">
			<h3>총괄 운영자</h3>
			<p class="num">[총 0 건]</p>

			<div class="btn">
				<button class="s_btn icon_01">행추가</button>
				<button class="s_btn icon_02">행삭제</button>
			</div>
		</div>

		<div class="grid_edge">여기 그리드</div>
	</div>
</template>

<script>
import Vue from "vue";
import { Korean } from "flatpickr/dist/l10n/ko";

export default {
	name: "SYS020100",

	data() {
		return {
			startDate: "",
			endDate: "",
			monthDate: "",

			configs: {
				start: {
					allowInput: true,
					dateFormat: "Y-m-d",
					altFormat: "Y-m-d",
					minDate: new Date(),
					maxDate: null,
				},

				end: {
					allowInput: true,
					dateFormat: "Y-m-d",
					altFormat: "Y-m-d",
					minDate: null,
				},

				month: {
					dateFormat: "Y-m",
					altFormat: "Y-m",
				},
			},
		};
	},

	methods: {
		onStartChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.end, "minDate", dateStr);
		},
		onEndChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.start, "maxDate", dateStr);
		},
	},
};
</script>