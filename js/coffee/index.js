//talk in js
// 一杯热咖啡
// es5 类 大写的函数
// 1.把水煮开
// 2.用沸水冲泡咖啡
// 3.把咖啡倒进杯子
// 4.加糖和牛奶       动作即方法
// 构造函数 类 抽象的 实例化 对象 封装类的
var Coffee = function(type){
 this.type = type
}
//原型
Coffee.prototype.boilWater = function() {
    console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function(){
    console.log('加糖和牛奶');
}
Coffee.prototype.init = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addSugarAndMilk();
}
var oneCoffee = new Coffee("猫屎咖啡");//new 构建对象
console.log(oneCoffee.type);
oneCoffee.init();

// js 类 怎么构建起来的 = 火车头 构造函数 （首字母大写）+ 多节车厢 prototype
// 构造函数和普通函数的区别是 是否被new
// 函数是一等对象 
// console.log()
// js本没有类， 只有对象 Coffee，任何函数都有一个prototype属性
console.log(Coffee.prototype.constructor == Coffee);

