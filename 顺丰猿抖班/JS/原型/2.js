// 可以提取公有属性
Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400
Car.prototype={
    
}

function Car (color ,owner){
    this.color = color
    this.owner = owner
    // this.name = 'BMW'
    // this.lang = 4900
    // this.height = 1400
}
 var car = new Car('red','hwm')
 var car1 = new Car('green','lh')

 console.log(car.name);
 console.log(car1.lang);