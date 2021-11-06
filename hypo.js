const input = document.querySelectorAll('.input');
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");


function calSum(a,b){
    const sum = a*a + b*b;
    return sum;
}



function calculateHypo(){
    const conversion = calSum(Number(input[0].value),Number(input[1].value));
    const Hypo = Math.sqrt(conversion);
    output.innerText = "Hypotenuse is: " + Hypo;

}
btn.addEventListener('click',calculateHypo);