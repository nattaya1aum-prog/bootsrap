function myFunction(x, y) {
    if (y === undefined) {
    y = 5;
}
return x * y;
}

function multiply(x){
        let num = x;
        for (let i = 1; i <= 12; i++) {
        let total = num * i;
        document.write(num + '*' + i + '=' + total + '<br>');
    }
}
