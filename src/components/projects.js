import './project.css'
import imgCalculador from '../images/projetos/calculadorMercadoria.png'
import imgSorteados from '../images/projetos/sorteados.png'
export default function Project (){
const projects =[{
    titulo:'Sorteados',
    descricao: 'Site de sorteio onde pode sortear números aleatórios e lista com nome de pessoas.',
    image:imgSorteados,
    link: 'https://sorteados.netlify.app/'
},
{
    titulo:'Calcular Mercadoria',
    descricao: 'Site para realizar o cálculo do valor por KG.',
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