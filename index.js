var fs = require('fs');
var imgextension = ['png','jpg'];
var arr=[];
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
						if(ext=='jpg' || ext=='png')     arr.push(list[i]);
					}
				}
				var rand,
					temp,
					len=arr.length,
					ret = arr.slice();
				while(len){
					rand=Math.floor(Math.random()*len--);
					temp=ret[len];
					ret[len]=ret[rand];
					ret[rand]=temp;
				}
				console.log(ret);
			});
		}
	});
}