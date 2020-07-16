function helloWorld()
{
for(var i = 0;i<7;i++)
console.log(i);

console.log(i);

}



helloWorld();

// end of excercise 1


// excercise 2:

const person = {
name: "Ahmed",
talk() {
    console.log("he said something")
},
walk:function()
{console.log(this)},
hate() {},
age: 2

}
console.log("the person's name is:");
console.log(person.name);

console.log("the person said:");
person.talk();



// end of excercise 2


// excercise 3

const personWalk = person.walk();

//personWalk();



// end of excercise 3


// excercise 4

const color =  ["red","blue","green"]

const item = color.map(element =>  "<li>" + element+ "<li>"); // what map function did, is that it mapped each element in the array, to a function where the function executes whatever
// it wants, but passing the element of the array to be used by it.
// so basically, the map function is a way of accessing and modifying each element in the array based on how you want to select it,
// Q: why not just access it the traditional way? because this way, you automate the process of accessing it? and also simpler code. the mapping is done for you by the map function.
// and it only executes when you want it. so its not modifying the data. so it's just a clean way of doing it.
console.log(item);

const itemwithtemplateliterals = color.map(element => `<li>${element}</li>`)

console.log("with template literals:");
console.log(itemwithtemplateliterals);
// end of excercise 4


// excercise 5: object destructing

const address = {street:'3604', city:'manama',country:'Bahrain'}

// traditionally:
//const city = address.city;
//const street = address.street;
//const country = address.country;


// with advanced object destructing

const {city,street,country} = address;

// what happend here? we've declared constants and we've mapped them together to align with the variables in the address object
// we've retrieved their value based on their position in the array and in the address object index
// with object destructing, the variables in the const variables have to exactly match the name in the address object.

console.log(street);

// we can use aliases to give it a different name:

const {city:cityX} = address;

console.log(cityX);

// end of excercise 5


// excercise 6: spread operators

// traditionally concatenation works like this:

arrayX = ["one","two","three"];
arrayY = ["four","five","six"];

const combinedTraditionally = arrayX.concat(arrayY);
console.log("here combined traditionally");
console.log(combinedTraditionally);

const combinedWithSpreads = [...arrayX,"middle",...arrayY];

console.log("combined with spreads");
console.log(combinedWithSpreads);


// the spread operator is the three dots: ...arrayName
// what it does is it outputs all of its elements in an array like fashion
// ...arrayName with do it like this: element1,element2,element3,etc


// end of excercise 6


// excercise 7: classes











































