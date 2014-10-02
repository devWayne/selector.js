(function(global,doc){
	var regAdjoin=/[#||.]\w/g;

	function _split(selector){
		var result=[];
		if(selector==null){
			return result;
		}
		selector = selector.replace(/\s+/g, ' ');
		result=selector.split(" ");
		return result;
	}

	function _adjoin(selector){
		var result=[];
		if(selector.lastIndexOf(".")>0||selector.lastIndexOf("#")>0){
			result=selector.match(regAdjoin);
		}
		return result;
	}

	function selector(str){
		var splitArr=[];
		splitArr=_split(str);
		if(splitArr.length>1){
			splitArr.forEach(function(val,idx){
				splitArr[idx]=_adjoin(val);
				console.log(splitArr[idx]);
			})
		}
		return splitArr;
	}
	 global.selector=selector;
})(window,document)