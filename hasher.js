var Hasher = (function(w){
	var loc = w.location,
		hash,
		hashes = {},
		def,
		before,
		add = w.attachEvent ? 'attachEvent' : 'addEventListener',
		on = w.attachEvent ? 'on' : '',
		onChange = function(){
			hash = loc.hash.slice(1);

			var callback = hashes[hash];

			before instanceof Function && before();

			if(callback && callback instanceof Function)
				callback();
			else if(def instanceof Function){
				def();
			}
		};

	w[add](on + 'load', onChange);
	w[add](on + 'hashchange', onChange);

	return function(h, options){
		options = options || {};
		var type = typeof h,
			callback;

		if(type == 'object'){
			for(var prop in h) (callback = h[prop]) ? (hashes[prop] = callback) : (delete hashes[prop]);
		}else if(type == 'string'){
			hash !== h ? (loc.hash = h) : onChange();
		}

		def = options.default;
		before = options.beforeEach;
	}
})(window);