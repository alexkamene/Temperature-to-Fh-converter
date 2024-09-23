let textbox=document.getElementById("textbox");
let tofahrenheit=document.getElementById("tofahrenheit");
let tocelcius=document.getElementById("tocelcius");
let results=document.getElementById("results");
let temp;

function convert(){
if(tofahrenheit.checked){
temp=textbox.value;
temp=temp*9/5+32;
results.textContent=temp.toFixed(2)+" ˚F";

}
else if(tocelcius.checked){

    temp=textbox.value;
temp=(temp-32)*(5/9);

results.textContent=temp.toFixed(2)+" ˚C";
}
else{
    results.textContent="Please select a Unit";
    
}

}
