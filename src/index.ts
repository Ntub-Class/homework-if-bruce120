//介紹兩個字串方法跟數字方法
//字串方法-1

let str1 = 'best!';
console.log(str1.fontcolor('red'));
let str2 = 'dog';
console.log(str2.fontcolor('red'));

//字串方法-2
console.log(str1.big());
console.log(str2.big());

//1.數字方法-1
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(10 / 5));

//2.數字方法-2
let number1 = 1255.3
let a = number1.toExponential();
console.log(a)

//money大於值，爽拉
let MM = 40000;
let limit = 60000;//限制值

if (limit = 60000) {
    if (MM >= 40000) {
        console.log('爽');
    } else {
        console.log('廢');
    }
} else {
    console.log('沒用');
}