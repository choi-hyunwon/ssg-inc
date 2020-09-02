<template>
	<div>
		<slot :togglePopup="togglePopup"></slot>
		<b-modal  v-model="showPopup">
			<div id="layers">
			<div class="layer flex column" id="layer008">
				<div class="page_tit">
					<button type="button" class="floatRight c_btn">조회</button>
					<h2>이벤트 게시 관리</h2>
				</div>
				<div class="form_table">
					<table id="firstTable">
						<colgroup>
							<col style="width: 100px" />
							<col style="width: auto" />
						</colgroup>
						<tbody>
							<tr>
								<th>이벤트명</th>
								<td>
									<input type="text" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="flex grow">
					<div class="form_table list">
						<div class="con_tit">
							<h3>이벤트 목록</h3>
							<span class="smallNotice">※ 이벤트 메뉴에 게시할 상품을 선택해주세요.</span>
						</div>
						<table id="firstTable">
							<colgroup>
								<col style="width:30px" />
								<col style="width:50px" />
								<col style="width:250px" />
							</colgroup>
							<thead>
								<tr>
									<th>
										<input type="checkbox" />
									</th>
									<th>No.</th>
									<th>이벤트명</th>
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

					<div class="width60 alignCenter justifyCenter flexBasisAuto flexGrow0 flex column">
						<button type="text" class="s_btn">추가&rtrif;</button>
						<button type="text" class="s_btn">&ltrif;삭제</button>
					</div>

					<div class="form_table list">
						<div class="con_tit">
							<h3>게시 이벤트</h3>
						</div>
						<table id="secondTable">
							<colgroup>
								<col style="width:30px" />
								<col style="width:50px" />
								<col style="width:180px" />
								<col style="width:300px" />
							</colgroup>
							<thead>
								<tr>
									<th>
										<input type="checkbox" />
									</th>
									<th>No.</th>
									<th>이벤트명</th>
									<th>게시기간</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="data of eventData" :key="data.idx">
									<td><input type="checkbox" /></td>
									<td>{{ data.idx }}</td>
									<td>{{ data.name }}</td>
									<td class="left doubleLine">
										<label>
											<label><input type="checkbox" :checked="data.always" />항시</label>
										</label>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											:config="configs.start"
											placeholder="시작일자"
											name="startDate"
											@on-change="onStartChange"
											:value="data.startDate"
										></flat-pickr>
										<select>
											<option v-for="hour in 24" :value="hour" :key="hour">{{ 10 > hour - 1 ? '0' + (hour - 1) : hour - 1}}</option>
										</select>
										<select>
											<option v-for="minute in 60" :value="minute" :key="minute">{{ 10 > minute - 1 ? '0' + (minute - 1) : minute - 1}}</option>
										</select>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											:config="configs.end"
											placeholder="종료일자"
											name="endDate"
											@on-change="onEndChange"
											:value="data.endDate"
										></flat-pickr>

										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
									</td>
								</tr>
								<!-- <tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>1</td>
									<td class="left">힘내요 대한민국</td>
									<td class="left doubleLine">
										<label>
											<input type="checkbox" />항시
										</label>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="startDate"
											:config="configs.start"
											placeholder="시작일자"
											name="startDate"
											@on-change="onStartChange"
										></flat-pickr>

										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="endDate"
											:config="configs.end"
											placeholder="종료일자"
											name="endDate"
											@on-change="onStartChange"
										></flat-pickr>
										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>1</td>
									<td class="left">힘내요 대한민국</td>
									<td class="left doubleLine">
										<label>
											<input type="checkbox" />항시
										</label>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="startDate"
											:config="configs.start"
											placeholder="시작일자"
											name="startDate"
											@on-change="onStartChange"
										></flat-pickr>

										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="endDate"
											:config="configs.end"
											placeholder="종료일자"
											name="endDate"
											@on-change="onStartChange"
										></flat-pickr>
										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>1</td>
									<td class="left">힘내요 대한민국</td>
									<td class="left doubleLine">
										<label>
											<input type="checkbox" />항시
										</label>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="startDate"
											:config="configs.start"
											placeholder="시작일자"
											name="startDate"
											@on-change="onStartChange"
										></flat-pickr>

										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="endDate"
											:config="configs.end"
											placeholder="종료일자"
											name="endDate"
											@on-change="onStartChange"
										></flat-pickr>
										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" />
									</td>
									<td>1</td>
									<td class="left">힘내요 대한민국</td>
									<td class="left doubleLine">
										<label>
											<input type="checkbox" />항시
										</label>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="startDate"
											:config="configs.start"
											placeholder="시작일자"
											name="startDate"
											@on-change="onStartChange"
										></flat-pickr>

										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
										<br />
										<flat-pickr
											autocomplete="off"
											class="width100"
											v-model="endDate"
											:config="configs.end"
											placeholder="종료일자"
											name="endDate"
											@on-change="onStartChange"
										></flat-pickr>
										<select>
											<option value>00</option>
											<option value>01</option>
											<option value>02</option>
											<option value>03</option>
											<option value>04</option>
											<option value>05</option>
											<option value>06</option>
											<option value>07</option>
											<option value>08</option>
											<option value>09</option>
											<option value>10</option>
											<option value>11</option>
											<option value>12</option>
											<option value>13</option>
											<option value>14</option>
											<option value>15</option>
											<option value>16</option>
											<option value>17</option>
											<option value>18</option>
											<option value>19</option>
											<option value>20</option>
											<option value>21</option>
											<option value>22</option>
											<option value>23</option>
										</select>

										<select>
											<option>00</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
										</select>
									</td>
								</tr> -->
							</tbody>
						</table>
						<div class="textRight marginTop10">
							<button type="button" class="s_btn">&utrif;1</button>
							<button type="button" class="s_btn">
								<span class="rotate180 inlineBlock">&utrif;</span>1
							</button>
							<button type="button" class="s_btn">&utrif;10</button>
							<button type="button" class="s_btn">
								<span class="rotate180 inlineBlock">&utrif;</span>10
							</button>
						</div>
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
	name: "SYS050008Popup",

	data() {
		return {
			eventData: null,
			configs: {
				start: {
					allowInput: true,
					dateFormat: "Y-m-d",
					altFormat: "Y-m-d",
					minDate: null,
					maxDate: null,
					method: function () {
						console.log(arguments);
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

	mounted() {
		this.eventData = this.$parent.eventData;
		// flatpickr('#datePicker');
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
