function getTable(){
    let n = document.getElementById("n").value;
    let output = `<br> <strong>Multiplication Table</strong><br>`;
    for(let i=1; i<=10; i++){
        output += `${n} x ${i} = ${n*i}<br>`;
    }
    document.getElementById("output3").innerHTML = output;
}
