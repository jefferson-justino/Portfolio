import './project.css'

import imgCalculador from '../images/projetos/calculadorMercadoria.png'
import imgSorteados from '../images/projetos/sorteados.png'
export default function Project (){
const projects =[{
    titulo:'Sorteados',
    descricao: 'Site de sorteio onde pode sortear números aleatórios (perfeito para rifas onde são vendidas fichas) e pode sortear nome de pessoas, basta digitar o nome dos participantes e o sistema irá sortear um aleatóriamente.',
    image:imgSorteados,
    link: 'https://sorteados.netlify.app/'
},
{
    titulo:'Calcular Mercadoria',
    descricao: 'Site criado com o objetivo de solucionar um problema no cálculo de mercadoria, onde o comerciante digita o peso da mercadoria em gramas(informado pela balança) e o valor por KG, o programa informa o valor total que o cliente deve pagar.',
    image:imgCalculador,
    link: 'https://calcularmercadoria.netlify.app/'
}]


let result = projects.map((item)=>{
    return(
        <a href={item.link} target="_blank" rel='noreferrer'>
            <div className='card'>
                <img src={item.image} alt="preview"/>
                <h2>{item.titulo}</h2>
                <p>{item.descricao}</p>
              
            </div>
        </a>
    )
})

    


    return(
  
   
            <div className='results'>
                {result}
            </div>


    )
}