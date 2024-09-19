import './project.css'
import imgCardapio from '../images/projetos/cardapio.png'
import imgCalculador from '../images/projetos/calculadorMercadoria.png'
import imgSorteados from '../images/projetos/sorteados.png'
import imgSorteadosApp from '../images/projetos/sorteados-app.jpg'
import imgTragicoNerd from '../images/projetos/tragiconerd.png'
import imgGuiaParaJogos from '../images/projetos/guiaParaJogos.png'
export default function Project (){
const projects =[
    {
        titulo:'Site Tragico Nerd',
        descricao: 'Site voltado a comunidade do Streamer, facilitando o acesso as informações e apoio ao canal.',
        image:imgTragicoNerd,
        link:'https://tragiconerd.netlify.app/'
    },
    {
        titulo:'Sorteados-App',
        descricao: 'Aplicativo de sorteio onde pode sortear números aleatórios e lista com nome de pessoas.',
        image:imgSorteadosApp,
        link:'https://drive.google.com/file/d/1Om5kYkQpmRCPyxH6hpIusdhAgd6ayhiV/view?usp=sharing'
    },{
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
},
{
    titulo:'Guia para Jogos',
    descricao: 'Site onde mostra o melhor guia para o respectivo game',
    image: imgGuiaParaJogos,
    link: 'https://guiaparajogos.netlify.app/'
},
{
    titulo:'Cardápio digital',
    descricao: 'Site que simula um cardápio online, onde é possível adicionar os pedidos ao carrinho.',
    image: imgCardapio ,
    link: 'https://cardapios.netlify.app/'
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