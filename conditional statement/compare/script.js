function compare(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let c = parseInt(document.getElementById('num3').value);
    let msg;
    document.getElementById('flase').innerHTML = Boolean(a > b);

    a = a + c; 

    document.getElementById('result').innerHTML = Boolean(a > b);

}