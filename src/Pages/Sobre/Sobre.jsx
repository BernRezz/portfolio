import React from 'react'
import '../../css/Sobre.css'
import Skills from '../Skills/Skills'
import Projetos from '../Projetos/Projetos'


function Sobre() {

  return (

    <section>
      <div className='sobreMain'>
        <div className='sobreCard'>

          <div className='sobreContent'>
            <h1 id='sobre'>Um pouco mais sobre mim!</h1>
            <p>
              Sou natural de Teresópolis, no Rio de Janeiro, tenho 21 anos e comecei a estudar programação no início de 2023. Iniciei meus estudos pelo curso de front-end da Udemy e durante o ano, iniciei meu período na Tech4me, formando-me por lá em agosto. Desde então, venho mantendo meus estudos em dia, sempre em busca de novos projetos e focado em alcançar minha primeira experiência profissional como desenvolvedor.
            </p>
          </div>
          <Skills />

        </div>
      </div>
    </section>
  )
}

export default Sobre
