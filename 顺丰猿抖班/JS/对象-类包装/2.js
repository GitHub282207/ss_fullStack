function myPerson(name,age){
    var that = {}
    that.name=name
    taht.age=age
    return that
}
var person1=myPerson('wn',18)
var person2=myPerson('蜗牛',20)

function Car(color){
    this.color = color
    this.name = 'BMW'
    // return 123
    // return {},[],function(){}
}
var car = new Car('red')
console.log(car);