<template>
<div>

	<div class="page_tit">
		<h2>메시지 관리</h2>
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

	<div class="search_table"><!-- search_table -->
	<table>
	<colgroup>
	<col style="width:100px" />
	<col style="width:auto" />	
	</colgroup>
	<tbody>
	<tr>
	    <th>메시지</th>
	    <td>
			<input type="text" />
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // search_table -->


	<div class="ly_con w3_7">
		<div>
			<div class="con_tit">
				<h3>표준 메시지 목록</h3>
				<p class="num">[총 0 건]</p>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
		</div>
		<div>
			<div class="con_tit">
				<h3>언어별 메시지</h3>
				<p class="num">[총 0 건]</p>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
		</div>		
	</div>
</div>
</template>