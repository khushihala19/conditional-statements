function comparetwo(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let msg;

    document.getElementById('flase').innerHTML = Boolean(a > b);
    document.getElementById('true').innerHTML = Boolean(a < b);
    document.getElementById('result').innerHTML = Boolean(a == b);
}