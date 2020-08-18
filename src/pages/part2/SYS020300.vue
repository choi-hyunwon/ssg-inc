<template>
<div>

	<div class="page_tit">
		<h2>[시스템]API 관리</h2>
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
			<select>
			<option>--</option>
			</select>
	    </td>
	    <th>API명</th>
	    <td>
			<input type="text" />
	    </td>
	    <th>API URL</th>
	    <td>
			<input type="text" />
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // search_table -->


	<div class="con_tit">
		<h3>목록</h3>
		<p class="num">[총 0 건]</p>
		<div class="btn">
			<button class="s_btn">API테스트</button>
			<button class="s_btn">API복사</button>
			<button class="s_btn icon_01">행추가</button>
			<button class="s_btn icon_02">행삭제</button>
		</div>
	</div>
	<div class="grid_edge">
	여기 그리드
	</div>


	<div class="ly_con">
		<div>
			<div class="con_tit">
				<h3>수신 파라미터</h3>
				<p class="num">[총 0 건]</p>
				<div class="btn">
					<button class="s_btn">리스트행추가</button>
					<button class="s_btn icon_01">행추가</button>
					<button class="s_btn icon_02">행삭제</button>
				</div>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
		</div>
		<div>
			<div class="con_tit">
				<h3>응답 파라미터</h3>
				<p class="num">[총 0 건]</p>
				<div class="btn">
					<button class="s_btn">리스트행추가</button>
					<button class="s_btn icon_01">행추가</button>
					<button class="s_btn icon_02">행삭제</button>
				</div>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
		</div>
	</div>


</div>
</template>