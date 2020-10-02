//Sam was here
function updateNumber(id) {

    const numElement = document.getElementById("number");
    const inputArea = document.getElementById("inputArea");

    let numberValue = numElement.innerText;
    let equation = inputArea.value;
    let containsOp = equation.includes('+') || equation.includes('-');

    // let value =  Number(numElement.innerText) ;
    let value = id.innerText;

    if ((value === "+" || value === "-" || value === "*" || value === "/") && containsOp) {
        runningCal(value);  
        inputArea.value = inputArea.value + value;
           
    } else {
        // numElement.innerText = numberValue + value;
        inputArea.value = inputArea.value + value;
    }

}


function calculate(){
    const numElement = document.getElementById("number");
    let numberValue = numElement.innerText
    const prevOpp = numberValue.includes('+') ? "+" : numberValue.includes('-') ? "-" : "+";
    const values = numElement.innerText.split(prevOpp);

    if (prevOpp === "+") {
        numElement.innerText = (Number(values[0]) + Number(values[1])) + opp;
    } else {
        numElement.innerText = (Number(values[0]) - Number(values[1])) + opp;
    }
}

function runningCal(opp) {
    const numElement = document.getElementById("number");
    const inputValue= document.getElementById("inputArea").value;
     let numberValue = numElement.innerText === ""?  inputValue :numElement.innerText;

    const prevOpp = numberValue.includes('+') ? "+" : numberValue.includes('-') ? "-" : "+";
    const values = numElement.innerText.split(prevOpp);

    if (prevOpp === "+") {
        numElement.innerText = (Number(values[0]) + Number(values[1])) +" " +opp;
    } else {
        numElement.innerText = (Number(values[0]) - Number(values[1])) +" "+ opp;
    }
}

function clearNum() {
    document.getElementById("number").innerText = "";
    document.getElementById("inputArea").value = "";
    console.log(clear);
}

