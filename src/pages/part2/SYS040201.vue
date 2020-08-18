<template>
<div>

	<div class="page_tit">
		<h2>[공통]사용자 비밀번호 변경</h2>
		<ul>
			<li>HOME</li>
			<li>1댑스</li>
			<li>2댑스</li>
		</ul>
	</div>

	<div class="comm_btn">
		<button>저장</button>		
	</div>

	<div class="form_table"><!-- form_table -->
	<table>
	<colgroup>
	<col style="width:200px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>현재 비밀번호</th>
	    <td>
			<input type="password" />
	    </td>
	</tr>
	<tr>
	    <th>새 비밀번호</th>
	    <td>
	    	<div class="inp_tip">
			<input type="password" />
			<span>비번 도움말</span>
			</div>
	    </td>
	</tr>
	<tr>
	    <th>새 비밀번호 확인</th>
	    <td>
	    	<div class="inp_tip">
			<input type="password" />
			<span>비번 도움말</span>
			</div>
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->




</div>
</template>