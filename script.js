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

console.log("test1");

console.log("test1232413");

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





