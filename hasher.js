var Hasher = (function(w){
	var hashes,
		add = w.attachEvent ? 'attachEvent' : 'addEventListener',
		on = w.attachEvent ? 'on' : '',
		onChange = function(){
			var callback = hashes[w.location.hash.slice(1)];
			callback && callback instanceof Function && callback();
		};

	w[add](on + 'load', onChange);
	w[add](on + 'hashchange', onChange);

	return function(options){
		var type = typeof options;
		if(type == 'object'){
			hashes = options
		}else if(type == 'string'){
			w.location.hash = options;
		}
	}
})(window);