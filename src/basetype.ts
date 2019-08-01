let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744;    // 八进制
let decLiteral: number = 6;    // 十进制
let hexLiteral: number = 0xf00d;    // 十六进制

let nickname: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;

let flag: boolean = true;

// 在元素类型后面加上[]
let arr: number[] = [1, 2];
// 或者使用数组泛型
let arr2: Array<number> = [1, 2];

let x: [string, number];
x = ['Runoob', 1];    // 运行正常
console.log(x[0]);    // 输出 Runoob

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2

function hello(): void {
    alert("Hello Runoob");
}

let y: any = 1;    // 数字类型
y = 'I am who I am';    // 字符串类型
y = false;    // 布尔类型

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

// 启用 --strictNullChecks
let z: number | null | undefined;
z = 1; // 运行正确
z = undefined;    // 运行正确
z = null;    // 运行正确