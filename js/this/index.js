// function identify(context){
//     return context.name.toUpperCase()
// }

// function speak(context) {
//     var greeting = "hello i am" + identify(context)
//     console.log(greeting);
// }

// var me ={
//     name:'mn'
// }
// var you={
//     name:'dd'
// }
// speak(me)

//this
// function identify(){
//     return this.name.toUpperCase()
// }

// function speak() {
//     var greeting = "hello i am" + identify.call(me)
//     console.log(greeting);
// }

// var me ={
//     name:'mn'
// }
// var you={
//     name:'dd'
// }
// speak(me)

// function foo(){
//     let person ={
//         name:'wn',
//         age:18
//     }
//     console.log(this);
// }
// function bar(){
//     let person={
//         name :'蜗牛',
//         age:20
//     }
//     foo()
// }
// bar()
// function foo(){
//     console.log(this.a);
// }
// var a=2;
// // foo()
// (function(){
//     'use strict'
//     foo()//严格模式下，foo的调用，与位置无关
// })()

//隐式绑定
// function foo(){
//     console.log(this.a);
// }
// var obj1 = {
//     a:2,
//     obj2:obj2
// }
// var obj2={
//     a:3,
//     foo:foo//函数引用function foo(){console.log(this.a)}，foo（）函数调用
// }
// obj1.obj2.foo()
// 隐式丢失
function foo(){
    console.log(this.a);
}
var obj = {
    a:3,
    foo:foo
}
var bar = obj.foo
var a='hello'
bar ()
