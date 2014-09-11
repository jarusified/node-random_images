var fs = require('fs');
var imgextension = ['png','jpg'];
module.exports = function(dir){
	fs.exists(dir,function(exists){
		if(exists){
			fs.readdir(dir,function(error,list){
				if(error){
					return;
				}
				else{
					for(var i=0;i<list.length;i++){
						// extension check
						var ext = list[i].split('.').pop();
					}
				}
			})

			
		}
	})
}