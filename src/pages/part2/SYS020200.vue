<template>
<div>

	<div class="page_tit">
		<h2>[시스템]API KEY 관리</h2>
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
	    <th>고객사</th>
	    <td>
	    	<div class="code_sea">
	    		<p><input type="text" readonly /></p>
	    		<p><button>검색</button></p>
	    		<p><input type="text" /></p>
	    	</div>
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // search_table -->


	<div class="con_tit">
		<h3>게시판 목록 제목</h3>
	</div>
	
	<div class="grid_edge">
	여기 그리드
	</div>

	<div class="con_tit">
		<p class="num">[총 0 건]</p>
		<div class="btn">
		<button class="s_btn">KEY 생성</button>
		</div>
	</div>

	<div class="grid_edge">
	여기 그리드
	</div>


</div>
</template>