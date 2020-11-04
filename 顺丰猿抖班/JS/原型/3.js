Person.prototype.lastName = 'liu'
function Person(name){
    this.name = name
}
var person = new Person('zhipeng')
// // console.log(person.lastName);
// // Person.lastName = 'wang'//没有改动原型属性，只是在自己的对象中添加了lastname属性
// Person.prototype.lastName = 'wang'
// console.log(person.lastName);
// console.log(person);

// delete person.lastName//没有删除原型属性
// delete person.prototype.lastName
// console.log(person.lastName);



// function Bus(){

// }
// Car.prototype ={
//     constructor:Bus
// }
function Car(){
   
}
var car = new Car()
console.log(Car.prototype);//function car() {}
// constructor指向的是car(),目的是让car()构造出来的对象想要找到自己的来历时能找到
// car.constructor
console.log(car.constructor);

