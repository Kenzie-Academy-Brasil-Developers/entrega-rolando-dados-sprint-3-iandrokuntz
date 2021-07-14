


function dado(){
   return Math.floor(Math.random() * (6) + 1)

}
function rolarDados(){

    for(i = 0; i<= 1000; i++){
        
    let dado1 = dado();
    let dado2 = dado();

        let soma = dado1 + dado2;
        
        count[soma -2] += 1
    //console.log(soma)
}

}

let count = [0,0,0,0,0,0,0,0,0,0,0];

rolarDados()

    const div = document.createElement("div");
    div.innerHTML = count;
    
    let corpo = document.getElementById("body")
    body.appendChild(div);
        

   for(let i = 0; i < count.length; i++){
        let graf = document.createElement("div")
        graf.style.width = count[i] + "px"
        div.appendChild(graf)
        graf.className = "graf";
  
}



//Criar função para gerar numeros aleatorios de 1 à 6
//Criar um Loop para gerar 1000 lançamentos de um par de dados
//Para cada lançamento, contar a frequencia em que o número apareceu
//criar um array para armazenar essa frequencia