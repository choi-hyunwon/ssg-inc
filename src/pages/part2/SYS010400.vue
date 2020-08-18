<template>
<div>

	<div class="page_tit">
		<h2>[시스템]프로그램 관리</h2>
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
	</colgroup>
	<tbody>
	<tr>
	    <th>프로그램 ID</th>
	    <td>
	    	<input type="text" />
	    </td>
	    <th>프로그램</th>
	    <td>
	    	<input type="text" />
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // search_table -->


	<div class="con_tit">
		<h3>프로그램 정보</h3>
	</div>

	<div class="form_table"><!-- form_table -->
	<table>
	<colgroup>
	<col style="width:150px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>프로그램 ID</th>
	    <td>
	    	-
	    </td>
	    <th>프로그램명</th>
	    <td>
	    	-
	    </td>
	    <th>사용여부</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	</tr>
	<tr>
		<th>URL</th>
		<td colspan="5">-</td>
	</tr>
	<tr>
		<th>프로그램 설명</th>
		<td colspan="5">-</td>
	</tr>
	<tr>
		<th>개인정보포함여부</th>
		<td colspan="5"><input type="checkbox" /></td>
	</tr>
	<tr>
		<th>화면설정관리여부</th>
		<td colspan="5"><input type="checkbox" /></td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->




	<div class="con_tit">
		<h3>프로그램 설정</h3>
	</div>

	<div class="form_table list"><!-- form_table -->
	<table>
	<colgroup>
	<col style="width:auto" />
	</colgroup>
	<thead>
	<tr>
		<th>조회</th>
		<th>신규</th>
		<th>삭제</th>
		<th>저장</th>
		<th>엑셀</th>
		<th>출력</th>
		<th>기능버튼1</th>
		<th>기능버튼2</th>
		<th>기능버튼3</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	    <td><input type="checkbox" /></td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->



	<div class="con_tit">
		<h3>언어별 프로그램 기능 버튼명</h3>
	</div>

	<div class="grid_edge">
	여기 그리드
	</div>
	

			
</div>
</template>