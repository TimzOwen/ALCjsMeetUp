
const cardId = 200; //must be initialized;(Constant is therefore used instead of the public static final")|
//let and var . let if blockk scooped.

if(true)// check the condtion of the car color selee=ction
{
  let cardId = 25;
}
console.console.log(cardId); //gievs console.error();

if(true)
{
  var cardId1 = 500;
}
console.log(cardId1);//prints 500

//rest parameter
function sendCars(day, ...cardIds)
{
  cardIds.ForEach(id => console.log(id));
}
sendCars('Monday', 100, 200 , 300);

//destructing arays
let cardIds = [1,2,3];
let [car1, car2, car3] = cardIds;
console.log(car1, car2, car3); //  1 2 3

//rest parameter with destructing arrays
let carIds = [100, 200, 300];
let car01, car02, theRest;
[car01, ...theRest] = carIds;
console.log(car01, theRest);// 100 [300]

//destructing objects;
let car = {
   id: 4500,
   style: 'Convertible'
};
let {id ,style} =car;
console.log(id, style);// 500 Convertible
//Or
let ids, styles;
({id , style} = car);
console.log(id, style);// 500 Convertible

//spread syntax
function carsID(car11, car12, car13)
{
  console.log(car11, car12, car13)
}
let carssID = [100, 200, 300];

carsID(...carssID);//100 200 300;
//OR
let carrsID = 'abc';
carsID(...carrsID); // a b c;

//typeOf
typeOf(1);//number
typeOf('hello');// string
typeOf(true);//boolean

//typeOf((){});//function

//for loop
let i=0;
for(; i<12; i++)
{
  if(i==8)
  {
    break;
  }
}
console.log(i)// 8;

for(let i= 0; i<5; i++)
{
  if(i=4)
  {
    continue;
  }
}
console.log(i) // 0 1 2 3 5;

//Logical operators
let userString = 'null';
let userSetting = { name: 'kim'};

console.log(userString || userSetting);// kim;

let s1 = 'Zoo';
let s2 = 'alphabet';
 if(s1.toUpperCase < s2.toUpperCase)
 {
   console.log(true);
 }
 else {
   console.log(false);
    }

//comparison
console.log(5>44 ? 'yes':'No');// no

let year =1998;
year+=10;
console.log(year);//1208

//function and scoope
function startCar()
{
  let message = 'Starting ---'
  let noFuel = function  fuelIT()
  {
    let message = "not braking";
  };
  noFuel();
  console.log(message);//fetch from parent declaration to 'starting'
}
startCar();

//IIFE's funtions
(function()
{
  console.log("in function")
})();// function called imeadiately

//closures
let app = (function ()
{
  let cardId = 123;
  let getId = function ()
  {
    return cardId;
  };
  return  {
    getId: getId
  }
})();
console.log(app.getId());

//.this in function and objects
let o ={
  cardId:123,
  getId: function()
  {
    return this.carId
  }
};
console.log(o.getId());

//call $ applay function
let obj = {
    cardId: 456,
    gettId: function ()
    {
      return this.cardId;
    }
};
let newCar ={
  cardId:789
};
console.log(o.gettId.call(newCar)); // 789

//apply
let obje = {
    cardId: 456,
    gettId: function ()
    {
      return this.cardId;
    }
};

let newCar1 ={
  cardId:789
};

console.log(obje.gettId.apply(newCar1['ID: '])); // ID:789


//Binding function in java script
let oob = {
  cardId: 321,
  getId: function()
  {
    return this.getId
  }
};
let newCar01 = {
  cardId:654
};
var newFn = oob.getId.bind(newCar01);
console.log(oob.getId.newCar01()); // 654

//this keyword in constructor function

function Car(id)
{
  this.cardId = id;
}
 let car = new Car(123);

 console.log(car.carId); // 123

//Prototype in java script


String.prototype.hello= function ()
{
  return this.toString() + 'hello';
};
console.log('foo:' .hello()); // foo hello

//JSON  Notation
 let car = {
   id: 12,
   style: "Convertible"
 };
 console.log(JSON.stringify(car)); // "id":123 , "style": 'convertible'

//Converting arays to JSON
let car = [
  {carID:123},
  {carID:456},
  {carID:789}
];
console.log(JSON.stringify(car));// [{'cardID':123},{'cardID'456},{'cardID':789}]

//parsing json
let jsonIn = `
[
  {'carId':123},
  {'carId':456},
  {'carId':789}
]`;
let cardId = JSON.parse(jsonIn);
console.log(cardId)// real objects = {cardId:123},{cardId:456},

//forEach iteration in looping arays
let carIds =[
    {carId:123, style:'sedean'},
    {carId:123, style:'convetible'},
    {carId:123, style:'sedean'}
];
carIds.forEach(car => console.log(car));
carIds.forEach((car, index)=> console.log(car,index));// gives acr and index array position

let carIds =[
    {carId:123, style:'sedean'},
    {carId:123, style:'convertible'},
    {carId:123, style:'sedean'}
];
 let convertibles= cardIds.filter(car=> car.style === 'convertible');

 console.log(convertibles);// 0: {carId: 123, style: "convertible"}
           //  length: 1
          //__proto__: Array(0)

//CAsting all arrays
let carIds =[
    {carId:123, style:'sedean'},
    {carId:123, style:'convertible'},
    {carId:123, style:'sedean'}
];
 let results = carIds.every(car=> car.carId>0);
 console.log(results);// true

//find in array oteration
let carIds =[
    {carId:123, style:'sedean'},
    {carId:893, style:'convertible'},
    {carId:033, style:'sedean'}
];
let car = carIds.find(car=> car.carId>500);
console.log(car);// 893
//js classes
class Glass{

};
let glass = new Glass();
console.log(glass);

class Car{
    constructor(id)
    {
      this.id = id;
    }
}
let car = new Car(123);
car.id = 456; //becomes the current id 456 as output
console.log(car.id);//123

 //methods and constructors;
 class Car{
     constructor(id)
     {
       this.id = id;
     }
     identify(suffix)//no need of declaration
     {
       return `Car Id: ${this.id} ${suffix}`;//avoid white spaces
     }
 }
 let car = new Car(123);

 console.log(car.identify("!!!"));//123

 //inheritance
 class Vehicle{
     constructor()
     {
       this.type = 'car';
     }
     Start()
     {
       return `starting: ${this.style} }`;
     }
 }

 //inheritance;
  class Lorry extends Vehicle{
    Start()
    {
      return `starting in Car `+ super.Start();
    }

  }
 let car = new Vehicle();

 console.log(car.type);//123

//Importing modules
import {car} from './car.js/';
let car = new Vehicle(123);
console.log(car.id);//123

//programing BOM and DOM
year = 489566;
console.log(window.year)// 4895

//PROGRAMING BOM AND DOM

let intervalId = setInterval(function()
{
  console.log('1 sec passed');
},1000);
clearInterval(intervalId);// commenting out 'clearInterval' outpurts 1 sec on each count passed

//location
console.log(location.href);//displays current window;
console.log(document.location.href);//displays same thing using the document

//acessing BOM and DOM
let el = document.getElementById('para1');
console.log(el);//prints first html paragram.

//Error Handling
try
{
  let car = newCar;
  
  throw new Error("Oops it occure again");
}
catch(error)
{
  console.log('error',error)
}
finally
{
  console.log('out');
}
console.log("continuing---");// prints out continuing aas car is not defined

//promise
let promise = new promise(function (resolve,reject)
{
  setTimeout(resolve, 100,'some value');
});
console.log(promise);





