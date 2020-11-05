var obj = {}

var obj1 = new Object()
// obj1.__proto__= ？

// Object.create(原型)
var obj = {
    name:'wn',
    age:18
}

var obj1 = Object.create(obj)
// obj1.__proto__=?

//网易面试题
// 所有对象最终都会继承自object.prototype???

// 不是的  特例
var obj = Object.create(null)

