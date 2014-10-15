var fs   = require('fs');
var path = require('path');


function random_image(){
	if(!(this instanceof random_image)){
		return new random_image();
	}
	this._where = [];
	this._type  = ['jpeg','jpg','gif','tif','tiff','pbm','pcd','pct','pcx','pic','pict','psd','ps','psd',
					'pnt','psp','pict','ai','drw','eps','ps','svg','yuv','tif','thm','psd','bmp','3dm',
					'max'];
	this._arr   = [];
}

random_image.prototype.file_type = function(str){
	if(!arguments.length){
		this._type = str;
		return this._type;
	}
	if(Array.isArray(str)){
		this._type = this._type.concat(str);
	}else{
		this._type.push(this._type);
	}
	return this._type;
}

random_image.prototype.where = function(where){
	if(!arguments.length){
		return this._where;
	}
	if(Array.isArray(where)){
		this._where =this._where.concat(where);
	}else{
		this._where.push(where);
	}
	return this._where;
}

random_image.prototype.run = function(){
	var that = this;
	for(var i=0;i<that._where.length;i++){
		fs.readdir(that._where[i],function(err,files){
			if(err){
				return;
			}
			for(var j=0;j<files.length;j++){
				var ext = files[j].split('.').pop();

				if(ext == that._type[0]) {
					that._arr.push(files[j]);
				}
			}
			return that._arr;
		});
	}
}

module.exports = random_image;
