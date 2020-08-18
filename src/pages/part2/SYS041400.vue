<template>
<div>

	<div class="page_tit">
		<h2>가맹점관리</h2>
		<ul>
			<li>HOME</li>
			<li>1댑스</li>
			<li>2댑스</li>
		</ul>
	</div>

	<div class="comm_btn">
		<button>조회</button>
		<button>신규</button>
		<button>삭제</button>
		<button>저장</button>		
	</div>

	<div class="search_table"><!-- search_table -->
	<table>
	<colgroup>
	<col style="width:100px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>가맹점</th>
	    <td>
			<div class="code_sea">
				<p><input type="text" /></p>
				<p><button>검색</button></p>
				<p><input type="text" /></p>
			</div>
	    </td>
	    <th>상태</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	    <th>가입일자</th>
	    <td>
			달력 ~ 달력
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // search_table -->



	<div class="con_tit">
		<h3>사용자 목록</h3>
		<p class="num">[총 0 건]</p>
	</div>
	<div class="grid_edge">
	여기 그리드
	</div>



	<div class="con_tit">
		<h3>상세 정보</h3>
		<p class="num">[총 0 건]</p>
	</div>


	<div class="form_table"><!-- form_table -->
	<table>
	<colgroup>
	<col style="width:100px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th class="e">가맹점명</th>
	    <td>
			<input type="text" />
	    </td>
	    <th class="e">상태</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	</tr>
	<tr>
	    <th class="e">가맹점유형</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	    <th>1레벨(그룹)</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	</tr>
	<tr>
	    <th>2레벨(법인)</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	    <th>3레벨(브랜드)</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	</tr>
	<tr>
	    <th>가맹일자</th>
	    <td>달력</td>
	    <th>종료일자</th>
	    <td>달력</td>
	</tr>
	<tr>
	    <th>대표자성명</th>
	    <td><input type="text" /></td>
	    <th>대표전화</th>
	    <td><input type="text" /></td>
	</tr>
	<tr>
	    <th>법인등록번호</th>
	    <td><input type="text" /></td>
	    <th>사업자등록번호</th>
	    <td><input type="text" /></td>
	</tr>
	<tr>
	    <th>주소</th>
	    <td colspan="3">
	    	<div class="add_form">
		    	<input type="text" readonly /> <button class="s_btn">우편번호</button>
				<p>
					<span><input type="text" /></span>
					<span><input type="text" /></span>
				</p>
	    	</div>
	    </td>
	</tr>
	<tr>
	    <th>대표 품목명</th>
	    <td><input type="text" /></td>
	    <th>대표 브랜드명</th>
	    <td><input type="text" /></td>
	</tr>
	<tr>
	    <th>업태코드</th>
	    <td><input type="text" /></td>
	    <th>업태명</th>
	    <td><input type="text" /></td>
	</tr>
	<tr>
	    <th>업태</th>
	    <td><textarea rows="5"></textarea></td>
	    <th>종목</th>
	    <td><textarea rows="5"></textarea></td>
	</tr>
	<tr>
	    <th>비고</th>
	    <td colspan="3"><textarea rows="5"></textarea></td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->


</div>
</template>