class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
  
 class Circle extends Shape { 
    disp():void { 
       console.log("圆的面积:  "+this.Area) 
    } 
 }
   
 var obj = new Circle(223); 
 obj.disp()

 class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }


 class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("num 值为 "+ StaticMem.num) 
    } 
 } 
  
 StaticMem.num = 12     // 初始化静态变量
 StaticMem.disp()       // 调用静态方法


 class Person{ } 
var obj2 = new Person() 
var isPerson = obj2 instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);


class Encapsulate { 
    str:string = "hello" 
    private str2:string = "world" 
    getStr2():string {
        return this.str2;
    }
 }
  
 var obj3 = new Encapsulate() 
 console.log(obj3.str)     // 可访问 
 console.log(obj3.getStr2()) 