function setValue(value){
    var input = document.getElementById("input1")
    input.value += value
    // console.log(value)


} 
function results(){
    var input = document.getElementById("input1")
    var result = eval(input.value)
    console.log(result);
    input.value = result

}


function allClear(){
    var input = document.getElementById("input1")
    input.value = ""
}
function clear1(){
    var input = document.getElementById("input1")
    
    
    input.value = input.value.slice(0 , -1)

}