/* 
process.env.test=null;
console.log(process.env.test);//'null'
process.env.test=undefined;
console.log(process.env.test)//'undefined'

process.env.Test=1
delete process.env.Test;
console.log(process.env.Test);//undefined

process.env.TEST=1;
console.log(process.env.test);//1 

process.stdout.write('这是一行数据')

process.stdin.resume()
var a,b;
process.stdout.write('请输入a的值:')
process.stdin.on('data',function(data){
    if(a==undefined){
        a=Number(data);
        process.stdout.write('请输入b的值:')
    }else{
        b=Number(data)
        process.stdout.write('结果是:'+(a+b))
        process.exit()
    }
})

process.on('exit',function(){
    //设置一个延迟
    setTimeout(function(){
        console.log('主事件循环已停止,所以不会执行')
    },0)
    console.log('退出前执行')
})
setTimeout(function(){
    console.log('1')
},500)


process.on('uncaughtExcaption',function(){
    console.log('捕获一个异常')
})
var a='123';
a.a();//触发异常事件
console.log('这句话不会显示出来')

process.on('SIGINT',function(){
    console.log('收到sigint信号')
})
console.log('试着按下ctrl+c')
setTimeout(function(){
    console.log('end')
},50000)
*/

/* 
const EventEmitter=require('events')
class MyEmitter extends EventEmitter{}
const myEmitter=new MyEmitter();
myEmitter.on('event',()=>{
    console.log('触发事件')
})
myEmitter.emit('event')

const myEmitter=new MyEmitter()
myEmitter.on('event',function(a,b){
    console.log(a,b,this,this===myEmitter)//a b myEmitter true
})
myEmitter.emit('event','a','b')

const myEmitter=new MyEmitter()
myEmitter.on('event',(a,b)=>{
    console.log(a,b,this)//a b {}
})
myEmitter.emit('event','a','b') 


var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('test1',function(){})
console.log(emitter.emit('test1'))
console.log(emitter.emit('test2'))


var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('test',function(){
    console.log(1)
}).on('test',function(){
    console.log(2)
})
emitter.emit('test')

var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('test',function(){
    console.log(1)
}).prependListener('test',function(){
    console.log(2)
})
emitter.emit('test')//2 1

var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('test',function(){
    console.log(1)
}).once('test',function(){
    console.log(2)
})
emitter.emit('test')//1 2
emitter.emit('test')//1

var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('test',function(){
    console.log(1)
}).prependOnceListener('test',function(){
    console.log(2)
})
emitter.emit('test')//2 1
emitter.emit('test')//1


var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('test',function(){
    console.log(1)
}).on('test',function(){
    console.log(2)
}).removeAllListeners('test')
emitter.emit('test')//''


var EventEmitter=require('events')
var emitter=new EventEmitter()
function show(){
    console.log(1)
}
emitter.on('test',show).removeListener('test',show)
emitter.emit('test')
console.log('show')

var EventEmitter=require('events')
var emitter=new EventEmitter()
function show(){
    console.log(1)
}
emitter.on('test',show).on('test',show).removeListener('test',show)
emitter.emit('test')
console.log('show')//1 show


var EventEmitter=require('events')
var emitter=new EventEmitter()
function show1(){
    console.log(1)
    emitter.removeListener('test',show2)
}
function show2(){
    console.log(2)
}
emitter.on('test',show1).on('test',show2).removeListener('test',show2)
emitter.emit('test')//1
emitter.emit('test')//1
console.log('show')//show

var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.addListener('test1',function(){console.log(1)})
emitter.addListener('test2',function(){console.log(2)})
console.log(emitter.eventNames());//['test1','test2']


var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.addListener('test',function(){console.log(1)})
emitter.addListener('test',function(){console.log(2)})
console.log(emitter.listenerCount('test'));//2

var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.addListener('test',function(){console.log(1)})
emitter.addListener('test',function(){console.log(2)})
console.log(emitter.listenerCount('test'));//2
emitter.listenerCount('test')[0]();


var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.addListener('test',function(){console.log(1)})
emitter.addListener('test',function(){console.log(2)})
console.log(emitter.listeners('test'));//[[Function],[Function]]
emitter.listeners('test')[0]();//1


var EventEmitter=require('events')
var emitter=new EventEmitter()
console.log(emitter.getMaxListeners())//10


var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.setMaxListeners(11)

var EventEmitter=require('events')
var emitter=new EventEmitter()
EventEmitter.defaultMaxListeners=11;

var EventEmitter=require('events')
var emitter=new EventEmitter()
emitter.on('newListener',function(){
    console.log(2)
})
emitter.on('test',function(){
    console.log(1)
})
emitter.emit('test')//2 1


var EventEmitter=require('events')
var emitter=new EventEmitter()

emitter.on('test',function(){
    console.log(1)
})
emitter.on('newListener',function(){
    console.log(2)
})
emitter.emit('test')//1


var EventEmitter=require('events')
var emitter=new EventEmitter()
function show(){
    console.log(1)
}
emitter.on('removeListener',function(){
    console.log(2)
})
emitter.on('test',show).removeListener('test',show)//2

var EventEmitter=require('events')
var emitter=new EventEmitter()
function show(){
    console.log(1)
}
emitter.on('test',show).removeListener('test',show)//2
emitter.on('removeListener',function(){
    console.log(2)
})

//''


var path=require('path')
console.log(path.dirname('/foo/bar/baz/asdf/a.txt'))///foo/bar/baz/asdf
console.log(path.dirname('/foo/bar/baz/asdf/'))///foo/bar/baz
console.log(path.dirname('C:/test/aaa'))//C:/test


var path=require('path')
console.log(path.basename('/foo/bar/baz/asdf/a.txt'))//a.txt
console.log(path.basename('/foo/bar/baz/asdf/a.txt','a.txt'))//a.txt
console.log(path.basename('/foo/bar/baz/asdf/'))//asdf
console.log(path.basename('C:/test/aaa'))//aaa


var path=require('path')
console.log(path.extname('/foo/bar/baz/asdf/a.txt'))//.txt
console.log(path.extname('/foo/bar/baz/asdf/a.txt','a.txt'))//.txt
console.log(path.extname('/foo/bar/baz/asdf/'))//''
console.log(path.extname('C:/test/aaa/.'))//''
console.log(path.extname('C:/test/aaa'))//''


var path=require('path')
console.log(path.sep)//win \ linux /
console.log('foo\\bar\\baz'.split(path.sep))//['foo','bar','baz']
console.log('foo/bar/baz'.split(path.sep))//win ['foo/bar/baz'] linus ['foo','bar','baz']

var path=require('path')
console.log(path.delimiter)//;
console.log(path.sep)///


var path=require('path')
console.log(path.normalize('a/b/c/../user/bin'))// a\b/user\bin
console.log(path.normalize('a/b/c///../user/bin/'))// a\b\user\bin
console.log(path.normalize('a/b/c/../..////..user/bin/..'))// a\..user
console.log(path.normalize('a/b/c/../../user/bin/../../'))// a\
console.log(path.normalize('a/../../user/bin/../../../../'))// ..\..\..\
console.log(path.normalize('./a/../user/bin/./')) // user\bin\


var path=require('path')
console.log(path.join('////./a','b////c','user/'))// \a\b\c\user
console.log('a','../../','user/')// a../user/


var path=require('path')
console.log(path.resolve('.','testFiles/..','trdLayer'))
console.log(path.resolve('..','testFiles','a.txt'))
console.log(path.resolve('D:','abc','D:/a'))
console.log(path.resolve('abc','ok.gif'))
console.log(path.resolve('abc','...','a/../subfile'))
// C:\youyaoxu\gitlab\test\js\trdLayer
// C:\youyaoxu\gitlab\test\testFiles\a.txt
// D:\a
// C:\youyaoxu\gitlab\test\js\abc\ok.gif
// C:\youyaoxu\gitlab\test\js\abc\...\subfile


var path=require('path')
console.log(path.isAbsolute('../testFiles/secLayer'))//false
console.log(path.isAbsolute('./join.js'))//false
console.log(path.isAbsolute('temp'))//false
console.log(path.isAbsolute('/tep/../..'))//true
console.log(path.isAbsolute('E:github/nodeAPI/abc/efg'))//false
console.log(path.isAbsolute('///temp123'))//true

var path=require('path')
console.log(path.relative('C:\\\test','C:\\\impl\\bbb'))
console.log(path.relative('C:/test/aaa','C:/bbb'))
console.log(path.relative('C:/test/aaa','D:/bbb'))


// console.log(Buffer)
var buf=new Buffer(5);
console.log(buf)
buf.fill(0)
console.log(buf)

// var buf=new Buffer(5)
// console.log(buf)
// buf[0]=1
// console.log(buf)
// buf[10]=1;
// console.log(buf)



// fs
var fs=require('fs')
fs.unlink('/tmp/hello',function(err){
    if(err) throw err;
    console.log('successfully deleted /tmp/hello')
})

var fs=require('fs')
fs.unlinkSync('/tmp/hello')
console.log('successfully deleted /tmp/hello')

let fs=require('fs')
fs.rename('tmp/hello','/tmp/world',function(err){
    if(err) throw err;
    console.log('renamed complete')
})
fs.stat('/tmp/world',function(err,stats){
    if(err) throw err;
    console.log('stats:${JSON.stringify(stats)}')
})

//ok
fs.rename('/tmp/hello','/tmp/world',function(err){
    if(err) throw err;
    fs.stat('/tmp/world',function(err,stats){
        if(err) throw err;
        console.log('stats: ${JSON.stringify(stats)}')
    })
})


let fs=require('fs')
fs.open('../test/a.txt','r',function(err,fs){
    console.log(err);//null
    console.log(fs)//3
})
fs.open('b.txt','r',function(err,fs){
    console.log(err)
    console.log(fs)//undefined
})


// var fs=require('fs')
// var result=fs.openSync('../test/a.txt','r')
// console.log(result)

var fs=require('fs')
fs.open('../test/a.txt','r',function(err,fd){
    if(err){
        console.log('文件打开失败')
    }else{
        var bf=Buffer.alloc(5)
        fs.read(fd,bf,0,3,null,function(err,len,buffer){
            console.log(err)//null
            console.log(len)//3
            console.log(buffer)//<Buffer 31 31 31 00 00>
        })
    }
})


var fs=require('fs')
var fd=fs.openSync('../test/a.txt','r')
var bf=Buffer.alloc(10)
var result=fs.readSync(fd,bf,0,10,null);
console.log(result)

var fs=require('fs')
fs.open('../test/b.txt','r+',function(err,fd){
    if(err){
        console.log('文件打开失败')
    }else{
        var bf=Buffer.from('test')
        fs.write(fd,bf,0,3,null,function(err,len,buffer){
            console.log(err)//null
            console.log(len);//3
            console.log(buffer)//<Buffer 74 65 73 74>
        })
    }
})


var fs=require('fs')
fs.open('../test/b.txt','r+',function(err,fd){
    if(err){
        console.log('文件打开失败')
    }else{
        var bf=Buffer.from('test')
        fs.write(fd,'12345',function(err,len,buffer){
            console.log(err)//null
            console.log(len);//3
            console.log(buffer)//<Buffer 74 65 73 74>
        })
    }
})


var fs=require('fs')
var fd=fs.openSync('../test/b.txt','r+')
var bf=Buffer.alloc(5)
var result=fs.writeSync(fd,bf,0,3,null)
console.log(result)


var fs=require('fs')
fs.open('../test/b.txt','r+',function(err,fd){
    if(err){
        console.log('文件打开失败')
    }else{
        fs.close(fd,function(err){
            if(err){
                console.log('文件打开失败')
            }
            console.log('文件关闭成功')
        })
    }
})


var fs=require('fs')
var fd=fs.openSync('../test/b.txt','r+')
fs.closeSync(fd)



var fs=require('fs')
var filename='../test/1.txt';
fs.writeFile(filename,'hello',function(err){
    console.log(err)
    console.log('success')
})

var fs=require('fs')
var filename='../test/2.txt'
fs.writeFileSync(filename,'abc')

var fs=require('fs')
var filename='../test/1.txt'
fs.appendFile(filename,' world',function(err){
    console.log(err)
    console.log('success')
})

var fs=require('fs')
var filename='../test/2.txt'
fs.appendFileSync(filename,'lalalala')

var fs=require('fs')
var filename='../test/1.txt'
fs.readFile(filename,function(err,data){
    if(err){
        console.log('文件读取失败')
    }else{
        console.log(data)
        console.log(data.toString())
    }
})



var fs=require('fs')
var filename='../test/2.txt'
// fs.readFileSync(file[,options])
var result=fs.readFileSync(filename)
console.log(result)
console.log(result.toString())


var fs=require('fs')
var filename='../test/1.txt'
fs.unlink(filename,function(err){
    if(err){
        console.log('删除失败')
    }else{
        console.log('删除成功')
    }
})


var fs=require('fs')
var filename='../test/2.txt'
fs.unlinkSync(filename)


var fs=require('fs')
var filename='../test/a.txt'
fs.rename(filename,'../test/2.txt',function(err){
    console.log('重命名失败')
})

var fs=require('fs')
var filename='../test/b.txt'
var result=fs.renameSync(filename,'../test/1.txt')


var fs=require('fs')
var filename='../test/1.txt'
fs.stat(filename,function(err,stat){
    console.log(err)
    console.log(stat)
})



var fs=require('fs')
var filename='../test/1.txt'
fs.stat(filename,function(err,stats){
    console.log(stats.isFile())//true
})


var fs=require('fs')
var filename='../test/1.txt'
var result=fs.statSync(filename)
console.log(result)

fs.watch('somedir',(eventType,filename)=>{
    console.log(`事件类型是 ${eventType}`)
    if(filename){
        console.log(`提供了文件名: ${filename}`)
    }else{
        console.log('未提供文件名')
    }
})

var fs=require('fs')
var filename='../test/1.txt';
fs.watch(filename,function(eventType,_filename){
    console.log(eventType)
    if(_filename){
        console.log(_filename+'发生了变化')
    }else{
        console.log('...')
    }
})

var fs=require('fs')
fs.mkdir('../test/a',function(err){
    console.log(err);
})


var fs=require('fs')
fs.mkdirSync('../test/b')


var fs=require('fs')
fs.rmdir('../test/a',function(err){
    console.log(err)
})


var fs=require('fs')
fs.rmdirSync('../test/b')

var fs=require('fs')
fs.readdir('./',function(err,data){
    console.log(err)
    console.log(data)
})

var fs=require('fs')
fs.readdir('./',function(err,data){
    data.forEach(function(item,index,arr){
        fs.stat(item,function(err,stats){
            if(stats.isFile()){
                console.log('文件: '+item)
            }
            if(stats.isDirectory()){
                console.log('目录: '+item);
            }
        })
        
    })
})


var fs=require('fs')
var result=fs.readdirSync('./')
console.log(result);


//递归
function factorial(n){
    if(n===1){
        return 1;
    }else{
        return n*factorial(n-1)
    }
}

var fs=require('fs')
function travel(dir,callback){
    fs.readdirSync(dir).forEach(function(file){
        var pathname=path.join(dir,file)
        if(fs.stasSync(pathname).isDictory()){
            travel(pathname,callback)
        }else{
            callback(pathname)
        }
    })
}
travel('../test',function(pathname){
    console.log(pathname);
})


function travel(dir,callback,finish){
    false.readdir(dir,function(err,files){
        (function next(i){
            if(i<files.length){
                var pathname=path.join(dir,files[i])

                false.stat(pathname,function(err,stats){
                    if(stats.isDirectory()){
                        travel(pathname,callback,function(){
                            next(i+1)
                        })
                    }else{
                        callback(pathname,function(){
                            next(i+1)
                        })
                    }
                })
            }else{
                finish && finish();
            }
        })(0)
    })
}


// console.log(Buffer)

var buf=new Buffer(5)
console.log(buf)
buf.fill(0)
console.log(buf)


var buf=new Buffer(5)
console.log(buf);//<Buffer 00 00 00 00 00>
buf[0]=1;
console.log(buf);//<Buffer 01 00 00 00 00>
buf[10]=1;
console.log(buf);//<Buffer 01 00 00 00 00>


var buf=Buffer.allocUnsafe(10)
console.log(buf);//<Buffer f0 3b 05 d1 e7 01 00 00 90 9d>
buf.fill(0)
console.log(buf);//<Buffer 00 00 00 00 00 00 00 00 00 00>


var buf=Buffer.alloc(5)
console.log(buf);//<Buffer 00 00 00 00 00>


var buf1=Buffer.from([1,2,3,4,5])
console.log(buf1);//<Buffer 01 02 03 04 05>
var buf2=Buffer.from(buf1)
console.log(buf2);//<Buffer 01 02 03 04 05>

var buf1=Buffer.from([1,2,3,4,5])
console.log(buf1);//<Buffer 01 02 03 04 05>
var buf2=Buffer.from(buf1)
console.log(buf2);//<Buffer 01 02 03 04 05>

var buf1=new Buffer('this is a test')
console.log(buf1.toString());//this is a test
console.log(buf1.toString('ascii'));//this is a test
var buf2=new Buffer('7468697320697320612074c3a97374','hex')
console.log(buf2.toString());//this is a test

var buf1=Buffer.from('this is a test')
console.log(buf1.toString());//this is a test
console.log(buf1.toString('ascii'));//this is a test
var buf2=Buffer.from('7468697320697320612074c3a97374','hex')
console.log(buf2.toString());//this is a test


var arr=new Uint16Array(2)
arr[0]=5000;
arr[1]=4000;
console.log(arr.buffer);//ArrayBuffer { byteLength: 4 }
var buf=new Buffer(arr.buffer)
console.log(buf);//<Buffer 88 13 a0 0f>
arr[1]=6000
console.log(buf);//<Buffer 88 13 70 17>

var arr=new Uint16Array(2)
arr[0]=5000;
arr[1]=4000;
console.log(arr.buffer);//ArrayBuffer { byteLength: 4 }
var buf=Buffer.from(arr.buffer)
console.log(buf);//<Buffer 88 13 a0 0f>
arr[1]=6000
console.log(buf);//<Buffer 88 13 70 17>


console.log(Buffer.from('test'));//<Buffer 74 65 73 74>

var buf=Buffer.from('match')
console.log(buf.length);//5
var buf2=Buffer.from('火柴')
console.log(buf2.length);//6

var buf=Buffer.alloc(10)
console.log(buf.length);//10
buf[0]=100
console.log(buf[0]);//100


var buf=Buffer.alloc(10)
buf[0]=-100;
console.log(buf[0]);//156
buf[1]=300
console.log(buf[1]);//44
buf[2]=3.1415
console.log(buf[2]);//3



var buf=Buffer.from('match')
console.log(buf);//<Buffer 6d 61 74 63 68>
console.log(String.fromCharCode(buf[0]));//m


new ArrayBuffer(size)//旧
ArrayBuffer.alloc(size)//新

var buf=Buffer.alloc(5)
console.log(buf);//<Buffer 00 00 00 00 00>
var len=buf.write('test',1,3)
console.log(buf);//<Buffer 00 74 65 73 00>
console.log(len);//3


var buf=Buffer.alloc(26)
for(var i=0;i<26;i++){
    buf[i]=i+97
}
console.log(buf.toString('ascii'));//abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));//abcde
console.log(buf.toString('utf8',0,5));//abcde
console.log(buf.toString(undefined,0,5));//abcde


var buf=Buffer.from('test')
var json=buf.toJSON(buf)
console.log(json);//{ type: 'Buffer', data: [ 116, 101, 115, 116 ] }

console.log(Buffer.isEncoding('utf8'));//true
console.log(Buffer.isEncoding('gbk'));//false


var str='火柴'
var buf=Buffer.from(str)
console.log(str.length);//2
console.log(buf.length);//6
console.log(buf.byteLength);//6


var buf1=Buffer.from('1234')
var buf2=Buffer.from('0123')
var arr=[buf1,buf2]
var result=Buffer.compare(buf1,buf2)
console.log(result);//1
console.log(arr.sort());//[ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]


var buf1=Buffer.alloc(10)
var buf2=Buffer.alloc(14)
var buf3=Buffer.alloc(18)
var totalLength=buf1.length+buf2.length+buf3.length;
var bufA=Buffer.concat([buf1,buf2,buf3],totalLength)
console.log(bufA);
//<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(bufA.length);//42


var buf=Buffer.alloc(5)
var str='test'
console.log(Buffer.isBuffer(buf));//true
console.log(Buffer.isBuffer(str));//false

var buf1=Buffer.from('test')
console.log(buf1);//<Buffer 74 65 73 74>
var buf2=buf1.slice(1,3)
console.log(buf2);//<Buffer 65 73>
console.log(buf2.toString());//es

var buf1=Buffer.from('test')
console.log(buf1);//<Buffer 74 65 73 74>
var buf2=buf1.slice(1,3)
console.log(buf2);//<Buffer 65 73>
buf2[0]=0
console.log(buf2);//<Buffer 00 73>
console.log(buf1);//<Buffer 74 00 73 74>


var buf1=Buffer.from('test')
var buf2=Buffer.alloc(5)
var len=buf1.copy(buf2,1,3)
console.log(buf1);//<Buffer 74 65 73 74>
console.log(buf2);//<Buffer 00 74 00 00 00>
console.log(len);//1

var buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
var buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);
//输出:0 (buf2中的1234对比buf2中的1234)
console.log(buf1.compare(buf2,5,9,0,4));
//输出:-1 (buf2中的567891对比buf1中的56789)
console.log(buf1.compare(buf2,0,6,4));
//输出 1 (buf2中的1对比buf2中的6789)
console.log(buf1.compare(buf2,5,6,5));


var buf1=Buffer.from('ABC')
var buf2=Buffer.from('ABC')
var buf3=Buffer.from('abc')
console.log(buf1.equals(buf2));//true
console.log(buf1.equals(buf3));//false


var b=Buffer.allocUnsafe(10).fill('h')
console.log(b.toString());//hhhhhhhhhh

var buf=Buffer.from('this is a buffer')
console.log(buf.indexOf('this'));//0
console.log(buf.indexOf('is'));//2
console.log(buf.indexOf(Buffer.from('a buffer')));//8
console.log(buf.indexOf(97));//8
console.log(buf.indexOf(Buffer.from('a buffer example')));//-1
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0,8)));//8

var buf=Buffer.from('this is a buffer')
console.log(buf.includes('this'));//true
console.log(buf.includes('is'));//true
console.log(buf.includes(Buffer.from('a buffer')));//true
console.log(buf.includes(97));//true
console.log(buf.includes('this',4));//false


var pool;
function allocPool(){
    pool=new SlowBuffer(Buffer.poolSize)
    pool.used=0;
}
//构造小的Buffer对象代码
new Buffer(1024)
Buffer.alloc(1024)

if(!poo了|| pool.length-pool.used<this.length)allocPool()

this.parent=pool;
this.offset=pool.used;
pool,used+=this.length;
if(pool.used & 7)pool.used=(pool.used+8)&-7;

var http=require('http')
var server=http.createServer((req,res)=>{
    //req是一个Readable Stream;res 是一个 Writable Stream
    var body=''
    req.setEncoding('utf8')
    req.on('data',(chunk)=>{
        body+=chunk
    })
    req.on('end',()=>{
        try{
            var data=JSON.parse(body)
            res.write(typeof data)
            res.end()
        }catch(err){
            res.statusCode=400
            return res.end(`error: ${err.message}`)
        }
    })
})
server.listen(1337)


var myStream=getWritableStreamSomehow()
myStream.write('some data')
myStream.write('some more data')
myStream.end('done writing data')


//向可写流中写入数据一百万次
//需要注意背压
function writeOneMillionTimes(writer,data,encoding,callback){
    let i=1000000;
    write()
    function write(){
        let ok=true
        do{
            i--;
            if(i===0){
                //最后一次
                writer.write(data,encoding,callback)
            }else{
                //检查是否可以继续写
                //这里不要传递callback,因为写入还没有结束
                ok=writer.write(data,encoding)
            }
        }while(i>0 && ok)
        if(i>0){
            //这里提前停下
            //drain事件触发后才可以继续读写
            writer.once('drain',write)
        }
    }
}


const writer = getWritableStreamSomehow();
for (let i = 0; i < 100; i++) {
  writer.write(`写入 #${i}!\n`);
}
writer.end('写入结尾\n');
writer.on('finish', () => {
  console.error('写入已完成');
});

const writer=getWritableStreamSomehow
const reader=getReadableStreamSomehow
writer.on('pipe',(src)=>{
    console.log('something is piping into the writer');
    asert.equal(src,reader)
})
reader.pipe(writer)


const writer=getWritableStreamSomehow
const reader=getReadableStreamSomehow
writer.on('unpipe',(src)=>{
    console.log('something is piping into the writer');
    asert.equal(src,reader)
})
reader.pipe(writer)
reader.unpipe(writer)

const fs=require('fs')
const file=fs.createWriteStream('../test/3.txt')
file.write('hello, ')
file.end('world')

const stream=require('stream')
stream.cork()
stream.write('some ')
stream.write('data ')
process.nextTick(()=>stream.uncork())


stream.cork()
stream.write('some')
stream.cork()
stream.write('data ')
process.nextTick(()=>{
    stream.uncork()
    //之前的数据只有在uncork()被第二次调用后才会输出
    stream.uncork()
})


function write(data,cb){
    if(!MediaStream.write(data)){
        MediaStream.once('drain',cb)
    }else{
        process.nextTick(cb)
    }
}
write('hello',()=>{
    console.log('write computed,do more writes now')
})

const readable =getReadableStreamSomeHow()
readable.on('data',function(chunk){
    console.log(`接受到数据 ${chunk.length}`);
})

const readable =getReadableStreamSomeHow()
readable.on('data',function(chunk){
    console.log(`接受到数据 ${chunk.length}`);
})
readable.on('end',()=>{
    console.log('There will be no more data');
})

const readable =getReadableStreamSomeHow()
readable.on('readable',()=>{
    //有一些数据可读了
})

const fs=require('fs')
const rr=fs.createReadStream('../test/1.txt')
rr.on('readable',function(){
    console.log('readable:',rr.read());
})
rr.on('end',()=>{
    console.log('end');
})

 
const readable=new stream.Readable()
console.log(readable.isPaused()); 
readable.pause()
console.log(readable.isPaused());
readable.resume()
readable.pause()
console.log(readable.isPaused());



const readable=getReadableStreamSomehow()
readable.on('data',(chunk)=>{
    console.log(`${chunk.length}`);
    readable.pause()
    console.log(`there is will additional data for 1 second`);
    setTimeout(()=>{
        console.log('Now data will start flowing again');
        readable.resume()
    },1000)
})



const readable=getReadableStreamSomehow()
const rs=fs.createWriteStream('../test/1.txt')
//readable 中的所有数据都被传给了1.txt
readable.pipe(writable)


const r=fs.createReadStream('../test/1.txt')
const z=zlib.createGzip()
const w=fs.createWriteStream('file.txt.gz')
r.pipe(z).pipe(w)


reader.pipe(writer,{end:false})
reader.on('end',()=>{
    writer.end('结束')
})

const readable=getReadableStreamShowhow()
readable.on('readable',()=>{
    let chunk
    while(null !=(chunk=readable.read())){
        console.log(`Received ${chunk.length} bytes of data`);
    }
})

const readable=getReadableStreamShowhow()
readable.resume().on('end',()=>{
    console.log('Reached the end ,but did not read anything');
})

const readable=getReadableStreamShowhow()
readable.setEncoding('utf8')
readable.on('data',(chunk)=>{
    assert.equal(typeof chunk,'string')
    console.log(`${chunk.length}`);
})

const readable=getReadableStreamShowhow()
const writable=fs.createWriteStream('../test/1.txt')
readable.pipe(writable)
setTimeout(()=>{
    console.log('Stop writing to 1.txt');
    readable.unpipe(writable)
    console.log('close the file stream');
    writable.end()
})


const Duplex=require('stream').Duplex;
const myDuplex=new Duplex({
    read(size){

    },
    write(chunk,encoding,callback){

    }
})


transform.prototype._transform=function(data,encoding,callback){
    this.push(data)
    callback()
}

transform.prototype._transform=function(data,encoding,callback){
    callback(null,data)
}


var net=require('net')
// 创建客户端
var client=net.connect({port:1234},function(){
    console.log('已连接到服务器');
    client.write('Hi')
})
// data事件监听,收到数据后,断开连接
client.on('data',function(data){
    console.log(data.toString());
    client.end()
})
// end事件监听,断开连接时会被触发
client.on('end',function(){
    console.log('已于服务器端来连接');
})


const fs=require('fs')
const filepath='../test/a.txt'
const rs=fs.createReadStream(filepath)

const ws=fs.createWriteStream(dest)
rs.pipe(ws)


const fs=require('fs')
const rs=fs.createReadStream('./package.json')
const ws=fs.createWriteStream('./package-lower.json')
rs.pipe(lower).pipe(ws)
// rs -> lower:lower在下游,所有lower需要是个writable流 lower -> rs 相对而言,lower有在上游,所有lower需要是个readable流

const http=require('http')
const fs=require('fs')
http.createServer((req,res){
    fs.readFile(moviePath,(err,data){
        res.end(data)
    })
}).listen(80)


const http=require('http')
const fs=require('fs')
http.createServe((re1,res)=>{
    fs.createReadStream(moviePath).pipe(res)
}).listen(8080)


const http=require('http')
const fs=require('fs')
http.createServe((re1,res)=>{
    fs.createReadStream(moviePath).pipe(oppressor).pipe(res)
}).listen(8080)


var fs=require('fs')
var readStream=fs.createReadStream('../test/1.txt')
var writeStream=fs.createWriteStream('../test/4.txt')
//读取数据
readStream.on('data',function(chunk){
    // 如果读取的数据还在缓存区,还没有写入
    if(writeStream.write(chunk)===false){
        // 停止读取
        readStream.pause()
    }
})
// 如果数据读取完成
readStream.on('end',function(chunk){
    // 停止写入数据
    writeStream.end()
})

writeStream.on('drain',function(){
    // 接着读取数据
    readStream.resume()
})

// 使用pipe()方法进行简化
var fs=require('fs')
var readStream=fs.createReadStream('../test/2.txt')
var writeStream=fs.createWriteStream('../test/5.txt')
readStream.pipe(writeStream)


const http=require('http')
const fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('./a.txt',function(err,data){
        if(err){
            res.end('file not exist')
        }else{
            res.writeHeader(200,{'Content-Type':'text/html'})
            res.end(data)
        }
    })
}).listen(8000)


//使用pipe()方法
var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    fs.createReadStream('./txt').pipe(res)
}).listen(8000)


var http=require('http')
var request=require('request')
http.createServer(function(req,res){
    request('https://www.cnblogs.com/images/logo_small.gif').pipe(res);
    console.log(res)
}).listen(8000)


var stream=require('stream')
var Readable=stream.Readable;
var Writable=stream.Writable;

var readStream=new Readable()
var writeStream=new Writable()
readStream.push('L ')
readStream.push('Love ')
readStream.push('NodeJS\n')
readStream.push('null')


writeStream._write=function(chunk,encoding,cb){
    console.log(chunk.toString());
    cb()
}
readStream._read=function(size){
    console.log('read data')
}
readStream.pipe(writeStream)


var stream=require('stream')
var util=require('util')
function ReadStream(){
    stream.Readable.call(this)
}
util.inherits(ReadStream,stream.Readable)
ReadStream.prototype._read=function(){
    this.push('I ')
    this.push('Love ')
    this.push('NodeJS\n')
    this.push(null)
}
function WriteStream(){
    stream.Writable.call(this)
    this._cached=Buffer.from('')
}
util.inherits(WriteStream,stream.Writable)
WriteStream.prototype._write=function(chunk,encoding,cb){
    console.log(chunk.toString());
    cb()
}
function TransformStream(){
    stream.Transform.call(this)
}
util.inherits(TransformStream,stream.Transform)
TransformStream.prototype._transform=function(chunk,encoding,cb){
    this.push(chunk)
    cb()
}
TransformStream.prototype._flush=function(cb){
    this.push('Oh Yeah')
    cb()
}
var readStream=new ReadStream()
var writeStream=new WriteStream()
var transformStream=new TransformStream()
readStream.pipe(transformStream).pipe(writeStream)


var dns=require('dns')
dns.lookup('www.cnblogs.com',function(err,address,family){
    console.log(err);//null
    console.log(address);//101.37.225.65
    console.log(family);//4
})

var dns=require('dns')
dns.lookup('www.qq.com',{all:true},function(err,address,family){
    console.log(err);//null
    console.log(address);//[ { address: '58.247.214.47', family: 4 } ]
    console.log(family);//undefined
})


var dns=require('dns')
dns.lookupService('127.0.0.1',80,function(err,hostname,service){
    console.log(err);//null
    console.log(hostname);//PC-20180614PMTF
    console.log(service);//http
})


var dns=require('dns')
//IPV4
dns.resolve('www.qq.com',function(err,address){
    console.log(address);//[ '58.247.214.47' ]
})
//IPV6
dns.resolve('www.qq.com','AAAA',function(err,address){
    console.log(address);//[ '240e:e1:8100:28::2:1f' ]
})
//别名
dns.resolve('www.qq.com','CNAME',function(err,address){
    console.log(address);//[ 'https.qq.com' ]
})

var dns=require('dns')
dns.resolve4('www.qq.com',function(err,address){
    console.log(address);//[ '58.247.214.47' ]
})

var dns=require('dns')
dns.reverse('114.114.114.114',function(err,hostnames){
    console.log(hostnames);//[ 'public1.114dns.com' ]
})

var dns=require('dns')
console.log(dns);


var url=require('url')
console.log(url);


var url=require('url')
var str='http://user:pass@host.com:8080/p/a/t/h?author=%E5%B0%8F%E7%81%AB%E6%9F%B4#hash';
console.log(url.parse(str));
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?author=%E5%B0%8F%E7%81%AB%E6%9F%B4',
//     query: 'author=%E5%B0%8F%E7%81%AB%E6%9F%B4',
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?author=%E5%B0%8F%E7%81%AB%E6%9F%B4',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?author=%E5%B0%8F%E7%81%AB%E6%9F%B4#hash' }

var url = require('url');
var str = 'http://user:pass@host.com:8080/p/a/t/h?author=%E5%B0%8F%E7%81%AB%E6%9F%B4#hash';
console.log(url.parse(str,true));
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?author=%E5%B0%8F%E7%81%AB%E6%9F%B4',
//     query: { author: '小火柴' },
//     pathname: '/p/a/t/h',
//     path: '/p/a/t/h?author=%E5%B0%8F%E7%81%AB%E6%9F%B4',
//     href: 'http://user:pass@host.com:8080/p/a/t/h?author=%E5%B0%8F%E7%81%AB%E6%9F%B4#hash' }

var url = require('url');
var str='//foo/bar';
var result1=url.parse(str,true)
var result2=url.parse(str,true,true)
console.log(result1.path);//    //foo/bar
console.log(result1.pathname);//   //foo/bar
console.log(result1.hostname);//  null
console.log(result2.path);//    /bar
console.log(result2.pathname); //   /bar
console.log(result2.hostname);//   foo


var url = require('url');
var obj={
    protocol:'http:',
    auth:'user:pass',
    host:'host.com:8080',
    hash:'#hash',
    query:{author:'小火柴'}
}
console.log(url.format(obj));// http://user:pass@host.com:8080?author=%E5%B0%8F%E7%81%AB%E6%9F%B4#hash


var url = require('url');
console.log(url.resolve('/one/two/three','four'));//   /one/two/four
console.log(url.resolve('http://example.com/','/one'));//   http://example.com/one
console.log(url.resolve('http://example.com/one','/two'));//    http://example.com/two



var querystring=require('querystring')
console.log(querystring);
// { unescapeBuffer: [Function: unescapeBuffer],
//     unescape: [Function: qsUnescape],
//     escape: [Function: qsEscape],
//     stringify: [Function: stringify],
//     encode: [Function: stringify],
//     parse: [Function: parse],
//     decode: [Function: parse] }


var querystring=require('querystring')
var str='foo=bar&abc=xyz&abc=123';
// console.log(querystring.parse(str));//{ foo: 'bar', abc: [ 'xyz', '123' ] }

// console.log(querystring.parse(str,'a'));// { foo: 'b', 'r&': '', bc: [ 'xyz&', '123' ] }

console.log(querystring.parse(str,'&','c'));//{ 'foo=bar': '', ab: [ '=xyz', '=123' ] }


var querystring=require('querystring')
console.log(
    querystring.parse('w=%D6%D0%CE%C4&foo=bar',null,null,{decodeURIComponent:'gbkDecodeURIComponent'})
);//{ w: '����', foo: 'bar' }


var querystring=require('querystring')
console.log(
    querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
);//foo=bar&baz=qux&baz=quux&corge=

console.log(
    querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':')
);// foo:bar;baz:qux


var querystring=require('querystring')
console.log(
    encodeURIComponent('测试')
);// %E6%B5%8B%E8%AF%95
console.log(
    querystring.escape('测试')
);// %E6%B5%8B%E8%AF%95


var querystring=require('querystring')
console.log(
    decodeURIComponent('%E6%B5%8B%E8%AF%95')
);//  测试
console.log(
    querystring.unescape('%E6%B5%8B%E8%AF%95')
);// 测试



var http=require('http')
var url=require('url')
//http://127.0.0.1:8080/home/test?a=1&b=2

var querystring=require('querystring')
http.createServer(function(req,res){
    var urlObj=url.parse(req.url)
    var query=urlObj.query;
    var queryObj=querystring.parse(query)
    console.log(req.url); //  /home/test?a=1&b=2
    console.log(query); // a=1&b=2
    console.log(queryObj);//  { a: '1', b: '2' }
}).listen(8080)

var http=require('http')
var url=require('url')
var querystring=require('querystring')
http.createServer(function(req,res){
    var str=''
    req.on('data',function(thunk){
        str+=thunk
    })
    req.on('end',function(){
        console.log(str);
        var queryObj=querystring.parse(str)
        console.log(queryObj);
    })
}).listen(8080)




var net=require('net')
console.log(net.isIP('1.1.1.1'));//4 
console.log(net.isIP('1.1'));//0
console.log(net.isIP('AD80::ABAA:0000:00C2:0002'));// 6

var net=require('net')
console.log(net.isIPv4('1.1.1.1'));// true
console.log(net.isIPv4('1.1'));// false

var net=require('net')
console.log(net.isIPv6('1.1.1.1'));//false
console.log(net.isIPv6('AD80::ABAA:0000:00C2:0002'));// true


//server.js
var net=require('net')
var server=net.createServer(function(socket){
    socket.write('Hi!\n')
    socket.on("data",function(data){
        console.log(data.toString());
    })
    socket.on('end',function(){
        console.log('有客户机下线了');
    })
    socket.on('error',function(){
        console.log('发生意外错误');
    })
})
server.listen(8080)

//client.js
var net=require('net')
var client=net.connect({port:8080},function(){
    client.name='客户机1'
    client.write(client.name+'上线了\n')
    client.end(client.name+'下线了\n')
    client.on('data',function(data){
        console.log(data.toString());
    })
})



//chatServer.js
var net=require('net')
var i=0;
//报错客户机
var clientList=[]
var server=net.createServer(function(socket){
    socket.name='用户'+(++i)
    socket.write('聊天室提示:欢迎'+socket.name+'\n')
    //更换客户机数组
    clientList.push(socket)
    function showClients(){
        console.log('当前在线客户');
        for(var i=0;i<clientList.length;i++){
            console.log(clientList[i].name);
        }
    }
    showClients()
    socket.on('data',function(data){
        //把当前连接的客户机的信息转发到其他客户机
        for(var i=0;i<clientList.length;i++){
            if(socket!==clientList[i]){
                clientList[i].write('['+socket.name+']: '+data)
            }
        }
    })
    socket.on('close',function(){
        //当前客户机下线时,将其从客户机数组中移除
        clientList.splice(clientList.indexOf(socket),1)
        showClients()
    })
    socket.on('error',function(err){
        console.log(socket.name+'退出');
    })
}).listen(8080)

//chatClient.js
var net=require('net')
process.stdin.resume()
process.stdin.setEncoding('utf8')
var client=net.connect({port:8080},function(){
    console.log('[本机提示]登录到聊天室');
    process.stdin.on('data',function(){
        client.write(data)
    })
    process.on('data',function(data){
        console.log(data.toString());
    })
    client.on('end',function(){
        console.log('本机提示: 退出聊天室');
        process.exit()
    })
    client.on('error',function(){
        console.log('本机提示: 聊天室异常');
        process.exit()
    })
})



var http=require('http')
var server=http.createServer(function(req,res){
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(JSON.stringify(req.headers));
    res.end('ok')
})
server.listen(5000)

response.writeHead(200,{'Content-Type':'text/plain','Trailer':'Content-MD5'})
response.write(fileData)
response.addTrailers({'Content-MD5':'7895bf4b8828b55ceaf47747b4bca667'})
response.end()

response.setHeader('Foo','bar')
response.setHeader('Set-Cookie',['foo=bar','bar=baz'])

var headerNames=response.getHeaderNames()
//headerNames ===['foo','set-Cookie']



var http=require('http')
http.get('http://127.0.0.1',function(){
    console.log(res.statusCode);//200
})

var https=require('https')
https.get('https://www.cnblogs.com/',function(res){
    var data=''
    res.setEncoding('utf8')
    res.on('data',function(chunk){
        data+=chunk
    })
    res.on('end',function(){
        console.log(data);
    })
})

var https=require('https')
var querystring=require('querystring')
var createClientRequest=function(){
    var options={
        method:'POST',
        protocal:'http',
        hostname:'127.0.0.1',
        port:'3000',
        path:'/post',
        headers:{
            "connection":"keep-alive",
            "content-type":'aplication/x-www-form-urlencoded'
        }
    }
    //发送给服务器的数据
    var postBody={
        a:'1'
    }
    // 创建客户端请求
    var client=http.request(options,function(res){
        // 最终输出:Server got client 
        res.pipe(process.stdout)
    })
    // 发送的报文主体,记得先用,querystring.stringify处理下
    client.write(querystring.stringify(postBody))
    client.end()
}
// 服务端程序,只是负责回传客户端数据
var server=http.createServer(function(req,res){
    res.write('Server got client data:')
    req.pipe(res)
})
server.listen(3000,createClientRequest)

// 105 * 68 * 39


var crypto=require('crypto')
// console.log(crypto.getCiphers());
console.log(crypto.getCurves());

var crypto=require('crypto')
var hash=crypto.createHash('md5')
// 可任意多次调用update
console.log(hash.update('Hello,World!'));
console.log(hash.update('Hello,World!'));
console.log(hash.digest('hex'));


var crypto=require('crypto')
var hmac=crypto.createHmac('sha256','match')
hmac.update('Hello,World!')
hmac.update('Hello,World!')
console.log(hmac.digest('hex'));


var crypto=require('crypto')
function aesEncrypt(data,key){
    const cipher=crypto.createCipher('aes192',key)
    var crypted=cipher.update(data,'utf8','hex')
    crypted+=cipher.final('hex')
    return crypted;
}
var data='Hello,this a sercet message!'
var key='Password'
var encrypted=aesEncrypt(data,key)
console.log(encrypted);


var crypto =require('crypto')
//xiaoming keys
var ming=crypto.createDiffieHellman(512)
var ming_keys=ming.generatorKeys()

var prime=ming.getPrime()
var generator=ming.getGenerator()

//Prime: 8df777257625c66821af697652f28e93af05b9f779af919111b89816faa11c36fcf9df04c76811471a6099800213c4fe8e3fbec8d2f90bd00795e4b7fd241603
console.log('Prime: '+generator.toString('hex'));
console.log('Generator: '+generator.toString('hex'));

// xiaohong keys
var hong=crypto.createDiffieHellman(prime,generator)
var hong_keys=hong.generateKeys()
// exchange and generate secret
var ming_secret=ming.computeSecret(hong_keys)
var hong_secret=hong.computeSecret(ming_keys)

//Secret of Xiao Ming: 4237157ab4c9211f78ffdb67d127d749cec91780d594b81a7e75f1fb591fecb84f33ae6591e1edda4bc9685b503010fe8f9928c6ed69e4ff9fdb44adb9ba1539
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
//Secret of Xiao Hong: 4237157ab4c9211f78ffdb67d127d749cec91780d594b81a7e75f1fb591fecb84f33ae6591e1edda4bc9685b503010fe8f9928c6ed69e4ff9fdb44adb9ba1539
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'))

var http=require('http')
http.get('http://tuijian.hao123.com/hotrank',function(res){
    var data='';
    res.on('data',function(){
        console.log(data);
    })
    res.on('end',function(){
        console.log(data);
    })
})

function filter(data){
    // 保存搜索量前10的综艺节目标题
    var result={};
    var $=cheerio.load(data)
    var temp_div=$('.top-wrap')
    var  temp_title=[];
    temp_duv.each(function(index,item){
        temp_title.push($(item).find('.point-bd')).find('.point-title')
        var innerResult=resut[temp_title[index]]=[]
        temp_arr.each(function(_index,_item){
            innerResult.push($(item).text())
        })
    })
}
console.log(result);


// 加载所需模块
var http=require('http')
var url=require('url')
var fs=require('fs')

var host='127.0.0.1'
var port=8080;

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log('Request for '+pathname+'received');
    function showPaper(path,status){
        var content=fs.readFileSync(path)
        res.writeHead(status,{'Content-Type':'text/html;charset=utf-8'})
        res.write(content)
        res.end()
        
    }
    switch(pathname){
        case '/':
        case '/home':
            showPaper('../view/home.html',200)
            break;
        case '/about':
            showPaper('../view/about.html',200)
            break;
        default:
            showPaper('../view/404.html',404)
            break;
    }
}).listen(port,host)



var express=require('express')
var app=express()
app.use(express.static(__dirname+'/public'))
app.listen(8080)

// index.js
var express=require('express')
var app=express()
app.get('/',function(req,res){
    res.send('Hello,world')
})
app.listen(3000)


var express=require('express')
var app=express()
app.get('/',function(req,res){
    res.send('Hello world!')
})
app.get('/customer',function(req,res){
    res.send('customer page')
})
app.get('/admin',function(req,res){
    res.send('admin page')
})
app.listen(3000)

// routes/index.js
module.exports=function(app){
    app.get('/',function(req,res){
        res.send('Hello world!')
    })
    app.get('/customer',function(req,res){
        res.send('customer page')
    })
    app.get('/admin',function(req,res){
        res.send('admin page')
    })
    app.listen(3000)
}

var express=require('express')
var app=express()
var routes=require('./routes')(app)
app.listen(3000)

var http=require('http')
var app=http.createServer(function(req,res){
    req.writeHead(200,{'Content-Type':'text/plain'})
    req.setEncoding('Hello worl')
})

var express=require('express')
var app=express()
app.get('/',function(req,res){
    res.send('Hello,World')
})
app.listen(3000)

function uselessMiddleware(req,res,next){
    next();
}

app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Something broke')
})

var express=require('express')
var app=express()
var cookieParser=require('cookie-parser')
// 加载用于解析cookie的中间件
app.use(cookieParser())


var express=require('express')
var http=require('http')
var app=express()
app.use(function(req,res,next){
    console.log("In comes a "+req.method+" to "+req.url);
    next()
})
app.use(function(req,res){
    res.writeHead(200,{'Content-Typr':'text/plain'})
    res.end('Hello world!\n')
})
http.createServer(app).listen(1337)


var express=require('express')
var http=require('http')
var app=express()
app.use(function(req,res,next){
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Welcome to the homepage')
    }else{
        next()
    }
})
app.use(function(req,res,next){
    if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Welcome to the aboutpage')
    }else{
        next()
    }
})
app.use(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('404 error \n')
})
http.createServer(app).listen(1337)


// applicationCache.use('/path',someMiddleware)

var express=require('express')
var http=require('http')
var app=express()
app.use('/',function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Welcome to the homepage')
})
app.use('/about',function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Welcome to the aboutpage')
})
app.use(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('404 error \n')
})
http.createServer(app).listen(1337)
*/
var options={
    etag:false,
    extensions:['htm','html'],
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeaders:function(res,path,stat){
        res.set('x-timestamp',Date.now())
    }
}
app.use(express,static('public',options))
