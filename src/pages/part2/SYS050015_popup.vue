<template>
	<div>
		<slot :togglePopup="togglePopup"></slot>
		<b-modal v-model="showPopup">
			<div id="layers">
				<div class="layer flex column">
					<div class="page_tit">
						<h2>FAQ 관리</h2>
					</div>
					<div class="flex grow">
						<div class="form_table list flexItem">
							<div class="con_tit">
								<h3>FAQ 분류 목록</h3>
								<button type="button" class="s_btn">&utrif;</button>
								<button type="button" class="s_btn rotate180">&utrif;</button>
								<button type="button" class="s_btn icon_01">추가</button>
								<button type="button" class="s_btn icon_02">삭제</button>
							</div>
							<table>
								<colgroup>
									<col style="width:50px" />
									<col style="width:50px" />
									<col style="width:300px" />
								</colgroup>
								<thead>
								<tr>
									<th></th>
									<th>노출순서</th>
									<th>분류명</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>1</td>
									<td>
										<input type="text" placeholder="분류명을 입력 하세요." />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>2</td>
									<td>
										<input type="text" placeholder="분류명을 입력 하세요." />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>3</td>
									<td>
										<input type="text" placeholder="분류명을 입력 하세요." />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>4</td>
									<td>
										<input type="text" placeholder="분류명을 입력 하세요." />
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>5</td>
									<td>
										<input type="text" placeholder="분류명을 입력 하세요." />
									</td>
								</tr>
								</tbody>
							</table>
							<span class="smallNotice">※ 분류는 최대 8개까지만 사용 설정이 가능합니다.</span>
						</div>

						<div class="flexItem form_table list">
							<div class="con_tit">
								<h3>언어별 분류명</h3>
							</div>
							<table>
								<colgroup>
									<col style="width:50px" />
									<col style="width:50px" />
									<col style="width:300px" />
								</colgroup>
								<thead>
								<tr>
									<th></th>
									<th>언어구분</th>
									<th>분류명</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>1</td>
									<td>한글</td>
									<td>가입/탈퇴</td>
								</tr>
								<tr>
									<td>2</td>
									<td>한글</td>
									<td>
										<input type="text" />
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>한글</td>
									<td>
										<input type="text" />
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td>한글</td>
									<td>
										<input type="text" />
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td>한글</td>
									<td>
										<input type="text" />
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="comm_btn">
						<button type="button" @click="eventPopup">등록</button>
						<button type="button" @click="togglePopup">취소</button>
					</div>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
import Vue from "vue";
import { Korean } from "flatpickr/dist/l10n/ko";
import { BModal , VBModal} from 'bootstrap-vue'
Vue.component('b-modal', BModal)
Vue.directive('b-modal', VBModal)

export default {
	name: "SYS050015Popup",

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

            showPopup: false
		};
	},

	methods: {
		onStartChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.end, "minDate", dateStr);
		},
		onEndChange(selectedDates, dateStr, instance) {
			this.$set(this.configs.start, "maxDate", dateStr);
		},
        togglePopup : function () {
            this.showPopup = !this.showPopup
        },
        eventPopup(){
            // 등록 작업 필요
            this.showPopup = false;
        }
	},
};
</script>