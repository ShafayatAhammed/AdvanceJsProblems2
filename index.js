// // Question 1 Start

// // Answer to the question no 1

// const person = {
//   name: "Shafayat Ahammed",
//   age: 21,
// };

// const { name, age } = person;

// console.log("Person name is " + name + " and age is " + age);

// // Question 1 End

// // Question 2 Start

// Answer to the question no 2

// // answer are available in circle-area-asker and circle-area-calculator files.

// // Question 2 End

// // Question 3 Start

// // Answer to the question no 3

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(100, 80);

// console.log(rectangle.area());

// // Question 3 End

// // Question 4 Start

// // Answer to the question no 4

// class Person {
//   constructor(fullName) {
//     this._fullName = fullName;
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   set fullName(newFullName) {
//     newFullName = newFullName.trim();

//     if (newFullName === "") {
//       throw new Error("New FullName Required To Update Existing One!");
//     }

//     this._fullName = newFullName;
//   }
// }

// const person = new Person("Shafayat Ahammed");

// console.log(person.fullName);
// console.log((person.fullName = "Hablu Programmer"));

// // Question 4 End

// // Question 5 Start

// // Answer to the question no 5

// const Circle = class {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   circleCircumferenceCalculator() {
//     return 2 * (3.14159 * this.radius);
//   }
// };

// const circle = new Circle(18);

// console.log(circle.circleCircumferenceCalculator());

// // Question 5 End

// // Question 6 Start

// // Answer to the question no 6

// const myName = "myName";
// const myAge = "myAge";
// const myPassion = "myPassion";

// const myInfo = {
//   [myName]: "Shafayat Ahammed",
//   [myAge]: 21,
//   [myPassion]: "Web Developer",
// };

// console.log(myInfo[myName]);
// console.log(myInfo[myAge]);
// console.log(myInfo[myPassion]);

// // Question 6 End

// // Question 7 Start

// // Answer to the question no 7

// class Animal {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   get getAnimalInfo() {
//     return `The animal is ${this._name} and it's age is ${this._age}`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this._color = color;
//   }

//   get bark() {
//     return `The animal is ${this._name}, it's age is ${this._age}, color is ${this._color} and now it is barking`;
//   }
// }

// const dog = new Dog("Chop", 2, "Black");

// console.log(dog.getAnimalInfo);
// console.log(dog.bark);

// // Question 7 End

// // Question 8 Start

// // Answer to the question no 8

// class Shape {
//   constructor(type) {
//     this._type = type;

//     if (new.target === Shape) {
//       throw new Error("You wouldn't directly instantiate Shape!");
//     }
//   }

//   get getShapeType() {
//     return `The shape type is ${this._type}`;
//   }
// }

// class Rectangle extends Shape {
//   constructor(type, width, height) {
//     super(type);
//     this._width = width;
//     this._height = height;
//   }

//   get getShapeDetails() {
//     return `The shape type is ${this._type}, width is ${this._width} and height is ${this._height}`;
//   }
// }

// const rectangle = new Rectangle("Rectangle", 500, 500);

// console.log(rectangle.getShapeType);
// console.log(rectangle.getShapeDetails);

// // Question 8 End

// // Question 9 Start

// // Answer to the question no 9

// class MathUtil {
//   static square(number) {
//     return Math.pow(number, 2);
//   }
// }

// console.log(MathUtil.square(8));

// // Question 9 End

// // Question 10 Start

// // Answer to the question no 10

// const uniqueSymbolKeyCeoFounder = Symbol(
//   "A unique key for ceo & founder by symbol"
// );
// const uniqueSymbolKeyCoFounder = Symbol(
//   "A unique key for co-founder by symbol"
// );

// const habluProgrammerFounderInfo = {
//   [uniqueSymbolKeyCeoFounder]: "Eshan Ahamed Ahad",
//   [uniqueSymbolKeyCoFounder]: "Harun-Ur-Roshid",
//   company_type: "Ed-Tech",
// };

// console.log(habluProgrammerFounderInfo[uniqueSymbolKeyCeoFounder]);
// console.log(habluProgrammerFounderInfo[uniqueSymbolKeyCoFounder]);
// console.log(habluProgrammerFounderInfo.company_type);

// const uniqueSymbolKeyCeoFounderSame = Symbol(
//   "A unique key for ceo & founder by symbol"
// );

// console.log(uniqueSymbolKeyCeoFounder === uniqueSymbolKeyCeoFounderSame);

// // Question 10 End
