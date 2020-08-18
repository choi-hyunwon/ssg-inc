<template>
        <thead>
        <tr>
            <th
                :class="{ 'cursor-pointer ' : !column.notOrder && totalRows > 0, 'fixed': column.fixedOrder }"
                v-for="(column, index) in columns" :key="index"
            >
                <div @click.prevent="$clickColHeader(column)">
                  {{ column.colName }}
                  <span
                      v-if="!column.notOrder && totalRows > 0"
                      :class="{
                      'arrow-asc' : searchInfo.orderType === 'ASC' && column.colId === searchInfo.orderColId
                      ,'arrow-desc' : searchInfo.orderType === 'DESC' || column.colId !== searchInfo.orderColId
                      ,'active' : column.colId === searchInfo.orderColId}"
                  ></span>
                </div>
                <b-form-checkbox
                    v-model="chkAll"
                    v-if="column.colId === 'chk' && !!handleCheckAllDataList && totalRows > 0"
                    @input="$clickChkAll(column)"
                ></b-form-checkbox>
            </th>
        </tr>
    </thead>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'orderableThead',

    components: {
    },

    props : {
        columns : {
            type: Array,
            required: true
        },
        searchInfo : {
            type: Object,
            required: true
        },
        totalRows : {
            type: Number,
            required: true
        },
        handleCheckAllDataList : {
            type: Array
        },
        clickHeaderFunction : {
            type: Function
        }
    },

    data() {
        return {
            chkAll : false
        }
    },

    methods :{

        $clickColHeader : function $clickColHeader (column) {
            if(!column.notOrder && !!this.clickHeaderFunction && typeof this.clickHeaderFunction === 'function'){
                if(column.colId === this.searchInfo.orderColId){
                    this.searchInfo.orderType = this.searchInfo.orderType === 'ASC' ? 'DESC' : 'ASC'
                } else {
                    this.searchInfo.orderType = 'DESC';
                }
                this.searchInfo.orderColId = column.colId;
                this.clickHeaderFunction();
            }
        },

        $clickChkAll : function $clickChkAll (column) {
            if(this.totalRows < 1 || column.colId === 'chk'){
                for(let handleData of this.handleCheckAllDataList){
                    handleData.isSelected = this.chkAll;
                }
            }
        },

        $resetChkAll : function $resetChkAll() {
            this.chkAll = false;
        }
    }
}
</script>