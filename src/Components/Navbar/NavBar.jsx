import React, { useState, useEffect } from 'react';
import NavBody from './StyleNavBar';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [navSwitch, setNavSwitch] = useState('br');
  const [burgerClass, setBurgerClass] = useState('burgerNavOff');

  const on = { backgroundColor: 'rgb(227, 227, 227)', color: '#011c27' };
  const off = { transition: '0.3s' };

  useEffect(() => {
    const handleScroll = () => {

      const sectionPosition = {
        br: 100,
        sobre: 550,
        skills: 800,
        projetos: 1400,
      };

      const windowWidth = window.innerWidth;
      if (windowWidth >= 2000) {

        sectionPosition.sobre = 1000;
        sectionPosition.skills = 1500;
        sectionPosition.projetos = 2200;
      }

      for (const section in sectionPosition) {
        if (scrollY >= sectionPosition[section]) {
          setNavSwitch(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const burgerNavHandle = () => {

    if (burgerClass === 'burgerNavOff') {

      setBurgerClass('burgerNavOn')
    } else {

      setBurgerClass('burgerNavOff')
    }

  }

  return (
    <NavBody>

      <div className={burgerClass} onClick={burgerNavHandle}>

        <div className="burgerNavCard">

          <div className='burgerNavItems'>
            <div className="abrev">
              <Link
                to="home"
                smooth={true}
                duration={200}
                style={navSwitch === 'br' ? on : off}
                className="navItem"
                onClick={burgerNavHandle}
              >
                BR
              </Link>
            </div>

            <hr />

            <div className="navBtns">
              <Link
                to="sobre"
                offset={-150}
                smooth={true}
                duration={200}
                style={navSwitch === 'sobre' ? on : off}
                className="navItem"
                onClick={burgerNavHandle}
              >
                Sobre mim
              </Link>

              <Link
                to="skills"
                offset={-50}
                smooth={true}
                duration={200}
                style={navSwitch === 'skills' ? on : off}
                className="navItem"
                onClick={burgerNavHandle}
              >
                Habilidades
              </Link>

              <Link
                to="projetos"
                smooth={true}
                duration={200}
                style={navSwitch === 'projetos' ? on : off}
                className="navItem"
                onClick={burgerNavHandle}
              >
                Projetos
              </Link>
            </div>

            <div className='contato'>
              <div className='contatoItem'>
                <i class="fa-solid fa-envelope"></i>
                <p>bernardopmrezende@gmail.com</p>
              </div>

              <div className='contatoItem'>
                <i class="fa-brands fa-whatsapp"></i>
                <p>+55 (21) 99422-6404</p>
              </div>

              <div className='contatoItem'>
                <i class="fa-brands fa-discord"></i>
                <p>bernrezz</p>
              </div>
            </div>
          </div>
        </div>

        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>

      </div>

      <div className='navBar'>
        <div className="abrev">
          <Link
            to="home"
            smooth={true}
            duration={200}
            style={navSwitch === 'br' ? on : off}
            className="navItem"
          >
            BR
          </Link>
        </div>

        <hr />

        <div className="navBtns">
          <Link
            to="sobre"
            offset={-150}
            smooth={true}
            duration={200}
            style={navSwitch === 'sobre' ? on : off}
            className="navItem"
          >
            Sobre mim
          </Link>

          <Link
            to="skills"
            offset={-50}
            smooth={true}
            duration={200}
            style={navSwitch === 'skills' ? on : off}
            className="navItem"
          >
            Habilidades
          </Link>

          <Link
            to="projetos"
            smooth={true}
            duration={200}
            style={navSwitch === 'projetos' ? on : off}
            className="navItem"
          >
            Projetos
          </Link>
        </div>

        <div className='contato'>
          <div className='contatoItem'>
            <i class="fa-solid fa-envelope"></i>
            <p>bernardopmrezende@gmail.com</p>
          </div>

          <div className='contatoItem'>
            <i class="fa-brands fa-whatsapp"></i>
            <p>+55 (21) 99422-6404</p>
          </div>

          <div className='contatoItem'>
            <i class="fa-brands fa-discord"></i>
            <p>bernrezz</p>
          </div>
        </div>
      </div>
    </NavBody>
  );
};

export default NavBar;
