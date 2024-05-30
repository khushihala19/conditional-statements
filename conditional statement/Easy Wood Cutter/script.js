function checkDivisibility(){
    let number = parseInt(document.getElementById('num').value);
    let msg;

    if( number % 3 == 0){
        msg = "YES";
    }
    else{
        msg = "NO";
    }
    document.getElementById("result").innerHTML = msg;
}