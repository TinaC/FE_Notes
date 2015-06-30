// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // JS中string是基本类型，Array是引用类型
    
    // 调用Object原生的toString方法，会返回它的构造偶函数名。
    return Object.prototype.toString.call(arr) == "[object Array]";

    // 这个方法有兼容性问题。。
    // return (Array.isArray(arr));

    // 红宝书（5.2.1，22.1.1）:instanceof操作符的问题在于它假定单一的全局执行环境。要instanceof返回true,arr必须是一个数组，而且还必须与Array构造函数在同一个全局作用域中(Array是window的属性。）如果array是在另一个框架中定义的数组，那么以下代码就会返回false。
    // return (arr instanceof Array);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    return Object.prototype.toString.call(fn) == "[object Function]";
}



// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等

// http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
// 注意 non-enumerable attributes，hidden properties， prototype inheritance 
// http://www.oranlooney.com/deep-copy-javascript/
function cloneObject(src) {

    // your implement
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

window.onload = function() {
	var colors = new Array();
	console.log("安全的类型检测");
	console.log(isArray(colors));

    var sum = function (num1, num2) {
        return num1 + num2;
    }

    // var another = sum;

    console.log(isFunction(sum));
    // console.log(isFunction(another));
}