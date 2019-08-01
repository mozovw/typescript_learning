var num1:number = 10 
var num2:number = 2
var res:number = 0
    
res = num1 + num2 
console.log("加:        "+res); 
 
res = num1 - num2; 
console.log("减: "+res) 
 
res = num1*num2 
console.log("乘:    "+res) 
 
res = num1/num2 
console.log("除:   "+res)
    
res = num1%num2 
console.log("余数:   "+res) 
 
num1++ 
console.log("num1 自增运算: "+num1) 
 
num2-- 
console.log("num2 自减运算: "+num2)


var num1:number = 5;
var num2:number = 9;
 
console.log("num1 的值为: "+num1); 
console.log("num2 的值为:"+num2);
 
var res1:boolean = num1>num2 
console.log("num1 大于n num2: "+res)
 
res1 = num1<num2 
console.log("num1 小于 num2: "+res)  
 
res1 = num1>=num2 
console.log("num1 大于或等于  num2: "+res)
 
res1 = num1<=num2
console.log("num1 小于或等于 num2: "+res)  
 
res1 = num1==num2 
console.log("num1 等于 num2: "+res)  
 
res1 = num1!=num2  
console.log("num1 不等于 num2: "+res)


var avg:number = 20; 
var percentage:number = 90; 
 
console.log("avg 值为: "+avg+" ,percentage 值为: "+percentage);
    
var res2:boolean = ((avg>50)&&(percentage>80)); 
console.log("(avg>50)&&(percentage>80): ",res);
 
var res2:boolean = ((avg>50)||(percentage>80)); 
console.log("(avg>50)||(percentage>80): ",res);
 
var res2:boolean=!((avg>50)&&(percentage>80)); 
console.log("!((avg>50)&&(percentage>80)): ",res);


var a:number = 2;   // 二进制 10 
var b:number = 3;   // 二进制 11
    
var result; 
result = (a & b);     
console.log("(a & b) => ",result)
            
result = (a | b);          
console.log("(a | b) => ",result)  
        
result = (a ^ b);  
console.log("(a ^ b) => ",result);
    
result = (~b); 
console.log("(~b) => ",result);
 
result = (a << b); 
console.log("(a << b) => ",result); 
 
result = (a >> b); 
console.log("(a >> b) => ",result);
 
result = (a >>> 1); 
console.log("(a >>> 1) => ",result);

var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a);
a += b;
console.log("a+=b: " + a);
a -= b;
console.log("a-=b: " + a);
a *= b;
console.log("a*=b: " + a);
a /= b;
console.log("a/=b: " + a);
a %= b;
console.log("a%=b: " + a);