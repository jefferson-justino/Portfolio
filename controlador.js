let p1 = new projeto('previsao-do-tempo.png',
                    'Previsão do Tempo',
                    'Site de previsão do tempo, onde basta pesquisar o nome da cidade e informar a sigla do estado que o site através de uma api informa a previsão.',
                    'https://previsoes.netlify.app/')
let p2 = new projeto('calculador-de-mercadoria.png',
                    'Calculador de Mercadoria',
                    'Site criado com o objetivo de solucionar um problema no cálculo de mercadoria, onde o comerciante digita o peso da mercadoria em gramas(informado pela balança) e o valor por KG, o programa informa o valor total que o cliente deve pagar.',
                    'https://calcularmercadoria.netlify.app/')
                        

let todosProjetos =[]
todosProjetos.push(p1,p2)

let resultados = document.getElementById('resultados')
function mostrar (){
    resultados.innerHTML=''
for(let i=0;i<todosProjetos.length;i++){
resultados.innerHTML+=`
<a  href='${todosProjetos[i].link}' target='_blank' class='linkCard'>
<div class='card'> 
<img src="./img_projetos/${todosProjetos[i].foto}" alt="Previsão do Tempo" class='imagemCard'>
<h3 class='tituloCard'>${todosProjetos[i].titulo}</h3>
<p class='descricaoCard'>${todosProjetos[i].descricao}</p>
</div>
</a>
`
console.log(todosProjetos[i].link)

}



}
mostrar()