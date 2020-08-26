<template>
	<div>
		<div class="page_tit">
			<h2>앱버젼 관리</h2>
			<ul>
				<li>HOME</li>
				<li>웹/앱</li>
				<li>서비스 관리</li>
			</ul>
		</div>

		<div class="comm_btn">
			<button type="button">조회</button>
			<button type="button">신규</button>
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
								<option>iOs</option>
								<option>Android</option>
							</select>
						</td>
						<th>업데이트 유형</th>
						<td>
							<select>
								<option>전체</option>
								<option>필수</option>
								<option>선택</option>
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
							></flat-pickr>~
							<flat-pickr
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
				<option>5개씩 보기</option>
			</select>
			<h3>앱버전 목록</h3>
			<p class="num">[총 30 건]</p>
		</div>

		<div class="form_table list">
			<table>
				<colgroup>
					<col style="width:10%" />
					<col style="width:auto" />
					<col style="width:auto" />
					<col style="width:auto" />
					<col style="width:15%" />
					<col style="width:15%" />
				</colgroup>

				<thead>
					<tr>
						<th>No</th>
						<th>구분</th>
						<th>버전명</th>
						<th>등록자</th>
						<th>반영일</th>
						<th>등록일</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>100</td>
						<td>일회용컵 없는 날 캠페인</td>
						<td>
							<a>노출 위치</a>
						</td>
						<td>아디다스</td>
						<td>미노출</td>
						<td>2020-09-21 11;32;34</td>
					</tr>

					<tr>
						<td>30</td>
						<td>iOS</td>
						<td>0.1.2</td>
						<td>abc1234</td>
						<td>2020-01-23 12:34:12</td>
						<td>2020-09-21 11:32:34</td>
					</tr>

					<tr>
						<td>30</td>
						<td>iOS</td>
						<td>0.1.2</td>
						<td>abc1234</td>
						<td>2020-01-23 12:34:12</td>
						<td>2020-09-21 11:32:34</td>
					</tr>

					<tr>
						<td>30</td>
						<td>iOS</td>
						<td>0.1.2</td>
						<td>abc1234</td>
						<td>2020-01-23 12:34:12</td>
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
			<h3>앱버젼 상세</h3>
		</div>

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
						<th class="e">구분</th>
						<td colspan="3">
							<select>
								<option>iOS</option>
								<option>Android</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>업데이트 유형</th>
						<td colspan="3">
							<label>
								<input type="radio" name="updateType" />필수
							</label>
							<label>
								<input type="radio" name="updateType" />선택
							</label>
						</td>
					</tr>

					<tr>
						<th>버전</th>
						<td colspan="3">
							<input class="width100 textCenter" type="text" />
							<input class="width100 textCenter" type="text" />
							<input class="width100 textCenter" type="text" />
							<button type="text" class="s_btn">중복확인</button>
						</td>
					</tr>

					<tr>
						<th>링크</th>
						<td colspan="3">
							<input type="text" />
						</td>
					</tr>

					<tr>
						<th>반영일</th>
						<td colspan="3">
							<flat-pickr
								autocomplete="off"
								class="width300"
								v-model="updateDate"
								:config="configs.start"
								placeholder="반영일"
								name="updateDate"
								@on-change="onStartChange"
							></flat-pickr>
						</td>
					</tr>

					<tr>
						<th>메모</th>
						<td colspan="3">
							<textarea></textarea>
						</td>
					</tr>

					<tr>
						<th>등록일</th>
						<td>2020.03.12 11:23:34</td>

						<th>수정일</th>
						<td>2020.03.12 11:23:34</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- <div class="con_tit">
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
                        <input type="file" class="width500" placeholder="파일을 선택하세요." />
                        <button type="button" class="s_btn">파일 검색</button>
                        <button type="button" class="s_btn">파일 삭제</button>
                    </td>
                </tr>

                <tr>
                    <th>Mobile</th>
                    <td colspan="3">
                        <span class="tdInfoSpan">000 x 0.00Kb</span>
                        <input type="file" class="width500" placeholder="파일을 선택하세요." />
                        <button type="button" class="s_btn">파일 검색</button>
                        <button type="button" class="s_btn">파일 삭제</button>
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
		</table>-->
	</div>
</template>

<script>
import Vue from "vue";
import { Korean } from "flatpickr/dist/l10n/ko";

export default {
	name: "SYS050010",

	data() {
		return {
			startDate: "",
			endDate: "",
			updateDate: "",

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
	},
};
</script>