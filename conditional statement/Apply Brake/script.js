function calculatespeed(){
    let distance = parseInt(document.getElementById('num1').value);
    let time = parseInt(document.getElementById('num2').value);
    let speed = distance/time;
    let msg;

    if(speed  > 40){
        msg = "Apply Brake";
    }
    else{
        msg = "Keep Going";
    }
    document.getElementById('result').innerHTML = msg;
}