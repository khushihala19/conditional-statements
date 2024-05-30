function oddenven(){
    let num = parseInt(document.getElementById('num').value);
    let msg;

    if(num % 2 == 0){
        msg = "number is even number";
    }
    else if(num == 0){
        msg = "number is a zero";
    }
    else{
        msg = "number is odd number";
    }
    document.getElementById('result').innerHTML = msg
}