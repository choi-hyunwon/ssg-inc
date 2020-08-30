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
							<select id="firstSelect">
								<option>전체</option>
								<option v-for="item of categoryList" :key="item.order" :value="item.order">{{ item.kor }}</option>
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
							></flat-pickr> ~<flat-pickr
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
			<SYS050015Popup v-slot="slotProps" :ddata="categoryList">
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
			<v-tab-item v-for="tab of tabs" :key="tab.id">
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
								<td colspan="3">
									<div class="example">
										<quill-editor
											ref="myQuillEditor"
											:options="editorOption"
											name="testConts"
											v-validate="'required'"
											data-vv-as="내용"
											@blur="$onEditorBlur($event)"
											@focus="$onEditorFocus($event)"
											@ready="$onEditorReady($event)"
											@change="$onEditorChange($event)"
											class="editor text-left"
											:class="{'select': true, 'is-invalid': errors.has('testConts')}"
										></quill-editor>
									</div>
									<div class="inp_tip">
										<span
											v-show="errors.has('testConts')"
											class="help is-invalid"
										>{{ errors.first('testConts') }}</span>
									</div>
								</td>
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
			</v-tab-item>
		</v-tabs>
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
							<select id="secondSelect">
								<option>전체</option>
								<option v-for="item of categoryList" :key="item.order" :value="item.order">{{ item.kor }}</option>
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

import commonUtils from "@/plugins/commonUtils";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import Quill from "quill";
import { quillEditor } from "vue-quill-editor";

import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);

export default {
	name: "SYS050015",
	components: {
		SYS050015Popup,
		quillEditor,
	},
	watch: {
		"$route.path": function () {
			this.activeTab = 0;
		},
	},
	data() {
		return {
			categoryList: SYS050015Popup.data().categoryList,
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
			sampleEditor: {
				testConts: null,
			},
			editorOption: {
				modules: {
					toolbar: {
						container: [
							[
								{
									size: ["small", false, "large"],
								},
							],
							["bold", "italic", "underline"],
							[
								{
									list: "ordered",
								},
								{
									list: "bullet",
								},
							],
							["image"],
						],
						handlers: {
							// image: this.$uploadFunction
						},
					},
					history: {
						delay: 1000,
						maxStack: 50,
						userOnly: false,
					},
					imageDrop: true,
				},
				placeholder: "내용을 입력하세요.",
			},

			editorLimit: 0, // 무제한
		};
	},

	mounted: function mounted() {
		this.quillEditor = this.$refs.myQuillEditor.quill;
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
		$onEditorBlur: function $onEditorBlur(quill) {
			// console.log('editor blur!', quill)
		},
		$onEditorFocus: function $onEditorFocus(quill) {
			// console.log('editor focus!', quill)
		},
		$onEditorReady: function $onEditorReady(quill) {},
		$onEditorChange: function $onEditorChange({ quill, html, text }) {
			if (this.editorLimit && quill.getLength() > this.editorLimit) {
				quill.deleteText(this.editorLimit, quill.getLength());
			}
		},

		$uploadFunction: function $uploadFunction(e) {
			const input = document.createElement("input");
			input.setAttribute("type", "file");
			input.setAttribute("accept", "image/*");
			input.click();

			input.onchange = async () => {
				const file = input.files[0];
				const formData = new FormData();
				formData.append("image", file);

				//const range = this.quillEditor.getSelection(true);
				//this.quillEditor.setSelection(range.index + 1);

				// 파일업로드
				//this.quillEditor.insertEmbed(range.index, 'image', file); //임시
			};
		},

		$beforeSave: function $beforeSave() {
			const _this = this;

			_this.$validator.validateAll().then((isValid) => {
				if (isValid) {
					console.log("저장");
				} else {
					commonUtils.$alertValidationError(_this.$validator);
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.example {
	display: flex;
	height: 20rem;
	overflow: hidden;

	.editor {
		width: 100%;
	}

	$toolbar-height: 46px;

	.editor {
		padding-bottom: $toolbar-height;
	}
}
</style>