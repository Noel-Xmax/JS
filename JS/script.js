console.log("Hello");
let name1= "Noel";
console.log(name1);
let name2="Kegehi";
console.log(name2);
let fistName,lastName="Noel,Kegehi";
console.log(fistName,lastName);
let interestRate=0.3;
interestRate=1
console.log(interestRate)
const interestRate2=0.3;
console.log(interestRate2)
let name12="Noel";
let age=12;
let person={
  name:"Noel",
  age:12
}
console.log(person);
person.name="John";
console.log(person);
console.log(person.name);
person['name']="Mary";
console.log(person.name)
// Arrays
let selectedColors=['red','blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2]='green';
console.log(selectedColors);
selectedColors[3]=13;
console.log(selectedColors);
console.log(selectedColors.length);

// functions
function greet(){
  console.log("hello world");
}
greet();
function greet(name){
  console.log("hello"+ name);
}
greet("John");
function greet(name){
  console.log("hello" + name);
}
greet("MARY");
function greet(){
  console.log("hello world");
}
greet();
function greet(name){
  console.log("hello " + name + ''+ lastName);
}
greet('John')
function greet(name){
  console.log("hello " + name + ''+ lastName);
}
greet('John','Smith')

function square(number){
  return number * number ;

}
let number =square(2);
console.log(number);
// function expression
const speak =function(){
   console.log('good day!');
}
speak();

const speak1 =function(name){
  console.log('good day!' + name );
}
speak1('marlo');
const speak2=function(name,time){
  console.log('good '+ time + name);
}
speak2("Noella", 'morning');
const speak3= function(name="Sue",time="night"){
  console.log('good' + time + name);
}
speak3();

const calArea=function(radius){
  let area =3.14 *radius**2;
  return area
};
const area=calArea(5);
console.log(area);
// arrow function

const calcArea=radius=>{
  return 3.14 * radius **2;
};
const A=calcArea(5);
console.log('area is',A)

const calcAreaSum=(r)=>{
  let area=3.14 *r **2;
  return area;
 
}
const areaSum= calcAreaSum(3);
console.log('Your Area is:'+ areaSum);

const greet3=() =>"Hello World";
const result=greet3();
console.log(result);

const bill=(products,tax)=>{
  let total=0;
  for(let i=0; i < products.length; i++){
  total += products[i]+products[i]* tax;
}
return total;
};
console.log(bill([10,15,30],0.2));

// methods
const name4='Shun';
 const greet4=()=>"Hello";

 let result1=greet4();
 console.log(result1);

 let result2=name4.toUpperCase();
 console.log(result2);
//  callback function
let people=['Marlo','Lugi','Shunn','Chun'];
people.forEach(person=> {
  console.log(person);
});
// let persons=['Marlo','Lugi','Shunn','Chun'];
// persons.forEach(person,index=> {
//   console.log({index} + "- hello,"+ {person});
// });

// methods
const items= [
  {name:'Bike', price:100},
  {name:'TV', price:200},
  {name:'Album', price:10},
  {name:'Book', price:5},
  {name:'Phone', price:500},
  {name:'Computer', price:1000},
  {name:'Keyboard', price:25},

]
const filterItems=items.filter((item)=>{
  return  item.price <= 100;
});
console.log(filterItems);

const filterNames =items.map((item)=>{
  return item.name
})
console.log(filterNames);
const filterPrices=items.map((item)=>{
  return item.price
});
console.log(filterPrices);
const findItem=items.find((item)=>{
  return item.name ==='Book'
}
);
console.log(findItem);

const findItemNull=items.find((item)=>{
 return item.name==='Tablet'
}
);
console.log(findItemNull);

items.forEach((item)=>{
console.log(item.name)
}
);
items.forEach((item)=>{
  console.log(item.price)
}
);
const hasCheapItems= items.some((item)=>{
  return item.price <=20
}
);
console.log(hasCheapItems);
const hasExpensiveItems= items.some((item)=>{
  return item.price >=10000
}
);
console.log(hasExpensiveItems);

const hasNeededItems=items.every((item)=>{
  return item.price ===10
}
);
console.log(hasNeededItems);

const allItemsAreLessThan=items.every((item)=>{
  return item.price <=1000
}
)
console.log(allItemsAreLessThan);
const totalPrices=items.reduce((currentTotal,item)=>{
  return item.price +currentTotal
},0)
console.log(totalPrices);
let listings=[1,2,3,3,4,5]
const incluedeTwo=listings.includes(2);
console.log(incluedeTwo);