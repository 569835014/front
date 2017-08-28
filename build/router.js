var fs = require("fs");

//path模块，可以生产相对和绝对路径
var path = require("path");


//获取当前目录绝对路径，这里resolve()不传入参数
var filePath = path.resolve('..','src');
filePath=path.join(filePath,'view');


var json=[]
//读取文件目录

fs.readdir(filePath,function(err,files){
  if(err){
    console.log(err);
    return;
  }
  var count = files.length;

  //console.log(files);
  var results = {};
  files.forEach(function(filename,index){

    //filePath+"/"+filename不能用/直接连接，Unix系统是”/“，Windows系统是”\“
    fs.stat(path.join(filePath,filename),function(err, stats){
      if (err) throw err;
      //文件
      if(stats.isFile()){
        if(getdir(filename) === 'vue'){
          json.push(filename);

        }
        // (getdir(filename) == 'html')&&(fileArr.push(filename);writeFile(newUrl));
        //    console.log("%s is file", filename);
      }else if(stats.isDirectory()){
        // console.log("%s is a directory文件目录", filename);
        //返回指定文件名的扩展名称
        //console.log(path.extname("pp/index.html"));
//var readurl = filePath+'/'+filename;
          //filePath+"/"+filename不能用/直接连接，Unix系统是”/“，Windows系统是”\“
          //    console.log(path.join(filePath,filename));


        fs.readdir(path.join(filePath,filename),function(err,_files){
          var url=path.join(filePath,filename)
          _files.forEach(function (_filename) {
              fs.stat(path.join(url,_filename),function(err, _stats){
              if (err) throw err;
              //文件
              if(_stats.isFile()) {
                if (getdir(_filename) === 'vue') {
                  json.push(_filename);
                }
                console.log(json)
                writeFile();
              }
            })
          })

        });
      }

    });

  });

});


//获取后缀名
function getdir(url){
  var arr = url.split('.');
  var len = arr.length;
  return arr[len-1];
}

//获取文件数组
function readFile(readurl,name,index,count){

  var name = name;
  fs.readdir(readurl,function(err,files){
    if(err){console.log(err);return;}

    files.forEach(function(filename){
      // console.log(path.join(readurl,filename));

      fs.stat(path.join(readurl,filename),function(err, stats){
        if (err) throw err;

        if(stats.isFile()){
          if(getdir(filename) === 'vue'){
            json.push(filename);



          }
          //是子目录
        }else if(stats.isDirectory()){
          var dirName = filename;
          readFile(path.join(readurl,filename),name+'/'+dirName,index,count);
          //利用arguments.callee(path.join())这种形式利用自身函数，会报错
          //arguments.callee(path.join(readurl,filename),name+'/'+dirName);
        }
      });
    });
  });
}

// 写入到filelisttxt文件
function writeFile(){
  var _filePath = path.resolve('..','src');
  _filePath=path.join(_filePath,'router')
  fs.writeFileSync(path.join(_filePath,'router.json'), JSON.stringify(json));

}
