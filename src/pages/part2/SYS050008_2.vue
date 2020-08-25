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
                    <td class="flex alignCenter">
                        <flat-pickr class="width300" v-model="startDate" :config="configs.start" placeholder="시작일자" name="startDate" @on-change="onStartChange"></flat-pickr>&nbsp;~&nbsp;<flat-pickr class="width300" v-model="endDate" :config="configs.end" placeholder="종료일자" name="endDate" @on-change="onStartChange"></flat-pickr>
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

    <div class="con_tit">
		<select class="floatRight">
			<option>5개씩보기</option>
			<option>10개씩보기</option>
			<option>20개씩보기</option>
			<option>30개씩보기</option>
			<option>40개씩보기</option>
			<option>50개씩보기</option>
		</select>
        <h3>이벤트 목록</h3>
        <p class="num">[총 30 건]</p>
        <button class="s_btn marginLeft10">게시 관리</button>
    </div>

    <div class="form_table list">
        <table>
            <colgroup>
                <col style="width:50px" />
                <col style="width:50px" />
                <col style="width:80px" />
                <col style="width:auto" />
                <col style="width:200px" />
                <col style="width:100px" />
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

                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td>
                        <img class="couponImage" src="@/images/coupon.png" alt />
                    </td>
                    <td class="left">힘내요 대한 민국</td>
                    <td>2020-08-21 ~ 2020-09-01</td>
                    <td>윤도현 밴드</td>
                    <td>참여형</td>
                    <td>노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>

                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td>
                        <img class="couponImage" src="@/images/coupon.png" alt />
                    </td>
                    <td class="left">힘내요 대한 민국</td>
                    <td>2020-08-21 11:23:23</td>
                    <td>윤도현 밴드</td>
                    <td>참여형</td>
                    <td>노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td>
                        <img class="couponImage" src="@/images/coupon.png" alt />
                    </td>
                    <td class="left">힘내요 대한 민국</td>
                    <td>2020-08-21 11:23:23</td>
                    <td>윤도현 밴드</td>
                    <td>참여형</td>
                    <td>노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>

                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td>
                        <img class="couponImage" src="@/images/coupon.png" alt />
                    </td>
                    <td class="left">힘내요 대한 민국</td>
                    <td>2020-08-21 11:23:23</td>
                    <td>윤도현 밴드</td>
                    <td>참여형</td>
                    <td>노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td>
                        <img class="couponImage" src="@/images/coupon.png" alt />
                    </td>
                    <td class="left">힘내요 대한 민국</td>
                    <td>2020-08-21 11:23:23</td>
                    <td>윤도현 밴드</td>
                    <td>참여형</td>
                    <td>노출</td>
                    <td>2020-09-21 11;32;34</td>
                </tr>

                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>100</td>
                    <td>
                        <img class="couponImage" src="@/images/coupon.png" alt />
                    </td>
                    <td class="left">힘내요 대한 민국</td>
                    <td>2020-08-21 11:23:23</td>
                    <td>윤도현 밴드</td>
                    <td>참여형</td>
                    <td>노출</td>
                    <td>2020-09-21 11;32;34</td>
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

		<div id="layers">
		<div class="layer flex column">

			<div class="page_tit">
				<button type="button" class="floatRight c_btn">조회</button>
				<h2>이벤트 게시 관리</h2>
			</div>
			<div class="form_table">
				<table>
					<colgroup>
						<col style="width: 100px" />
						<col style="width: auto" />
					</colgroup>
					<tbody>
						<tr>
							<th>이벤트명</th>
							<td><input type="text" /></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="flex grow">
				<div class="form_table list">
					<div class="con_tit">
						<h3>이벤트 목록</h3><span class="smallNotice">※ 이벤트 메뉴에 게시할 상품을 선택해주세요.</span>
					</div>
					<table>
						<colgroup>
							<col style="width:30px" />
							<col style="width:50px" />
							<col style="width:250px" />
						</colgroup>
						<thead>
							<tr>
								<th><input type="checkbox" /></th>
								<th>No.</th>
								<th>이벤트명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" /></td>
								<td>1</td>
								<td><input type="text" placeholder="분류명을 입력 하세요." /></td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>2</td>
								<td><input type="text" placeholder="분류명을 입력 하세요." /></td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>3</td>
								<td><input type="text" placeholder="분류명을 입력 하세요." /></td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>4</td>
								<td><input type="text" placeholder="분류명을 입력 하세요." /></td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>5</td>
								<td><input type="text" placeholder="분류명을 입력 하세요." /></td>
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
					<table>
						<colgroup>
							<col style="width:30px" />
							<col style="width:50px" />
							<col style="width:180px" />
							<col style="width:250px" />
						</colgroup>
						<thead>
							<tr>
								<th><input type="checkbox" /></th>
								<th>No.</th>
								<th>이벤트명</th>
								<th>게시기간</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" /></td>
								<td>1</td>
								<td class="left">힘내요 대한민국</td>
								<td class="left doubleLine">
									<label><input type="checkbox" />항시</label><br />
									<flat-pickr class="width100" v-model="startDate" :config="configs.start" placeholder="시작일자" name="startDate" @on-change="onStartChange"></flat-pickr>
									
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
									<flat-pickr class="width100" v-model="endDate" :config="configs.end" placeholder="종료일자" name="endDate" @on-change="onStartChange"></flat-pickr>
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
								<td><input type="checkbox" /></td>
								<td>1</td>
								<td class="left">힘내요 대한민국</td>
								<td class="left doubleLine">
									<label><input type="checkbox" />항시</label><br />
									<flat-pickr class="width100" v-model="startDate" :config="configs.start" placeholder="시작일자" name="startDate" @on-change="onStartChange"></flat-pickr>
									
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
									<flat-pickr class="width100" v-model="endDate" :config="configs.end" placeholder="종료일자" name="endDate" @on-change="onStartChange"></flat-pickr>
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
								<td><input type="checkbox" /></td>
								<td>1</td>
								<td class="left">힘내요 대한민국</td>
								<td class="left doubleLine">
									<label><input type="checkbox" />항시</label><br />
									<flat-pickr class="width100" v-model="startDate" :config="configs.start" placeholder="시작일자" name="startDate" @on-change="onStartChange"></flat-pickr>
									
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
									<flat-pickr class="width100" v-model="endDate" :config="configs.end" placeholder="종료일자" name="endDate" @on-change="onStartChange"></flat-pickr>
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
								<td><input type="checkbox" /></td>
								<td>1</td>
								<td class="left">힘내요 대한민국</td>
								<td class="left doubleLine">
									<label><input type="checkbox" />항시</label><br />
									<flat-pickr class="width100" v-model="startDate" :config="configs.start" placeholder="시작일자" name="startDate" @on-change="onStartChange"></flat-pickr>
									
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
									<flat-pickr class="width100" v-model="endDate" :config="configs.end" placeholder="종료일자" name="endDate" @on-change="onStartChange"></flat-pickr>
									<select>
										<option value="">00</option>
										<option value="">01</option>
										<option value="">02</option>
										<option value="">03</option>
										<option value="">04</option>
										<option value="">05</option>
										<option value="">06</option>
										<option value="">07</option>
										<option value="">08</option>
										<option value="">09</option>
										<option value="">10</option>
										<option value="">11</option>
										<option value="">12</option>
										<option value="">13</option>
										<option value="">14</option>
										<option value="">15</option>
										<option value="">16</option>
										<option value="">17</option>
										<option value="">18</option>
										<option value="">19</option>
										<option value="">20</option>
										<option value="">21</option>
										<option value="">22</option>
										<option value="">23</option>
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
						</tbody>
					</table>
					<div class="textRight marginTop10">
						<button type="button" class="s_btn">&utrif;1</button>
						<button type="button" class="s_btn"><span class="rotate180 inlineBlock">&utrif;</span>1</button>
						<button type="button" class="s_btn">&utrif;10</button>
						<button type="button" class="s_btn"><span class="rotate180 inlineBlock">&utrif;</span>10</button>
					</div>
				</div>

			</div>

			<div class="comm_btn">
				<button type="button">등록</button>
				<button type="button">취소</button>
			</div>

		</div>
	</div>

</div>
</template>

<script>
import Vue from "vue";
import {
    Korean
} from "flatpickr/dist/l10n/ko";

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
    },
};
</script>
