var func = function(){
	this.guid = function(key){
		key = (typeof key === 'undefined') ? "std" : key;

		//xxxxxxxx-2015-cths-yxxx-xxxxxxxxxxxx

		return ("xxxyxxxyxxx" + key).replace(/[xy]/g, function(c) {
	    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	    		return v.toString(16);
			});
	}
}

module.exports = func;