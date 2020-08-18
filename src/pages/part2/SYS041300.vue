<template>
<div>

	<div class="page_tit">
		<h2>[시스템]가맹점 정책 관리</h2>
		<ul>
			<li>HOME</li>
			<li>1댑스</li>
			<li>2댑스</li>
		</ul>
	</div>

	<div class="comm_btn">
		<button>조회</button>
		<button>저장</button>		
	</div>

	<div class="con_tit">
		<h3>사용자</h3>
	</div>

	<div class="form_table"><!-- form_table -->
	<table>
	<colgroup>
	<col style="width:100px" />
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>사용자</th>
	    <td>
			<input type="checkbox" /> <label>사용</label>
	    </td>
	    <td>
			<input type="radio" /> <label>전체일치 (Equal)</label>
			<input type="radio" /> <label>부분일치 (Like)</label>
	    </td>
	</tr>
	<tr>
	    <th>상태</th>
	    <td>
			<input type="checkbox" /> <label>사용</label>
	    </td>
	    <td>
	    </td>
	</tr>
	<tr>
	    <th>가입일자</th>
	    <td>
			<input type="checkbox" /> <label>사용</label>
	    </td>
	    <td>
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->


	<div class="con_tit">
		<h3>사용자</h3>
	</div>

	<div class="form_table"><!-- form_table -->
	<table>
	<colgroup>
		<col style="width:100px" />
		<col style="width:60px" />
		<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>승인절차</th>
	    <td colspan="2">
			<input type="checkbox" /> <label>사용</label>
	    </td>
	</tr>
	<tr>
	    <th rowspan="5">가맹점 유형</th>
	    <td colspan="2">
			명칭등록
	    </td>
	</tr>
	<tr>
	    <td>
			1레밸
	    </td>
	    <td>
	    	<input type="text" />
	    </td>
	</tr>
	<tr>
	    <td>
			2레밸
	    </td>
	    <td>
	    	<input type="text" />
	    </td>
	</tr>
	<tr>
	    <td>
			3레밸
	    </td>
	    <td>
	    	<input type="text" />
	    </td>
	</tr>
	<tr>
	    <td>
			4레밸
	    </td>
	    <td>
	    	<input type="text" />
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->


	<div class="con_tit">
		<h3>사용자</h3>
	</div>

	<div class="form_table"><!-- form_table -->
	<table>
	<colgroup>
		<col style="width:100px" />
		<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>승인절차</th>
	    <td>
			<input type="checkbox" /> <label>사용</label>
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->







</div>
</template>