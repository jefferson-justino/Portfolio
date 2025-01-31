import './project.css'
import imgCardapio from '../images/projetos/cardapio.png'
import imgCalculador from '../images/projetos/calculadorMercadoria.png'
import imgSorteados from '../images/projetos/sorteados.png'
import imgSorteadosApp from '../images/projetos/sorteados-app.jpg'
import imgTragicoNerd from '../images/projetos/tragiconerd.png'
import imgTragicoJogos from '../images/projetos/tragico jogos.png'
export default function Project (){
const projects =[
    {
        titulo:'Site Tragico Nerd',
        descricao: 'Site voltado a comunidade do Streamer, facilitando o acesso as informações e apoio ao canal.',
        image:imgTragicoNerd,
        link:'https://tragiconerd.netlify.app/'
    },
    
    {
    titulo:'Sorteados',
    descricao: 'Site de sorteio onde pode sortear números aleatórios e lista com nome de pessoas.',
    image:imgSorteados,
    link: 'https://sorteados.netlify.app/'
},

{
    titulo:'Tragico Jogos',
    descricao: 'Site para venda de jogos através de link de afiliado.',
    image: imgTragicoJogos,
    link: 'https://tragicojogos.netlify.app/'
},
{
    titulo:'Cardápio digital',
    descricao: 'Site que simula um cardápio online, onde é possível adicionar os pedidos ao carrinho.',
    image: imgCardapio ,
    link: 'https://cardapios.netlify.app/'
},
{
    titulo:'Sorteados-App',
    descricao: 'Aplicativo de sorteio onde pode sortear números aleatórios e lista com nome de pessoas.',
    image:imgSorteadosApp,
    link:'https://drive.google.com/file/d/1Om5kYkQpmRCPyxH6hpIusdhAgd6ayhiV/view?usp=sharing'
},
{
    titulo:'Calcular Mercadoria',
    descricao: 'Site para realizar o cálculo do valor por KG.',
    image:imgCalculador,
    link: 'https://calcularmercadoria.netlify.app/'
},]


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