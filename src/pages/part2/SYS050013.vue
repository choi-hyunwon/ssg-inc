<template>
<div>
    <div class="page_tit">
        <h2>Naver Map 관리</h2>
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

	<div class="con_tit"><h3>Naver Map API 설정</h3></div>
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
                    <th>API Client ID</th>
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
    },
};
</script>