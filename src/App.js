import myphoto from './images/myphoto.jpg'

import './App.css';

import github from './images/github.png'

import linkedin from './images/linkedin.png'

function App() {
  return (
    <div className="App">
        <header>

          <nav>
            <ul>
              <li>Sobre Mim</li>
              <li>Ferramentas</li>
              <li>Projetos</li>
              <li>Contato</li>
            </ul>
          
          </nav>

        </header>


        <main>
         <section>
          <h1>Jefferson Justino</h1>
          <h2>Desenvolvedor Web | Mobile</h2>
      
            <figure>
            <a href='https://github.com/jefferson-justino' target='_blank'> <img src={github} className='icone'/> </a>
            <a href='https://www.linkedin.com/in/jefferson-justino-b5879920b/' target='_blank'> <img src={linkedin} className='icone'/> </a>
            <img src={myphoto} alt='imagem' className='photo'/>
            </figure>
            
            </section>

         <section>
          <hr/>
          <h2> Sobre Mim</h2>
        <h4>
        Desenvolvedor apaixonado por transformar linhas de código em soluções impactantes. Com uma trajetória como programador freelancer, mergulhei em projetos desafiadores que me permitiram aprimorar não apenas minhas habilidades técnicas, mas também minha capacidade de entender e atender às necessidades específicas de cada cliente.

Meu foco não se limita apenas a escrever código limpo e eficiente, mas sim em criar experiências digitais excepcionais. Acredito na importância de combinar criatividade e funcionalidade para produzir soluções que não apenas atendam, mas superem as expectativas.

Minha paixão pela tecnologia se reflete na busca contínua por aprendizado e na vontade de abraçar novos desafios. Estou sempre pronto para colaborar com equipes dinâmicas e inovadoras, contribuindo com meu conhecimento e comprometimento para alcançar resultados extraordinários.

Vamos juntos transformar ideias em realidade digital e impulsionar o sucesso de seu projeto. Estou pronto para embarcar nessa jornada com você.
        </h4>
         </section>
          <section>
            <h2>Por que Me escolher?</h2>
            <h4>Por que contar com meu trabalho? Porque além de um profundo conhecimento técnico, trago consigo um comprometimento inabalável em entregar resultados de qualidade, dentro do prazo e alinhados às necessidades do seu projeto.

Minha jornada como programador freelancer me capacitou a lidar com uma ampla gama de desafios, me tornando ágil na resolução de problemas e adaptável a diferentes ambientes e demandas.

Minha busca incessante por aprimoramento me mantém atualizado com as tecnologias mais recentes, permitindo que seu projeto se beneficie das melhores práticas e soluções inovadoras.

Ao optar por meu trabalho, você terá um parceiro confiável, comprometido em agregar valor ao seu projeto e em colaborar ativamente para o sucesso do seu empreendimento. Juntos, podemos transformar suas ideias em realidade e alcançar grandes conquistas.</h4>
          </section>

          <section>
            <h2>Meus Projetos</h2>

          </section>

            <article>
                <form>
                  <fieldset>
                    <legend>Contato</legend>
                <p>Nome</p>
                <input type='text' placeholder='Insira seu nome ou empresa'/>
                <p>Email</p>
                <input type='text' placeholder='Insira um email válido'/>
                <p>Mensagem</p>
                <textarea rows={10} cols={40} >
                  
                </textarea>
                </fieldset>
                </form>
            </article>


        </main>

    </div>
  );
}

export default App;
