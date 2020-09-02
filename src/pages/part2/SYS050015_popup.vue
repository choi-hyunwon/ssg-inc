<template>
	<div>
		<slot :togglePopup="togglePopup" :cData="categoryList"></slot>
		<b-modal v-model="showPopup">
			<div id="layers">
				<div id="dataLayer" class="layer flex column">
					<div class="page_tit">
						<h2>FAQ 관리</h2>
					</div>
					<div class="flex grow">
						<div class="form_table list flexItem">
							<div class="con_tit">
								<h3>FAQ 분류 목록</h3>
								<button id="moveUp" disabled type="button" class="s_btn">&utrif;</button>
								<button
									id="moveDown"
									disabled
									type="button"
									class="s_btn rotate180"
								>&utrif;</button>
								<button id="addItem" type="button" class="s_btn icon_01">추가</button>
								<button id="removeItem" disabled type="button" class="s_btn icon_02">삭제</button>
							</div>
							<table id="dataTable">
								<colgroup>
									<col style="width:50px" width="50" />
									<col style="width:200px" width="200" />
									<col style="width:500px" width="500" />
								</colgroup>
								<thead>
									<tr>
										<th></th>
										<th>노출순서</th>
										<th>분류명</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, i) of categoryList" :key="item.order">
										<td>
											<input type="checkbox" />
										</td>
										<td>{{ i + 1 }}</td>
										<td>
											<input
												:tabindex="i + 1"
												type="text"
												name="kor"
												placeholder="분류명을 입력 하세요."
												:value="item.kor"
											/>
											<input type="hidden" name="eng" :value="item.eng" />
											<input type="hidden" name="jap" :value="item.jap" />
											<input type="hidden" name="chi" :value="item.chi" />
											<input type="hidden" name="order" :value="item.order" />
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
							<table id="languageTable">
								<colgroup>
									<col style="width:50px" />
									<col style="width:100px" />
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
										<td>
											한글
											<input type="hidden" name="order" />
										</td>
										<td class="left"></td>
									</tr>
									<tr>
										<td>2</td>
										<td>영어</td>
										<td>
											<input type="text" name="eng" />
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td>일본어</td>
										<td>
											<input type="text" name="jap" />
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>중국어</td>
										<td>
											<input type="text" name="chi" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="comm_btn">
						<button type="button" @click="eventPopup">등록</button>
						<button type="button" @click="cancelPopup">취소</button>
					</div>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
import Vue from "vue";
import { Korean } from "flatpickr/dist/l10n/ko";
import { BModal, VBModal } from "bootstrap-vue";
Vue.component("b-modal", BModal);
Vue.directive("b-modal", VBModal);

export default {
	name: "SYS050015Popup",

	data() {
		return {
			categoryList: [
				{
					order: 1,
					kor: "브랜드",
					eng: "Brand",
					jap: "브란도",
					chi: "不丹倒",
				},
				{
					order: 2,
					kor: "멤버십",
					eng: "Membership",
					jap: "맴바십",
					chi: "匯元什",
				},
				{
					order: 3,
					kor: "포인트",
					eng: "Point",
					jap: "뽀인또",
					chi: "佈人兎",
				},
				{
					order: 4,
					kor: "서비스",
					eng: "Service",
					jap: "사비수",
					chi: "墅丕修",
				},
			],
			categoryLimit: 8,
			originalList: [],
			showPopup: false,
		};
	},

	

	methods: {
		togglePopup: function () {
			this.showPopup = !this.showPopup;
		},
		cancelPopup() {
			this.showPopup = false;
		},
		eventPopup() {
			
			this.showPopup = false;
		}
	},
};
</script>