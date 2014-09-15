var fs   = require('fs');
var each = require('each-async');
var path = require('path');



var imgextension = ['png','jpg'];
var arr=[];

function random-image(){
	if(!(this instanceof random-image)){
		return new random-image();
	}
	this._where=[];
	this._arr = [];
}

random-image.prototype.type = function(str){
	if(!arguments.length){
		this._type = str;
		return this;
	}
}

random-image.prototype.where = function(where){
	if(!arguments.length){
		return this._where;
	}
	if(Array.isArray(where)){
		this._where =this._where.concat(where);
	}else{
		this._where.push(where);
	}
	return this;
}

random-image.prototype.run = function(cb){
	var that = this;
	this.read(function(err,files){
		if(err){
			cb(err);
			return;
		}
		self.stat(files)
	})
}


/*module.exports = function(dir){
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
}*/