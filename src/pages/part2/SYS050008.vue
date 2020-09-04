<template>
	<div>
		<div class="page_tit">
			<h2>이벤트 관리</h2>
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
						<th>이벤트명</th>
						<td>
							<input type="text" />
						</td>
						<th>유형</th>
						<td>
							<select>
								<option>전체</option>
								<option>참여형</option>
								<option>룰렛형</option>
								<option>스템프형</option>
							</select>
						</td>
					</tr>

					<tr>
						<th>기간</th>
						<td>
							<div class="flex alignCenter">
								<flat-pickr
									autocomplete="off"
									class="width300"
									v-model="startDate"
									:config="configs.start"
									placeholder="시작일자"
									name="startDate"
									@on-change="onStartChange"
								></flat-pickr>&nbsp;~&nbsp;
								<flat-pickr
									autocomplete="off"
									class="width300"
									v-model="endDate"
									:config="configs.end"
									placeholder="종료일자"
									name="endDate"
									@on-change="onStartChange"
								></flat-pickr>
							</div>
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
				</tbody>
			</table>
		</div>

		<div class="con_tit correctB-Modal">
			<select class="floatRight">
				<option>5개씩보기</option>
				<option>10개씩보기</option>
				<option>20개씩보기</option>
				<option>30개씩보기</option>
				<option>40개씩보기</option>
				<option>50개씩보기</option>
			</select>
			<SYS050008Popup v-slot="slotProps">
				<h3>이벤트 목록</h3>
				<p class="num">[총 30 건]</p>
				<button class="s_btn marginLeft10" @click="slotProps.togglePopup">게시 관리</button>
			</SYS050008Popup>
		</div>

		<div class="form_table list">
			<table>
				<colgroup>
					<col style="width:50px" />
					<col style="width:50px" />
					<col style="width:80px" />
					<col style="width:auto" />
					<col style="width:200px" />
					<col style="width:130px" />
					<col style="width:80px" />
					<col style="width:80px" />
					<col style="width:150px" />
				</colgroup>

				<thead>
					<tr>
						<th></th>
						<th>No</th>
						<th>이미지</th>
						<th>이벤트명</th>
						<th>이벤트 기간</th>
						<th>관련 브랜드</th>
						<th>유형</th>
						<th>노출 여부</th>
						<th>등록일</th>
					</tr>
				</thead>
				<tbody>

					<tr v-for="data of eventData" :key="data.idx">
						<td><input type="checkbox" name="evenntCheck" /></td>
						<td>{{ data.idx }}</td>
						<td>
							<img class="thumb" @click="showThumb" :src="data.image" />
						</td>
						<td class="left ellipsis">{{ data.name }}</td>
						<td>{{ data.startDate.substring(0, 10) }} ~ {{ data.endDate.substring(0, 10) }}</td>
						<td>{{ data.brand }}</td>
						<td v-if="data.type =='a'">전체</td>
						<td v-if="data.type =='b'">침여형</td>
						<td v-if="data.type =='c'">룰렛형</td>
						<td v-if="data.type =='d'">스템프형</td>
						<td v-if="data.exposed">노출</td>
						<td v-else>미노출</td>
						<td>{{ data.regDate }}</td>
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
	</div>
</template>

<script>
import Vue from "vue";
import { Korean } from "flatpickr/dist/l10n/ko";
import SYS050008Popup from "../part2/SYS050008_popup";
import commonUtils from "@/plugins/commonUtils";

export default {
	name: "SYS050008",
	components: {
		SYS050008Popup,
	},
	data() {
		return {
			eventData : [
				{
					idx: 1,
					name:"힘내요 대한민국",
					startDate: "2020-08-21 11:00:00",
					startHour: "12",
					startMinute: "35",
					endDate: "2020-11-20",
					endHour: "14",
					endMinute: "23",
					regDate: "2020-07-11 13:01:34",
					always: true,
					type: "a",
					brand: "스타벅스",
					exposed: false,
					image: "../../images/coupon.png"
				},
				{
					idx: 2,
					name:"가정의 달, 돌려라 돌려~",
					startDate: "1987-08-21",
					startHour: "12",
					startMinute: "35",
					endDate: "2020-11-20",
					endHour: "14",
					endMinute: "23",
					regDate: "2020-07-11 13:01:34",
					always: false,
					type: "b",
					brand: "아디다스",
					exposed: true,
					image: "../../images/coupon.png"
				},
				{
					idx: 3,
					name:"릴레이 스탬프 이벤트",
					startDate: "1425-08-21 00:00:00",
					startHour: "12",
					startMinute: "35",
					endDate: "2020-11-20",
					endHour: "14",
					endMinute: "23",
					regDate: "2020-07-11 13:01:34",
					always: false,
					type: "c",
					brand: "나이키",
					exposed: true,
					image: "../../images/coupon.png"
				},
				{
					idx: 4,
					name:"하늘보리 꿀나라 이벤트",
					startDate: "2000-08-23 00:00:00",
					startHour: "12",
					startMinute: "35",
					endDate: "2020-11-20",
					endHour: "14",
					endMinute: "23",
					regDate: "2020-07-11 13:01:34",
					always: true,
					type: "d",
					brand: "프로스펙스",
					exposed: false,
					image: "../../images/coupon.png"
				}

			],
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

		showThumb: commonUtils.showThumb
	},
};
</script>
