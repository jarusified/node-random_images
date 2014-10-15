var file = require('./index.js');
var a=new file();
a.where(['/home/jarus/Pictures','/home/jarus/','/home/jarus']);
var type = a.file_type(['png','jpg']);
a.run();

