
document.getElementById("btn-sumar").addEventListener("click", function(event){
    let valor1 = document.getElementById("valor1").value
    valor1= parseFloat(valor1)
    let valor2 = document.getElementById("valor2").value
    valor2= parseFloat(valor2)
    var suma= (valor1 + valor2).toFixed(2)  
    document.querySelector(".resultado").innerHTML = suma;
});

document.getElementById("btn-restar").addEventListener("click", function(event){
    let valor1 = document.getElementById("valor1").value
    valor1= parseFloat(valor1)
    let valor2 = document.getElementById("valor2").value
    valor2= parseFloat(valor2)
    var restar= (valor1 - valor2).toFixed(2)  
    if (restar<0) {restar=0}
    document.querySelector(".resultado").innerHTML = restar;
});
    



