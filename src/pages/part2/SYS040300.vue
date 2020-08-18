<template>
<div>


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
	    <th>사번유무</th>
	    <td colspan="3">
			<input type="radio" /> <label for="">유(직원)</label>
			<input type="radio" /> <label for="">무(외부)</label>
	    </td>
	</tr>
	<tr>
	    <th>사용자명</th>
	    <td>
			<input type="text" />
	    </td>
	    <th>생년월일</th>
	    <td>달력</td>
	</tr>
	<tr>
	    <th>사번</th>
	    <td colspan="3">
			<div class="inp_sea">
				<p>
					<input type="text" />
				</p>
				<p><button>검색</button></p>
			</div>
	    </td>
	</tr>
	<tr>
	    <th>부서</th>
	    <td colspan="3">
			<select>
			<option>--</option>
			</select>
	    </td>
	</tr>
	<tr>
	    <th>사용자 ID</th>
	    <td colspan="3">
			<div class="inp_btn">
				<p class="inp_tip">
					<input type="text" />
					<span>중복체크 관련 문구</span>
				</p>
				<p><button>중복체크</button></p>
			</div>
	    </td>
	</tr>
	<tr>
	    <th>비밀번호</th>
	    <td colspan="3">
	    	<p class="inp_tip">
				<input type="password" />
				<span>비번 관련 문구</span>
			</p>
	    </td>
	</tr>
	<tr>
	    <th>비밀번호 확인</th>
	    <td colspan="3">
	    	<p class="inp_tip">
				<input type="password" />
				<span>비번 관련 문구</span>
			</p>
	    </td>
	</tr>
	<tr>
	    <th>신청사유</th>
	    <td colspan="3">
	    	<textarea rows="10"></textarea>
	    </td>
	</tr>
	</tbody>
	</table>
	</div><!-- // form_table -->





</div>
</template>