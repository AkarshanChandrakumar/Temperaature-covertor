document.querySelector('form').addEventListener('submit',function(event){event.preventDefault()})
const textBox=document.getElementById("textBox");
const Fahrenheit=document.getElementById("toFahrenheit");
const Celsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;
function convert(){
 if(toFahrenheit.checked){
    temp=Number(textBox.value);
    temp=temp*9/5+32;
    result.textContent=temp.toFixed(1)+"°F"
}
else if(toCelsius.checked){
    temp=Number(textBox.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"°C"
}
else {
    result.textContent="select a unit";
}
}