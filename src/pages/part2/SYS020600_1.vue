<template>
<div>

	<div class="page_tit">
		<h2>[시스템]고객사별 메뉴 관리</h2>
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
	<col style="width:100px" />
	<col style="width:auto" />
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>서비스</th>
	    <td>
			<input type="text" />
	    </td>
	    <th>메뉴</th>
	    <td>
	    	<div class="code_sea">
	    		<p><input type="text" readonly /></p>
	    		<p><button>검색</button></p>
	    		<p><input type="text" /></p>
	    	</div>
	    </td>
	    <th>프로그램</th>
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



	<div class="ly_con w3_7">
		<div>
			<div class="con_tit">
				<h3>목록</h3>
				<p class="num">[총 0 건]</p>
			</div>
			<div class="grid_edge">
			여기 트리
			</div>
		</div>
		<div>
			<div class="con_tit">
				<h3>상세</h3>
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
			    <th>서비스</th>
			    <td>
					<select>
					<option>--</option>
					</select>
			    </td>
			    <th>정렬순서</th>
			    <td>
					<input type="text" />
			    </td>
			</tr>
			<tr>
			    <th>메뉴 설명</th>
			    <td colspan="3">
					<input type="text" />
			    </td>
			</tr>
			</tbody>
			</table>
			</div><!-- // form_table -->


			<div class="con_tit">
				<h3>메뉴얼</h3>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
		</div>
	</div>


</div>
</template>