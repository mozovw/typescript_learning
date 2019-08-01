function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
 } 
 var emp = new employee(123,"admin") 
 employee.prototype.email="admin@runoob.com" // 添加属性 email
 console.log("员工号: "+emp.id) 
 console.log("员工姓名: "+emp.name) 
 console.log("员工邮箱: "+emp.email)

var str="The rain in SPAIN stays mainly in the plain"; 
var nn=str.match(/ain/g);
console.log(nn)

var re = /apples/gi; 
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 

var str = "RUNOOB GOOGLE TAOBAO FACEBOOK"; 
console.log("(1,2length): "    + str.substr(1,2));   // UN
console.log("(1,2): "    + str.substring(1,2));   // U
console.log("(0,10): "   + str.substring(0, 10)); // RUNOOB GOO
console.log("(5): "      + str.substring(5));     // B GOOGLE TAOBAO FACEBOOK


var str = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 3); 
console.log(splitted)  // [ 'Apples', 'are', 'round,' ]