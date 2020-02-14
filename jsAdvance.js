//constants
const cardId = 200; //must be initialized;
//let and var . let if blockk scooped.

if(true)
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
   id: 500,
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
for(i=0; i<12; i++)
{
  if(i==8)
  {
    break;
  }
}
console.log(i)// 8;

for(i= 0; i<5; i++)
{
  if(i=4)
  {
    continue;
  }
}
console.log(i) //  5;

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
console.log(obj.gettId.call(newCar)); // 789

//apply
let obje = {
    cardId: 456,
    getId: function ()
    {
      return this.cardId;
    }
  }


//Binding function in java script;
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
let newFn = oob.getId.bind(newCar01);
console.log(oob.getId.newCar01()); // 654

//array function 
let cardWinner = () => 123;
console.log(cardWinner()); // 123
//arrowa function containig both prefix and suffix
let score01 = (prefix, suffix) =>
{
  return prefix + 123 +suffix;
};
console.log("ID: ", '!'); // ID: 123!
