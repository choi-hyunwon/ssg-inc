<template>
<div>

	<div class="page_tit">
		<h2>[시스템]메뉴 템플릿 관리</h2>
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
	</colgroup>
	<tbody>
	<tr>
	    <th>템플릿</th>
	    <td>
	    	<div class="code_sea">
	    		<p><input type="text" readonly /></p>
	    		<p><button>검색</button></p>
	    		<p><input type="text" /></p>
	    	</div>
	    </td>
	    <th>메뉴</th>
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



	<div class="ly_con">
		<div>
			<div class="ly_con">
				<div>
				
					<div class="con_tit">
						<h3>템플릿 목록</h3>
						<div class="btn">
							<button class="s_btn icon_01">행추가</button>
							<button class="s_btn icon_01">행삭제</button>
						</div>
					</div>
					<div class="grid_edge">
					여기 그리드
					</div>
					
				</div>
				<div>

					<div class="con_tit">
						<h3>전체 메뉴 목록</h3>
					</div>
					<div class="grid_edge">
					여기 트리
					</div>
				
				</div>
			</div>
		</div>
		<div class="move">
			<button class="add">추가</button>
			<button class="remove">삭제</button>		
		</div>
		<div>
			<div class="con_tit">
				<p class="num">[총 0 건]</p>
			</div>

			<div class="grid_edge">
			여기 그리드
			</div>
		</div>
	</div>





	

			
</div>
</template>