<template>
	<div>
		<slot :togglePopup="togglePopup" :cData="categoryList"></slot>
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
								<button id="moveUp" disabled type="button" class="s_btn" @click="moveUp">&utrif;</button>
								<button
									id="moveDown"
									disabled
									type="button"
									class="s_btn rotate180"
									@click="moveDown"
								>&utrif;</button>
								<button id="addItem" type="button" class="s_btn icon_01" @click="addItem">추가</button>
								<button id="removeItem" disabled type="button" class="s_btn icon_02" @click="removeItem">삭제</button>
							</div>
							<table id="dataTable">
								<colgroup>
									<col style="width:50px" />
									<col style="width:100px" />
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
									<tr v-for="(item, i) of categoryList" :key="item.order">
										<td>
											<input type="checkbox" @click="checkCheck" />
										</td>
										<td>{{ i + 1 }}</td>
										<td>
											<input
												:tabindex="i + 1"
												type="text"
												name="kor"
												placeholder="분류명을 입력 하세요."
												:value="item.kor"
												@keyup="changeKeyword"
												@focus="inputFocus"
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
											<input type="text" name="eng" @keyup="putData" />
										</td>
									</tr>
									<tr>
										<td>3</td>
										<td>일본어</td>
										<td>
											<input type="text" name="jap" @keyup="putData" />
										</td>
									</tr>
									<tr>
										<td>4</td>
										<td>중국어</td>
										<td>
											<input type="text" name="chi" @keyup="putData" />
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

	created() {
		this.originalList = this.cloneData(this.categoryList);
	},

	methods: {
		togglePopup: function () {
			this.showPopup = !this.showPopup;
			this.initLayer();
		},
		initLayer() {
			document.querySelectorAll("#languageTable input[type='text']").forEach( e => e.value = "");
			document.querySelector("#languageTable tbody td:nth-child(3)").innerHTML = "";
			const selected = document.querySelectorAll("#dataTable tr.selected");
			if (selected.length) selected.forEach( e => e.classList.remove("selected"));
			const checkbox = document.querySelectorAll("#dataTable input[type='checkbox']:checked");
			if (checkbox.length) checkbox.forEach( e => e.checked = false);
			document.querySelectorAll("#moveUp, #moveDown, #removeItem").forEach( e => e.disabled = true);
			if (this.categoryList.length >= 8) document.querySelector("#addItem").disabled = true;
			else document.querySelector("#addItem").disabled = false;
		},
		cancelPopup() {
			this.categoryList = this.cloneData(this.originalList);
			this.showPopup = false;
		},
		cloneData(data) {
			return JSON.parse(JSON.stringify(data));
		},
		eventPopup() {
			this.reorderList();
			let data = [];
			const tds = document.querySelectorAll("#dataTable tbody td:nth-child(3)");
			tds.forEach((element, i) => {
				let obj = {};
				obj.kor = element.querySelector("[name='kor']").value;
				obj.eng = element.querySelector("[name='eng']").value;
				obj.jap = element.querySelector("[name='jap']").value;
				obj.chi = element.querySelector("[name='chi']").value;
				obj.order = i + 1;
				data.push(obj);
			});

			const select = document.querySelector("#firstSelect");
			const select2 = document.querySelector("#secondSelect");
			select.innerHTML = "<option value='0'>전체</option>";
			select2.innerHTML = "<option value='0'>전체</option>";
			data.forEach(function (obj) {
				select.insertAdjacentHTML(
					`beforeend`,
					`<option value='${obj.order}'>${obj.kor}</option>`
				);
				select2.insertAdjacentHTML(
					`beforeend`,
					`<option value='${obj.order}'>${obj.kor}</option>`
				);
			});

			this.originalList = this.cloneData(this.categoryList);

			this.saveData(data);
			this.showPopup = false;
		},
		saveData(data) {
			this.categoryList = this.cloneData(data);
			this.logData(this.categoryList);
		},
		checkCheck(e) {
			let table = document.querySelector("#dataTable");
			const count = table.querySelectorAll("input[type='checkbox']:checked").length;
			if (count < 1) {
				document.querySelectorAll("#moveUp, #moveDown, #removeItem").forEach( e => e.disabled = true);
			} else {
				if (count > 1) {
					document.querySelectorAll("#moveUp, #moveDown").forEach( e => e.disabled = true);
				} else {
					document.querySelectorAll("#moveUp, #moveDown").forEach( e => e.disabled = false);
				}
				document.querySelector("#removeItem").disabled = false;
			}
		},
		moveUp(e) {
			if (
				document.querySelectorAll("#dataTable input[type='checkbox']:checked")
					.length > 1
			) {
				alert("1개만 선택해 주세요.");
				return;
			}

			const tr = document.querySelector(
				"#dataTable input[type='checkbox']:checked"
			).parentElement.parentElement;
			const order = tr.querySelector("[name='order']").value;
			const index = this.categoryList.findIndex((item) => {
				return item.order == order;
			});
			if (index == 0) return;
			const item = this.categoryList.splice(index, 1)[0];
			this.categoryList.splice(index - 1, 0, item);
		},
		logData(ary) {
			let list = [];
			ary.forEach((item) => {
				const string = `order : ${item.order},     kor : ${item.kor},     eng : ${item.eng},     jap : ${item.jap},     chi : ${item.chi}`;
				list.push(string);
			});
			console.log(list);
		},
		moveDown(e) {
			if (
				document.querySelectorAll("#dataTable input[type='checkbox']:checked")
					.length > 1
			) {
				alert("1개만 선택해 주세요.");
				return;
			}

			const tr = document.querySelector(
				"#dataTable input[type='checkbox']:checked"
			).parentElement.parentElement;
			const order = tr.querySelector("[name='order']").value;
			const index = this.categoryList.findIndex((item) => {
				return item.order == order;
			});
			if (index >= this.categoryList.length - 1) return;
			const item = this.categoryList.splice(index, 1)[0];
			this.categoryList.splice(index + 1, 0, item);
		},
		addItem(e) {
			if (this.categoryLimit.length >= 8) return;
			this.categoryList.push({
				order: this.categoryList.length + 1,
				kor: "",
				eng: "",
				jap: "",
				chi: "",
			});
			if (this.categoryList.length >= this.categoryLimit) {
				document.querySelector("#addItem").disabled = true;
			}
		},
		removeItem(e) {
			if (
				document.querySelectorAll("#dataTable input[type='checkbox']:checked")
					.length < 1
			) {
				alert("삭제할 항목을 선택해 주세요.");
				return;
			}

			let list = [];
			document
				.querySelectorAll("#dataTable input[type='checkbox']:checked")
				.forEach(function (element) {
					const tr = element.parentElement.parentElement;
					list.push(tr.querySelector("[name='order']").value);
				});

			list.forEach((i) => {
				const index = this.categoryList.findIndex((item) => {
					return item.order == i;
				});
				if (index > -1) this.categoryList.splice(index, 1);
			});

			this.reorderList();

			document
				.querySelectorAll("#moveUp, #moveDown, #removeItem")
				.forEach((button) => (button.disabled = true));
			document.querySelector("#addItem").disabled = false;
			document
				.querySelectorAll("#dataTable [type='checkbox']")
				.forEach((element) => (element.checked = false));
		},
		putData(e) {
			const order = document.querySelector("#languageTable [name='order']").value;
			if (!order) return;
			const name = e.target.name;
			const value = e.target.value;

			this.categoryList.find( item  => item.order == order)[name] = value;
			let input;
			document
				.querySelectorAll("#dataTable input[name='order']")
				.forEach((element) => {
					if (order == element.value) {
						input = element.parentElement.querySelector(`[name='${name}']`);
					}
				});

			if (input) input.value = value;
		},
		changeKeyword(e) {
			const target = e.currentTarget || e.target;
			const value = target.value;
			document.querySelector(
				"#languageTable tbody tr:first-child td:nth-child(3)"
			).innerHTML = value;
			const order = target.parentElement.querySelector("[name='order']").value;
			this.categoryList.find( e => e.order == order).kor = value;
		},
		emptyLanguageTable() {
			document.querySelectorAll("#languageTable input").forEach((input) => {
				input.value = "";
			});
			document.querySelector(
				"#languageTable tbody tr:first-child td:nth-child(3)"
			).innerHTML = "";
		},
		reorderList() {
			this.categoryList.forEach((item, idx) => (item.order = idx + 1));
		},
		parents(element, tagName) {
			let parent = element.parentElement;
			while (
				!(
					parent.tagName.toLowerCase() == tagName ||
					parent.tagName.toLowerCase() == "body"
				)
			) {
				parent = parent.parentElement;
			}
			return parent;
		},
		inputFocus(e) {
			document
				.querySelectorAll("tbody tr")
				.forEach((tr) => tr.classList.remove("selected"));
			const tr = this.parents(e.target, "tr");
			tr.classList.add("selected");
			const value = e.target.value;
			document.querySelector(
				"#languageTable tbody tr:first-child td:nth-child(3)"
			).innerHTML = value;
			const hiddens = e.target.parentElement.querySelectorAll(
				"[type='hidden']"
			);
			document
				.querySelectorAll(
					"#languageTable input[type='text'], #languageTable input[type='hidden']"
				)
				.forEach((input, idx) => {
					const name = input.getAttribute("name");
					hiddens.forEach((hidden) => {
						if (hidden.getAttribute("name") == name) input.value = hidden.value;
					});
				});
		}
	},
};
</script>