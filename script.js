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
let students = ["john", "katrin", "finger"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

                                                
                                        










