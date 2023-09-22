import React from 'react'
import '../../css/Skills.css'
import Projetos from '../Projetos/Projetos'


function Skills() {

  return (
    <>
      <div className='skillsMain'>
        <div className="skillsCard">
          <h1 id='skills'>Habilidades, Linguagens e outros</h1>

          <div className='skillsContent'>

            <div className="skillsItem">
              <h2>HTML5</h2>
              <img src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-10.png" alt="HTML Logo" />
            </div>

            <div className="skillsItem">
              <h2>CSS3</h2>
              <img src="https://devsouth.us/images/css3_badge.png" alt="CSS Logo" />
            </div>

            <div className="skillsItem">
              <h2>Javascript</h2>
              <img src="https://logospng.org/download/javascript/logo-javascript-1024.png" alt="Javascript Logo" />
            </div>

            <div className="skillsItem">
              <h2>REACT JS</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" />
            </div>

            <div className="skillsItem">
              <h2>VS CODE</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code Logo" />
            </div>

            <div className="skillsItem">
              <h2>Sublime</h2>
              <img src="https://w7.pngwing.com/pngs/371/822/png-transparent-sublime-text-hd-logo.png" alt="Sublime Text Logo" />
            </div>

            <div className="skillsItem">
              <h2>Git</h2>
              <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" />
            </div>

            <div className="skillsItem">
              <h2>VITE</h2>
              <img src="https://logospng.org/download/vite-js/vite-js-4096-logo.png" alt="Vite Logo" />
            </div>

          </div>
        </div>

      </div>
      <Projetos />

    </>
  )
}

export default Skills
