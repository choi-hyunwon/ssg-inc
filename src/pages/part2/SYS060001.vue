<template>
    <div>

        <div class="page_tit">
            <h2>대시보드</h2>
            <ul>
                <li>HOME</li>
                <li>웹/앱</li>
                <li>통계 관리</li>
            </ul>
        </div>




        <div class="con_tit">
            <h3>주요 통계 현황</h3>
        </div>

        <div class="grid_edge">
            <div class="row state">
                <div class="col col-4">
                    <div class="box">
                        <p class="tit">페이지뷰 수(PV)</p>
                        <p class="num">500,000</p>
                        <p class="spec"><span class="count">0,000</span><span class="change"><em> ( <i class="up"></i>15% )</em></span></p>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="box">
                        <p class="tit">사용자 수(UV)</p>
                        <p class="num">500,000</p>
                        <p class="spec"><span class="count">0,000</span><span class="change"><em> ( <i class="up"></i>15% )</em></span></p>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="box">
                        <p class="tit">신규 방문자</p>
                        <p class="num">500,000</p>
                        <p class="spec"><span class="count">0,000</span><span class="change"><em> ( <i class="down"></i>15% )</em></span></p>
                    </div>
                </div>
            </div>
            <div class="chart_box">

            </div>
        </div>
        <div class="grid_edge">
            <div class="count-menu">
                <div class="visit">
                    <div class="con_tit">
                        <h3>주요 통계 현황</h3>
                    </div>
                    <div class="box form_table">
                        <table>
                            <colgroup>
                                <col style="width:100px"/>
                                <col style="width:auto"/>
                                <col style="width:100px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th colspan="2">페이지</th>
                                <th class="center">페이지뷰 수</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>페이지명</th>
                                <td>/</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>페이지명</th>
                                <td>/</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>페이지명</th>
                                <td>/</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>페이지명</th>
                                <td>/</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>페이지명</th>
                                <td>/</td>
                                <td class="right">1,000</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="click">
                    <div class="con_tit">
                        <h3>클릭수가 많은 메뉴</h3>
                    </div>
                    <div class="box form_table">
                        <table>
                            <colgroup>
                                <col style="width:100px"/>
                                <col style="width:auto"/>
                                <col style="width:100px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th colspan="2" class="left">클릭</th>
                                <th class="center">클릭 수</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>GNB1</th>
                                <td>클릭명 1</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>GNB1</th>
                                <td>클릭명 1</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>GNB1</th>
                                <td>클릭명 1</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>GNB1</th>
                                <td>클릭명 1</td>
                                <td class="right">1,000</td>
                            </tr>
                            <tr>
                                <th>GNB1</th>
                                <td>클릭명 1</td>
                                <td class="right">1,000</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="session">
                    <div class="con_tit">
                        <h3>기기별 세션</h3>
                    </div>
                    <div class="box graph">

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
    .state {
        position: relative;
        margin-bottom: 30px;
    }

    .state:after {
        content: '';
        display: block;
        clear: both;
    }

    .state .col-4 {
        width: 33.33%;
        float: left;
    }

    .state .col-4 .box {
        margin: 0 5px;
        padding: 15px;
        border: 1px solid #eee;
        box-shadow: 0 2px 18px 1px rgba(49,53,72,.1);
        border-radius: .45rem;
    }

    .state .col-4 .box .tit {
        font-size: 16px;
        line-height: 1.5;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .state .col-4 .box .num {
        text-align: right;
        font-size: 40px;
        line-height: 1.5;
    }

    .state .col-4 .box .spec {
        text-align: right;
        font-size: 16px;
        line-height: 1.5;
    }

    .state .col-4 .box .spec .count {
        margin-right: 8px;
        vertical-align: middle;
    }

    .state .col-4 .box .spec .change {
        vertical-align: middle;
    }

    .state .col-4 .box .spec .up {
        border-style: solid;
        border-width: 0 5px 9px 5px;
        border-color: transparent transparent #007bff transparent;
        line-height: 0;
        font-size: 0;
        margin: 0;
        padding: 0;
        vertical-align: middle;
        display: inline-block;
        width: 0;
        height: 0;
    }

    .state .col-4 .box .spec .down {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 9px 5px 0 5px;
        border-color: #ff0000 transparent transparent transparent;
        line-height: 0;
        font-size: 0;
        margin: 0;
        padding: 0;
        vertical-align: middle;
        display: inline-block;
    }

    .state .col-4 .box .spec em {
        vertical-align: middle;
        font-style: normal;
    }

    .chart_box {
        position: relative;
        height: 300px;
        background-color: #f4f4f4;
        margin: 0 5px;
    }

    .count-menu {
        position: relative;
    }
    .count-menu .visit {
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        padding: 0 5px;
    }

    .count-menu .click {
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .count-menu .session {
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .count-menu .session .box {
        height: 247px;
        background-color: #f4f4f4;
    }
    .count-menu th,
    .count-menu td {
        text-align: left;
        padding-left: 10px;
    }
    .count-menu thead th.left {
        text-align: left;
    }
    .count-menu thead th.center {
        text-align: center;
    }
    .count-menu thead th.right {
        text-align: right;
    }



</style>
