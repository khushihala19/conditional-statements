function largestnum(){
    let num1 = parseInt(document.getElementById('num-1').value);
    let num2 = parseInt(document.getElementById('num-2').value);
    let msg;

    if(num1 > num2){
        msg = num1 + " is a largest number";
    }
    else if(num1 == num2){
        msg = " num1 and num2 is a some";
    }
    else{
        msg = num2 + " is a largest number";
    }
    document.getElementById('result').innerHTML = msg;
}