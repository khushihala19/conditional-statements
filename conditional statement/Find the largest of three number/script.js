function threenum(){
    let a = parseInt(document.getElementById('num-1').value);
    let b = parseInt(document.getElementById('num-2').value);
    let c = parseInt(document.getElementById('num-3').value);
    let msg;

    if(a >= b && a >= c){
        msg = a;
    }
    else if(b >= a && b >= c){
        msg = b;
    }
    else{
        msg = c;
    }

    document.getElementById('display').innerHTML = msg +"  is a largest number"
}