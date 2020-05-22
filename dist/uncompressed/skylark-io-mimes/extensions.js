define([
	"./mimes",
	"./types"
],function(mimes,types) { 
	return mimes.extenstions = {
		getMimeType : function(ext,category) {
			for (var t in types) {
				if (types[t] === ext && (!category || t.startsWith(category))) {
					return t;
				}
			}
		}	
	};
});