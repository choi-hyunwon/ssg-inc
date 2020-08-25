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
