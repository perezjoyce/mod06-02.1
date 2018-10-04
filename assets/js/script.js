//========================= INTRO OF VARIABLES =============================//
let inputA = 0;
let operation = 0;
let inputB = 0;
let total = 0;



//========================= inputA & inputB =============================//

// button 1
//declare event for btn1 as click
document.getElementById('btn1').onclick = () => {
    //get value for setAInput 
    inputA = document.getElementById('setAInput').value;
    //set condition that if input a already has a value OR an operation has been chosen, proceed to setBInput
    if (inputA.length == 0 || operation == 0) {
        //place previous value inside setAInput concatinate with 1
        document.getElementById('setAInput').value = inputA + "1";
   
    } else {
        //get value for setBInput
        inputB = document.getElementById('setBInput').value;
        //place value inside setBInput concatinate with 1
        document.getElementById('setBInput').value = inputB + "1";
        // update of the value of inputB variable so it won't just be 1
        inputB = document.getElementById('setBInput').value;
    }
}


// button 2
document.getElementById('btn2').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "2";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "2";
        inputB = document.getElementById('setBInput').value;
    }
}


// button 3
document.getElementById('btn3').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "3";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "3";
        inputB = document.getElementById('setBInput').value;
    }
}

// button 4
document.getElementById('btn4').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "4";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "4";
        inputB = document.getElementById('setBInput').value;
    }
}

// button 5
document.getElementById('btn5').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "5";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "5";
        inputB = document.getElementById('setBInput').value;
    }
}

// button 6
document.getElementById('btn6').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "6";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "6";
        inputB = document.getElementById('setBInput').value;
    }
}

// button 7
document.getElementById('btn7').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "7";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "7";
        inputB = document.getElementById('setBInput').value;
    }
}


// button 8
document.getElementById('btn8').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "8";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "8";
        inputB = document.getElementById('setBInput').value;
    }
}


// button 9
document.getElementById('btn9').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "9";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "9";
        inputB = document.getElementById('setBInput').value;
    }
}

// button 0
document.getElementById('btn0').onclick = () => {
    inputA = document.getElementById('setAInput').value;
    if (inputA.length == 0 || operation == 0) {
        document.getElementById('setAInput').value = inputA + "0";
   
    } else {
        inputB = document.getElementById('setBInput').value;
        document.getElementById('setBInput').value = inputB + "0";
        inputB = document.getElementById('setBInput').value;
    }
}





//========================= OPERATIONS =============================//


//who, what
document.getElementById('btnPlus').onclick = () => {
    //where
    document.getElementById('operationInput').value = "+";
    operation = "+";
}

document.getElementById('btnMinus').onclick = () => {
    document.getElementById('operationInput').value = "-";
    operation = "-";
}

document.getElementById('btnMultiply').onclick = () => {
    document.getElementById('operationInput').value = "*";
    operation = "*";
}

document.getElementById('btnDivide').onclick = () => {
    document.getElementById('operationInput').value = "/";
    operation = "/";
}

document.getElementById('btnModulo').onclick = () => {
    document.getElementById('operationInput').value = "%";
    operation = "%";
}


//========================= TOTAL =============================//


//getting total
//who, what
document.getElementById('btnEqual').onclick = () => {
    
    // but
    if (operation == "+") {
        total = parseInt(inputA) + parseInt(inputB); 
    }

    if (operation == "-") {
        total = parseInt(inputA) - parseInt(inputB); 
    }

    if (operation == "*") {
        total = parseInt(inputA) * parseInt(inputB); 
    }

    if (operation == "/") {
        total = parseInt(inputA) / parseInt(inputB); 
    }

    if (operation == "%") {
        total = parseInt(inputA) % parseInt(inputB); 
    }

    // where
    document.getElementById('totalInput').value = " = " + total;

}


// clear
document.getElementById('btnClear').onclick = () => {
    document.getElementById('setAInput').value = "";
    document.getElementById('operationInput').value = "";
    document.getElementById('setBInput').value = "";
    document.getElementById('totalInput').value = "";
    // reset
    operation = 0;
    inputA = 0;
    inputB = 0;
    total = 0;
}





