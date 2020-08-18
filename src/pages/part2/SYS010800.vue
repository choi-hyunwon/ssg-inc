<template>
<div>

	<div class="page_tit">
		<h2>[시스템]사용자별권한 그룹관리</h2>
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
	    <th>권한그룹</th>
	    <td>
			<input type="text" />
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // search_table -->


	<div class="ly_con">
		<div>

			<div class="con_tit">
				<h3>사용자 목록</h3>
			</div>
			<div class="grid_edge">
			여기 그리드
			</div>

		</div>
		<div>


			<div class="ly_con">
				<div>
					<div class="con_tit">
						<h3>권한그룹 메뉴 목록</h3>
					</div>
					<div class="grid_edge">
					여기 그리드
					</div>
				</div>
				<div class="move">
					<button class="add">추가</button>
					<button class="remove">삭제</button>
				</div>
				<div>
					<div class="con_tit">
						<h3>사용자별 그룹</h3>
						<p class="num">[총 0 건]</p>
					</div>
					<div class="grid_edge">
					여기 그리드
					</div>
				</div>
			</div>
		

		
		</div>
	</div>





</div>
</template>