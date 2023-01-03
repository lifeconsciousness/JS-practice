//button.onclick and getelementbyid usage

let count = 0;

document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("num").innerHTML = count;
}

document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("num").innerHTML = count;
    
}


////////////////////////////////////////////////
//eventListener usage

const testBtn = document.querySelector(".btn");

testBtn.addEventListener('click', function logText(){
    console.log("you clicked 'click' button");
});


//////////////////////////////////////////////
//checked property

document.getElementById('submitBtn').onclick = function(){
    const myCheckbox = document.getElementById('myCheckbox');
    if(myCheckbox.checked){
        console.log('wow, you are a human');
    }
    else {
        console.log('110011001110010');
    }
};


////////////////////////////////////////////
//switch statement

document.getElementById("submitBtn1").onclick = function(){
    let grade = document.getElementById("grade").value;

    switch (grade){
        case "A":
            console.log("You did great");
            break;
        case "B":
            console.log("You did good");
            break;
        case "C":
            console.log("You did okay");
            break;
        default:
            console.log("That is not a grade");

    }
}

///////////////////////////////////////////
//ternary operator

checkWinner(false);
checkNumber(8);

function checkWinner(win){
    win  ? console.log('you win') : console.log('you lose');
}

function checkNumber(number){
    number > 10  ? console.log('number is greater than 10') : console.log('number is less than 10');
}


//////////////////////////////////////////
//template literals and css styles in js

let nameH = "Human";
let text = `Hello ${nameH}<br>`;

//console.log(text);

myLabelVariable = document.getElementById('myLabel');
myLabelVariable.style.color = `orange`;
myLabelVariable.style.backgroundColor = `black`;
myLabelVariable.innerHTML = text;


/////////////////////////////////////////

let num = 100.24;

num = num.toLocaleString(undefined, {style: "unit", unit: "celsius"})
//console.log(num);
num = num.toLocaleString(undefined, {style: "percent"});


////////////////////////////////////////
//random number in range between 1 and 10

let randNum = Math.floor(Math.random() * 10 + 1);


///////////////////////////////////////
//convert temperatures

result = document.getElementById("result");
temperatureInput = document.getElementById("temperatureInput");
let tempInp = document.querySelector("#temperatureInput");

tempInp.oninput = function convertTemperature(){
    if(document.getElementById('celsiumChoice').checked){
        console.log('celsium');
        result.innerHTML = `${(temperatureInput.value - 32) * (5/9)} °C `;
    }
    else{
        console.log('fag');
        result.innerHTML = `${temperatureInput.value * 9 / 5 + 32}°F`;
    }
}


/////////////////////////////////////
//array methods

let fruits = ["apple", "banana", "orange"];
fruits.push("kiwi");    //adds element to the end of arrray
fruits.pop();           //removes last element from array
fruits.unshift("mango");//adds element to the beginning
fruits.shift();         //removes element from beginning

let fruitsLength = fruits.length;
let index = fruits.indexOf("orange");
//console.log(index);

for(let i = 0; i< fruitsLength; i++){
    //console.log(fruits[i]);
}

fruits = fruits.sort();             //sort array in alphabetical order
fruits = fruits.sort().reverse();   //reverse order

for(let i of fruits){               //better way to make loops for array
    //console.log(i);
}

/////////////////////////////////////
//2D arrays

let vegerables = ["cabbage", "rice"];
let meat = ["pork", "beef"];

let groceryList = [vegerables, meat];

groceryList[0][1] = "carrot";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

/////////////////////////////////////
//spread operator - unpacks array to be useful

let numbers = [1,2,2,3,5,7];
console.log(numbers);
console.log(...numbers);

let maxNum = Math.max(...numbers);
console.log(maxNum);

let numbers1 = [10,34];
numbers.push(...numbers1); //add one array to the end of the other
console.log(...numbers);


////////////////////////////////////
//resting parameter - indefinite number of parameters

let a = 1; let b = 3; let c = 5; let d = 9;

console.log(sum(a,c,d,10));

function sum(...sumNumbers){     //sumNumbers - array and resting parameter
    let result = 0;

    for(let arrNumber of sumNumbers){
        result += arrNumber;
    }

    return result;
}


////////////////////////////////////
//callback - a function passed as an argument to another function

function stringSum(callback, ...stringArr){
    let outputStr = "";
    for (let str of stringArr){
        outputStr += str;
    }
    callback(outputStr);
}

function displayStr(str){
    console.log(str);
}
function displayStr1(str){
    str+="tht";
    console.log(str);
}

stringSum(displayStr,"strgb", "=--dfs--", "2356");
stringSum(displayStr1,"strgb", "=--dfs--", "2356");


/////////////////////////////////
//array.forEach() = executes a provided callback function once for each
                                                 //element of the array
                                           //capitalize array of stings
let students = ["john", "katrin", "finger"];

students.forEach(capitalize);
students.forEach(print);


function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}
function displayArr(array){
    for (let element of array){
        console.log(element);
    }
}

//////////////////////////////////
//array.map() method executes callback function 
//     for each element and creates a new array

let numbersArr = [1,2,3,4,5]
let squaresArr = numbersArr.map(squareFunc)

function squareFunc(element){
    return Math.pow(element,2)
}

console.log(...squaresArr)


//////////////////////////////////
//array.filter() = creates new array of elements
//      that passed test provided by a functiion

let ages = [16,17,19,18,40]
let adults = ages.filter(checkAge)
function checkAge(element){
    if (element >= 18) return element
}


//////////////////////////////////
//array.reduce() = reduces an array to a single value

let prices = [5,10,20,30,35]
let total = prices.reduce(pricesSum)

console.log(`The total is ${total}`)

function pricesSum(total, element){
    return total + element
}


//////////////////////////////////
//sort an array of numbers

let grades = [100,90,80,40,76,70]

grades = grades.sort(descendingSort)
grades = grades.sort((x,y) => x-y) //ascending sort with arrow func
console.log(...grades)

function descendingSort(x, y){
    return y - x //x - y ascending order 
    //            0.5 - Math.random() - rand order
}

//////////////////////////////////
//arrow function =>

const greeting = (userName) => console.log(`Hey ${userName}`)
greeting("Himars")

const percentFunc = (firstNum, secondNum) => (firstNum / secondNum)*100
console.log(percentFunc(8,245))

//////////////////////////////////
//shuffle elements of array

let months = ["February", "June", "July", "December", "August"]

shuffle(months)
console.log(...months)
console.log(randMonth(months))

function shuffle(array){
    let currentIndex = 0;

    while(currentIndex != array.length){
        let randIndex = Math.floor(Math.random() * array.length)

        let temp = array[currentIndex]
        array[currentIndex] = array[randIndex]
        array[randIndex] = temp 

        currentIndex++
    }
    return array;
}

function randMonth(array){
    return array[Math.floor(Math.random() * array.length)]
}


/////////////////////////////////
//Map = object that holds key-value pairs of any data type

const clothesStore = new Map([
    ["pants", 40],
    ["hoodie", 50],
    ["t-shirt", 25]
]);
                 
let shoppingCart = 0

shoppingCart += clothesStore.get("hoodie")
clothesStore.set("socks", 999)
clothesStore.delete("t-shirt")

if(clothesStore.has("t-shirt")){
    console.log("there are t-shirts available ")
} else console.log("there are no t-shirts")

clothesStore.size //is equal 3

clothesStore.forEach((value, key) => console.log(`${key} cost ${value}$`))

///////////////////////////////////
//object, this statement

const car = {
    name: "Honda accord",
    color: "Dreary light-grey",
    year: 2005,

    drive: function(){
        console.log(`You drive ${this.name} ${this.year}`)
    },
    break: function(){
        console.log("You stepped on the brakes")
    }
}

car.name //access object property
car.drive() //invoke object method  


///////////////////////////////////
//class = a blueprint for creating objects

class Player{
    score = 0;

    pause(){
        console.log("pause game")
    }
    exit(){
        console.log("exit game")
    }
} 

const player_1 = new Player();
const player_2 = new Player();

player_1.score+=10;
player_2.score+=99;

player_1.pause();
player_2.exit();

//----constructor = a special method of a class,
//------accepts arguments and assigns properties

class Student{
    constructor(name,age,grade){ //parameters for the future objects
        this.nameofStudent = name
        this.age = age
        this.grade = grade
    }
    
    study(){
        console.log(`${this.name} is studying`)
    }
    changeName(newName){
        this.nameofStudent = newName
    }
}

const student1 = new Student("Ron", 18, 5)
student1.changeName("Bob")
console.log(student1.nameofStudent)
const student2 = new Student("MaleName334", 20, 4.5)


