#Hasher

This is a simple helper that let's you react to hash changes
and make this changes

#Use

To listen to changes, it is as simple as calling:

	Hasher({
		'hashName': function(){
			//and a callback
		},
		'moreHashNames': function(){
		
		},
		'': function(){
			//this will be called if there is no hash
		}
	})

to change hash you can simply call:

	Hasher('hashName');
	
Isn't that simple ?

This way you can very simply build one page web apps / sites.

Hasher accepts second parameter as well that contains additional options

	Hasher({},{
		default: function(){
			//this will be run if hash does not match any specified
		},
		beforeEach: function(){
			//this will run before each callbacks on hash change
		}
	})

Enjoy!

# Licence
	Use as is 
		Share however you want
			Feel free to change and experiment