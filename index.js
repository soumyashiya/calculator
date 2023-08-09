
function btnclick(val){
    document.getElementById("output-screen").value=
    document.getElementById("output-screen").value+val;
}
function clearDisplay(){
    
    document.getElementById("output-screen").value=""
}
let outputScreen=document.getElementById("output-screen")
function display(num){
    outputScreen.value+=num;

}


function equalClick(){
    try{
        outputScreen.value = eval(outputScreen.value);

    }
    catch(err){
        alert("invalid value")
    }
}

// function equalClick(){
//     var text=document.getElementById("output-screen").value
//     var result=eval(text)
//     document.getElementById("output-screen").value=result
    

    
// }
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
