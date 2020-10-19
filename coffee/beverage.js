beverage.prototype.boilWater = function() {
    console.log('把水煮沸');
}
beverage.prototype.brew = function() {
}
beverage.prototype.pureInCup = function() {
}
beverage.prototype.addCondiments = function() {
}
beverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pureInCup();
    this.addCondiments();
}
var Coffee = function() {

} 

Coffee.prototype = new Beverage();
Coffee.prototype.brew = function(){
    console.log('用沸水冲泡');
}
Coffee.prototype.pureInCup = function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function(){
    console.log('加糖和牛奶');
}
 var oneCoffee = Coffee();
 oneCoffee.init();

