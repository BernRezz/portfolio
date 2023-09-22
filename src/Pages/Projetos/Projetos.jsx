import React from 'react'
import '../../css/Projetos.css'


function Projetos() {

  return (
      <div className='projetosMain'>
        <h1 id='projetos'>Projetos</h1>

        <div className='projetosContent'>

          <div className="projetoCard">
            <a href="https://loja-de-doces.netlify.app/">
              <img src="https://cdn.discordapp.com/attachments/1154824436625719398/1154831783230185612/Loja_de_doces.png" alt="imagem projeto loja de doces" />
              <h2>Loja de doces!</h2>
              <p>Meu projeto final entregue no meu periodo na Tech4Me utilizando um pouco de tudo que eu aprendi durante o curso.</p>
            </a>
          </div>

          <div className="projetoCard">
            <a href="https://seletor-de-temas-br.netlify.app/">
              <img src="https://cdn.discordapp.com/attachments/1154824436625719398/1154831784022909049/Seletor_de_cores.png" alt="imagem projeto seletor de cores" />
              <h2>Seletor de temas</h2>
              <p>Uma aplicação de seleção de temas em react.</p>
            </a>
          </div>

          <div className="projetoCard">
            <a href="https://post-its-br.netlify.app/">
              <img src="https://cdn.discordapp.com/attachments/1154824436625719398/1154831783754477588/Post_It.png" alt="imagem projeto post it" />
              <h2>Post it</h2>
              <p>Uma aplicação de post-its de nomes e números com campos controlados</p>
            </a>
          </div>

          <div className="projetoCard">
            <img src="https://www.linkmex.com.br/wp-content/uploads/2019/05/em-breve-teremos-novidades.png" alt="" />
            <h2>Em Breve...</h2>

          </div>

          <div className="projetoCard">
            <img src="https://www.linkmex.com.br/wp-content/uploads/2019/05/em-breve-teremos-novidades.png" alt="" />
            <h2>Em Breve...</h2>

          </div>

          <div className="projetoCard">
            <img src="https://www.linkmex.com.br/wp-content/uploads/2019/05/em-breve-teremos-novidades.png" alt="" />
            <h2>Em Breve...</h2>

          </div>

        </div>
      </div>
  )
}

export default Projetos
