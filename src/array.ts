var sites:string[]; 
sites = ["Google","Runoob","Taobao"] 
console.log(sites[0]); 
console.log(sites[1]);

var nums:number[] = [1,2,3,4] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
for(var i = 0;i<sites.length;i++) { 
        console.log(sites[i]) 
}

var arr:number[] = [12,13] 
var[xx,y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(xx) 
console.log(y)

var j:any; 
var nums:number[] = [1001,1002,1003,1004] 
for(j in nums) { 
    console.log(nums[j]) 
}

var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
function disp1(arr_sites:string[]) {
        for(var i = 0;i<arr_sites.length;i++) { 
                console.log(arr_sites[i]) 
        }  
}  
disp1(sites);

function disp2():string[] { 
    return new Array("Google", "Runoob", "Taobao", "Facebook");
} 
var sites:string[] = disp2() 
for(var ii in sites) { 
    console.log(sites[ii]) 
}

var alpha:any = ["a", "b", "c"]; 
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); 
console.log("alphaNumeric : " + alphaNumeric );    // a,b,c,1,2,3   


function isBigEnough(element, index, array) { 
    return (element >= 10); 
} 
var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log("Test Value : " + passed ); // false


 var passed2 = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed2 ); // 12,130,44

alphaNumeric.forEach(function (value:any) {
    console.log(value);
}); 

	
var arr1 = new Array("First","Second","Third"); 
var str = arr1.join(); 
console.log("str : " + str );  // First,Second,Third 

var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );  // 6

	
var arr = [0, 1, 2, 3].reverse(); 
console.log("Reversed array is : " + arr );  // 3,2,1,0

var str = ["orange", "mango", "banana", "sugar"].toString(); 
console.log("Returned string is : " + str );  // orange,mango,banana,sugar