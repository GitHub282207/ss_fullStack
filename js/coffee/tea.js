// 1.把水煮开
// 2.用沸水浸泡茶叶
// 3.把茶水倒进杯子
// 4.加柠檬       
 var Tea = function(type) {
    this.type = type
 }
 Tea.prototype.boilWater = function(){
    console.log('把水煮开');
 }
 Tea.prototype.brewTeaGriends = function(){
    console.log('用沸水浸泡茶叶');
 }
 Tea.prototype.pureInCup = function(){
    console.log('把茶水倒进杯子');
 }
 Tea.prototype.addlemon = function(){
    console.log('加柠檬');
 }
 Tea.prototype.init = function() {
    this.boilWater();
    this.brewTeaGriends();
    this.pureInCup();
    this.addlemon();
}
var oneTea = new tea("碧螺春");
console.log( oneTea.type);

console.log( oneTea.__proto__==tea.prototype);
oneTea.init();

 