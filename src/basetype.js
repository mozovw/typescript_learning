var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 十六进制
var nickname = "Runoob";
var years = 5;
var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + name + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
var flag = true;
// 在元素类型后面加上[]
var arr = [1, 2];
// 或者使用数组泛型
var arr2 = [1, 2];
var x;
x = ['Runoob', 1]; // 运行正常
console.log(x[0]); // 输出 Runoob
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); // 输出 2
function hello() {
    alert("Hello Runoob");
}
var y = 1; // 数字类型
y = 'I am who I am'; // 字符串类型
y = false; // 布尔类型
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
// 启用 --strictNullChecks
var z;
z = 1; // 运行正确
z = undefined; // 运行正确
z = null; // 运行正确
