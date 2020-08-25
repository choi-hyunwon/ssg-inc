<template>
<div>
    <div class="page_tit">
        <h2>클럽 안내</h2>
        <ul>
            <li>HOME</li>
            <li>웹/앱</li>
            <li>멤버십 관리</li>
        </ul>
    </div>

    <div class="comm_btn">
        <button>초기화</button>
        <button>저장</button>
    </div>

    <ul class="formTabs withLine">
        <li class="on">한국어</li>
        <li>영어</li>
        <li>일본어</li>
        <li>중국어</li>
    </ul>

    <div class="con_tit">
        <h3>상단 클럽 소개</h3>
    </div>

    <div class="form_table">
        <table>
            <colgroup>
                <col style="width:100px" />
                <col style="width:100px" />
                <col style="width:auto" />
            </colgroup>
            <tbody>
                <tr>
                    <th rowspan="2" class="e">이미지</th>
                    <th>PC</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 18Mb</span>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" src="" />
                    </td>
                </tr>

                <tr>
                    <th>Mobile</th>
                    <td>
                        <span class="tdInfoSpan">000 x 000, 27Mb</span>
                        <input class="width500" type="file" />
                        <button class="s_btn">파일검색</button>
                        <button class="s_btn">파일삭제</button>
						<img class="thumb" src="" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
</template>