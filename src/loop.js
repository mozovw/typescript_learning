var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
// forEach 在 iteration 中是无法返回的，所以可以使用 every 和 some 来取代 forEach。 
var list = [4, 5, 6];
list.forEach(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
});
var list2 = [4, 5, 6];
list2.every(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
var num = 5;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("5 的阶乘为：" + factorial);
