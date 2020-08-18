/**
 * 그리드 Custom Editor Type='text'
 */	
class CustomTextEditor {
  constructor(props) {
    const el = document.createElement('input');
    const { maxLength } = props.columnInfo.editor.options;
    const { grid, rowKey, columnInfo } = props;

    el.type = 'text';
    el.maxLength = maxLength;
    el.value = String(props.value);
    
    el.addEventListener('input', () => {
      grid.setValue(rowKey, columnInfo.name, el.value);
    });
    
    this.el = el;
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
  }
}

/**
 * 그리드 Custom Editor Type='select'
 */
class CustomSelectEditor {
  constructor(props) {
    const el = document.createElement('select');
    const { grid, rowKey, columnInfo, editable } = props;

    el.value = String(props.value);
	
	el.addEventListener('change', () => {
      grid.setValue(rowKey, columnInfo.name, el.value);
    });
    
	let arrItems = columnInfo.editor.options.listItems; 
	for(let items of arrItems) {
		el.append(new Option(items.text, items.value));
    }
	        
    this.el = el;
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }
}

import commonUtils from '@/plugins/commonUtils'

export default {
	
	/**
	 * 그리드 필수값 체크
	 * @param 그리드 object 
	 * @return boolean
	 */	
	$checkGridValidation : function $checkGridValidation (targetGrid) {
		const valiData = targetGrid.invoke('validate');
		const gridColumns = targetGrid.invoke('getColumns');
		
		var valiMsg = "";
		if(valiData.length > 0) {
			for(let errors of valiData[0].errors) {
		    	for(let columns of gridColumns) {
		        	if(errors.columnName == columns.name) {
		        		if(valiMsg != "") {
			        		valiMsg += '\r\n'
				        }
		        		valiMsg += columns.header + ' 은/는 필수 입력 항목 입니다.'
		        	}
		        }
		    }
		}
		
		if(valiMsg == "") {
		    return true;
		} else {
			commonUtils.$alert(valiMsg);
			return false;
		}
	},
	
	/**
	 * 그리드 저장데이터 수집
	 * @param 그리드 object 
	 * @param 수집유형코드('I': 등록, 'U': 수정, 'D': 삭제) String Array 
	 * @return Array
	 */	
	$createArrayData : function $createArrayData (targetGrid, targetType) {
		const modifiedRows = targetGrid.invoke('getModifiedRows');
		const arrData = [];
		
		for(let type of targetType) {
			const gridRows = [];
			if (type == "I") {
				gridRows = modifiedRows.createdRows;
			} else if (type == "U") {
				gridRows = modifiedRows.updatedRows;
			} else if (type == "D") {
				gridRows = modifiedRows.deletedRows;
			}
			
			if(gridRows.length > 0) {
		        for(let gridRow of gridRows){
		        	gridRow.saveType = type;
		        	arrData.push(gridRow);
		        }
	        }
	    }
		
		return arrData;
	}
}

export { CustomTextEditor, CustomSelectEditor }
