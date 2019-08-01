interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 
 
// commandline 是字符串
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  
 
// commandline 是字符串数组
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  
 
// commandline 是一个函数表达式
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
var fn:any = options.commandline; 
console.log(fn());


interface namelist { 
    [index:number]:string 
 } 
 var list3:namelist = ["John","23","Bran"] // 错误元素 1 不是 string 类型
 interface ages { 
    [index:string]:number 
 } 
 var agelist:ages = {}; 
 agelist["John"] = 15   // 正确 


 interface Person { 
    age:number 
 } 
 interface Musician extends Person { 
    instrument:string 
 } 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("年龄:  "+drummer.age)
 console.log("喜欢的乐器:  "+drummer.instrument)