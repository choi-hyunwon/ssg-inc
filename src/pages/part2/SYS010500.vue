<template>
<div>

	<div class="page_tit">
		<h2>[시스템]메뉴 관리</h2>
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
	<col style="width:100px" />
	<col style="width:auto" />
	</colgroup>
	<tbody>
	<tr>
	    <th>메뉴 ID</th>
	    <td>
	    	<input type="text" />
	    </td>
	    <th>메뉴명</th>
	    <td>
	    	<input type="text" />
	    </td>
	    <th>프로그램ID</th>
	    <td>
	    	<input type="text" />
	    </td>
	    <th>프로그램명</th>
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
				<h3>그룹코드</h3>
				<p class="num">[총 0 건]</p>
				<div class="btn">
					<button class="s_btn icon_01">행추가</button>
					<button class="s_btn icon_01">행삭제</button>
				</div>
			</div>

			<div class="grid_edge">
			여기 트리
			</div>
		</div>

		<div>
			<div class="con_tit">
				<h3>메뉴 목록</h3>
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
			    <th class="e">메뉴 ID</th>
			    <td>-</td>
			    <th>상의메뉴 ID</th>
			    <td>-</td>
			</tr>
			<tr>
			    <th class="e">사용여부</th>
			    <td>
					<select>
					<option>--</option>
					</select>
			    </td>
			    <th class="e">폴더여부</th>
			    <td>
					<select>
					<option>--</option>
					</select>
			    </td>
			</tr>
			<tr>
				<th>정렬순서</th>
				<td colspan="3">-</td>
			</tr>
			<tr>
				<th>프로그램</th>
				<td colspan="3">-</td>
			</tr>
			<tr>
				<th>메뉴설명</th>
				<td colspan="3">-</td>
			</tr>
			</tbody>
			</table>
			</div><!-- // form_table -->

			<div class="con_tit">
				<h3>메뉴 목록</h3>
			</div>
			<div class="grid_edge">
			여기 그리드
			</div>
		</div>
	</div>

	

			
</div>
</template>