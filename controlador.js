let p1 = new projeto('previsao-do-tempo.png',
                    'Previsão do Tempo',
                    'Site de previsão do tempo, onde basta pesquisar o nome da cidade e informar a sigla do estado que o site através de uma api informa a previsão',
                    'https://previsoes.netlify.app/')
let todosProjetos =[]
todosProjetos.push(p1)

let resultados = document.getElementById('resultados')
function mostrar (){

for(let i=0;i<todosProjetos.length;i++){
resultados.innerHTML=`
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