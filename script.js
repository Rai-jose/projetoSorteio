

function generateNumber(){
    
    const min = Math.ceil(document.querySelector(".input-main").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result1 = Math.floor(Math.random() * (max - min +  1)) + min;
    const result2 = Math.floor(Math.random() * (max - min +  1)) + min;

    if(min > max ){
        alert ("Insira um numero menor na esquerda e maior na direita")
    }else{result1, result2}

    if(min == max){
        alert ("Por favor, insira numeros diferentes")
    }
    
    
    document.getElementById("finish").innerText = result1 + " , " + result2;
}




