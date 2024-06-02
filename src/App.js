import myphoto from './images/myphoto.jpg'

import './App.css';

import github from './images/github.svg'


import linkedin from './images/linkedin.svg'



import Project from './components/projects';
function App() {

  return (
    <div className="app">
        <header>

          <nav>
            <ul>
            <a href='#inicio'><li>Início</li></a>
              <a href='#sobreMim'><li>Sobre Mim</li></a>
              <a href='#ferramentas'><li>Ferramentas</li></a>
              <a href='#projetos'><li>Projetos</li></a>
           
            </ul>
          
          </nav>

        </header>


        <main  >
         <section>
          <h1 id='inicio'>Jefferson Justino</h1>
          <h2>Desenvolvedor Frontend | Backend</h2>
      
            <figure>
            <a href='https://github.com/jefferson-justino' target='_blank'  rel="noreferrer"> <img src={github} className='icone' alt='github'/> </a>
            <a href='https://www.linkedin.com/in/jefferson-justino-b5879920b/' target='_blank'  rel="noreferrer"> <img src={linkedin} className='icone' alt='linkedin'/> </a>
            <img src={myphoto} alt='imagem' className='photo'/>
            </figure>
            
            </section>

         <section>
          <hr/>
          <h2 id='sobreMim'> Sobre Mim</h2>
        <h4>
        Desenvolvedor apaixonado por transformar linhas de código em soluções impactantes. Com uma trajetória como programador freelancer, mergulhei em projetos desafiadores que me permitiram aprimorar não apenas minhas habilidades técnicas, mas também minha capacidade de entender e atender às necessidades específicas de cada cliente.

Meu foco não se limita apenas a escrever código limpo e eficiente, mas sim em criar experiências digitais excepcionais. Acredito na importância de combinar criatividade e funcionalidade para produzir soluções que não apenas atendam, mas superem as expectativas.

Minha paixão pela tecnologia se reflete na busca contínua por aprendizado e na vontade de abraçar novos desafios. Estou sempre pronto para colaborar com equipes dinâmicas e inovadoras, contribuindo com meu conhecimento e comprometimento para alcançar resultados extraordinários.

Vamos juntos transformar ideias em realidade digital e impulsionar o sucesso de seu projeto. Estou pronto para embarcar nessa jornada com você.
        </h4>
         </section>
         <section>
          <h2 id='ferramentas'>Ferramentas que utilizo</h2>
          <figure >
            <div id='ferramen'>
           
             <span className='ferramenta'>JavaScript</span>
             <span className='ferramenta'>Html</span>
             <span className='ferramenta'>Css</span>
             <span className='ferramenta'>Figma</span>
             <span className='ferramenta'>Node.js</span>
             <span className='ferramenta'>React.js</span>
             <span className='ferramenta'>ReactNative</span>
             <span className='ferramenta'>Mysql</span>
             <span className='ferramenta'>Express</span>
             <span className='ferramenta'>Sequelize</span>
             </div>
          </figure>
         </section>
          <section>
            <h2>Por que Me escolher?</h2>
            <h4>Além de um profundo conhecimento técnico, trago consigo um comprometimento inabalável em entregar resultados de qualidade, dentro do prazo e alinhados às necessidades do seu projeto.

Minha jornada como programador freelancer me capacitou a lidar com uma ampla gama de desafios, me tornando ágil na resolução de problemas e adaptável a diferentes ambientes e demandas.

Minha busca incessante por aprimoramento me mantém atualizado com as tecnologias mais recentes, permitindo que seu projeto se beneficie das melhores práticas e soluções inovadoras.

Ao optar por meu trabalho, você terá um parceiro confiável, comprometido em agregar valor ao seu projeto e em colaborar ativamente para o sucesso do seu empreendimento. Juntos, podemos transformar suas ideias em realidade e alcançar grandes conquistas.</h4>
          </section>

          <section>
            <h2 id='projetos'>Meus Projetos</h2>
              <Project/>
          </section>
   


        </main>
          <footer>
          <a href='https://github.com/jefferson-justino' target='_blank'  rel="noreferrer"> <img src={github} className='iconeFooter' alt='github'/> </a>
            <a href='https://www.linkedin.com/in/jefferson-justino-b5879920b/' target='_blank'  rel="noreferrer"> <img src={linkedin} className='iconeFooter' alt='linkedin'/> </a>
             <a href='#inicio' id='nome'> <pre>Jefferson Justino ©</pre></a>
          </footer>

    </div>
  );
}

export default App;
