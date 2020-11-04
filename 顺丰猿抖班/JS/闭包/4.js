function test(){
var food ='apple'

function a() {
    console.log(food);
    foo = 'banana'
}

// a()
 function b(){
     console.log(food);
 }
//  b()
}

// test()
// a()
// b()


function fruit (){
    var food ='apple'
    var obj={
        eatFood:function(){
            if(food!=''){
                console.log('i am eating'+food);
                food=''

            }else{
                console.log('there is nothing');

            }
        },
        pushFood:function(myfood){
            food = myfood
        }
    }
    return obj
}
var person = fruit()
person.eatFood()
person.eatFood()
person.pushFood('banana')
person.eatFood()