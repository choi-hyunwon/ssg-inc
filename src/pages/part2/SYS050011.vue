<template>
<div>
    <div class="page_tit">
        <h2>SNS 키 관리</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>서비스 관리</li>
        </ul>
    </div>

    <div class="comm_btn">
        <button type="button">초기화</button>
        <button type="button">저장</button>
    </div>

	<div class="con_tit"><h3>네이버 로그인</h3></div>
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
                    <th>사용여부</th>
                    <td colspan="3">
                        <select @change="toggleDisabled">
							<option value="0">미사용</option>
							<option value="1">사용</option>
                        </select>
                    </td>
                </tr>

				<tr>
                    <th>Client ID</th>
                    <td>
						<input type="text" disabled />
                    </td>

                    <th>Client Secret</th>
                    <td>
                        <input type="text" disabled />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

	<div class="con_tit"><h3>카카오 로그인</h3></div>
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
                    <th>사용여부</th>
                    <td colspan="3">
                        <select @change="toggleDisabled">
							<option value="0">미사용</option>
							<option value="1" selected>사용</option>
                        </select>
                    </td>
                </tr>

				<tr>
                    <th>Client ID</th>
                    <td>
						<input type="text" />
                    </td>

                    <th>Client Secret</th>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

	<div class="con_tit"><h3>페이스북 로그인</h3></div>
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
                    <th>사용여부</th>
                    <td colspan="3">
                        <select @change="toggleDisabled">
							<option value="0">미사용</option>
							<option value="1" selected>사용</option>
                        </select>
                    </td>
                </tr>

				<tr>
                    <th>Client ID</th>
                    <td>
						<input type="text" />
                    </td>

                    <th>Client Secret</th>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

	<div class="con_tit"><h3>구글 로그인</h3></div>
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
                    <th>사용여부</th>
                    <td colspan="3">
                        <select @change="toggleDisabled">
							<option value="0">미사용</option>
							<option value="1" selected>사용</option>
                        </select>
                    </td>
                </tr>

				<tr>
                    <th>Client ID</th>
                    <td>
						<input type="text" />
                    </td>

                    <th>Client Secret</th>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</template>

<script>
import Vue from "vue";
import {
    Korean
} from "flatpickr/dist/l10n/ko";

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
		toggleDisabled : function (e) {
			const value = "1";
			const tr = e.target.parentElement.parentElement.nextElementSibling;
			const inputs = tr.querySelectorAll("input[type='text']");
			inputs.forEach((element) => {
				if (e.target.value === value) {
					element.removeAttribute("disabled");
				} else {
					element.setAttribute("disabled", "disabled");

				}
			});
		}
    },
};
</script>