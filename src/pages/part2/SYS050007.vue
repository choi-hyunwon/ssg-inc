<template>
	<div>
		<div class="page_tit">
			<h2>배너 관리</h2>
			<ul>
				<li>HOME</li>
				<li>웹/앱</li>
				<li>컨텐츠 관리</li>
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
						<th>배너명</th>
						<td>
							<input type="text" />
						</td>
						<th>노출여부</th>
						<td>
							<select>
								<option>전체</option>
								<option>노출</option>
								<option>미노출</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>기간</th>
						<td colspan="3">
							<flat-pickr
								autocomplete="off"
								class="width300"
								v-model="startDate"
								:config="configs.start"
								placeholder="시작일자"
								name="startDate"
								@on-change="onStartChange"
							></flat-pickr> ~<flat-pickr
								autocomplete="off"
								class="width300"
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

		<div class="con_tit">
			<select class="floatRight">
				<option>5개씩보기</option>
				<option>10개씩보기</option>
				<option>20개씩보기</option>
				<option>30개씩보기</option>
				<option>40개씩보기</option>
				<option>50개씩보기</option>
			</select>
			<h3>배너 목록</h3>
			<p class="num">[총 30 건]</p>
		</div>

		<div class="form_table list">
			<table>
				<colgroup>
					<col style="width:50px" />
					<col style="width:50px" />
					<col style="width:80px" />
					<col style="width:auto" />
					<col style="width:100px" />
					<col style="width:200px" />
				</colgroup>

				<thead>
					<tr>
						<th></th>
						<th>No</th>
						<th>이미지</th>
						<th>배너명</th>
						<th>노출 여부</th>
						<th>등록일</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
						<td class="left">신세계 상품권 가이드</td>
						<td>노출</td>
						<td>2020-08-21 11:23:23</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
						<td class="left">신세계 상품권 가이드</td>
						<td>노출</td>
						<td>2020-08-21 11:23:23</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
						<td class="left">신세계 상품권 가이드</td>
						<td>노출</td>
						<td>2020-08-21 11:23:23</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
						<td class="left">신세계 상품권 가이드</td>
						<td>노출</td>
						<td>2020-08-21 11:23:23</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>100</td>
						<td>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
						<td class="left">신세계 상품권 가이드</td>
						<td>노출</td>
						<td>2020-08-21 11:23:23</td>
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
			<h3>배너 상세</h3>
		</div>

		<div class="form_table">
			<table>
				<colgroup>
					<col style="width:100px" />
					<col style="width:100px" />
					<col style="width:auto" />
					<col style="width:100px" />
					<col style="width:auto" />
				</colgroup>

				<tbody>
					<tr>
						<th colspan="2" class="e">배너명</th>
						<td colspan="3">
							<span class="tdInfoSpan">* 입력하신 배너명은 화면에 노출되지 않습니다.</span>
							<input type="text" class="width500" />
						</td>
					</tr>

					<tr>
						<th rowspan="2" class="e">이미지</th>
						<th>PC</th>
						<td colspan="3">
							<span class="tdInfoSpan">000 x 0.00Kb</span>
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
						<td colspan="3">
							<span class="tdInfoSpan">000 x 0.00Kb</span>
							<span class="fileInfo placeholder">파일을 선택하세요.</span>
							<label class="s_btn">
								<input class="hiddenFile" type="file" @change="getFileInfo" />파일검색
							</label>
							<button class="s_btn margin-left_10" @click="deleteFile">파일삭제</button>
							<img class="thumb" @click="showThumb" src="../../images/coupon.png" />
						</td>
					</tr>

					<tr>
						<th class="e" colspan="2">URL</th>
						<td colspan="3">
							<input type="text" />
						</td>
					</tr>

					<tr>
						<th colspan="2">노출여부</th>
						<td colspan="3">
							<select>
								<option>미노출</option>
								<option>노출</option>
							</select>
						</td>
					</tr>

					<tr>
						<th colspan="2">등록일</th>
						<td>2020-01-21 12:23:34</td>
						<th>수정일</th>
						<td>2020-03-11 12:23:04</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import commonUtils from "@/plugins/commonUtils";
import { Korean } from "flatpickr/dist/l10n/ko";

export default {
	name: "SYS050007",

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
		};
	},

	methods: {
		onStartChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.end, "minDate", dateStr);
		},
		onEndChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.start, "maxDate", dateStr);
		},

		showThumb: commonUtils.showThumb,
		getFileInfo: commonUtils.getFileInfo,
		deleteFile: commonUtils.deleteFile
	},
};

</script>
