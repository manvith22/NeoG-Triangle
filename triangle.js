const inputs = document.querySelectorAll(".input");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");


function calSumOfAngles(angle1,angle2,angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){
    const sum = calSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sum === 180){
        output.innerText = "isTriangle"
    }
    else{
        output.innerText = "not a triangle";
    }
}

btn.addEventListener("click", isTriangle);