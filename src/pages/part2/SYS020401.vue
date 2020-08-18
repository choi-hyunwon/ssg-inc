<template>
<div>

	<div class="con_tit">
		<h3>API 기본정보</h3>
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
	    <th>API 명</th>
	    <td>
		-
	    </td>
	    <th>서비스</th>
	    <td>
			<select>
			<option>--</option>
			</select>
	    </td>
	</tr>
	<tr>
	    <th>호출 URL</th>
	    <td colspan="3">
		-
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->



	<div class="ly_con">
		<div>
			<div class="con_tit">
				<h3>전송 파라미터</h3>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
			
			<div style="margin-top:-20px;">
				<textarea rows=10 readonly></textarea>
			</div>
		</div>
		<div>
			<div class="con_tit">
				<h3>결과 파라미터</h3>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
			
			<div style="margin-top:-20px;">
				<textarea rows=10 readonly></textarea>
			</div>
		</div>
	</div>


</div>
</template>