const screen = document.getElementById("screen");

function getData(f){
    var value = f.value;
    if(value == "CE")
        screen.value = "";
    else
        screen.value += value;
}


function calcular(){
    try {
        screen.value = eval(screen.value);
        
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            screen.value = "";
        }, 800)
    }
}