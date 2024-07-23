import React from 'react';
import { RiUserSharedFill } from "react-icons/ri";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="item-header">
            <a href="https://www.cfepmembros.com.br/login">CFEP DIGITAL</a>
            <a href="https://www.cfepmembros.com.br/inscricao">INSCREVA-SE</a>
            <a href="https://www.cfepmembros.com.br/public/consulta-inscrito">CONSULTA DE INSCRITOS</a>
          </div>
          <div className="icon-adm">
            <RiUserSharedFill fontSize={18} />
          </div>
        </nav>
      </header>
      <div className="subnavbar">
        <div className="navbar">
          <div className="logo"><img src={logo} alt="logo" /></div>
          <div className="find">
            <div className="search">
              <input type="search" name="search" id="search" placeholder='o que você está procurando' />
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-info">
        <div className="info-item">
          <div className="items">
            <p>INSTITUCIONAL</p>
            <span id="btn">
              <FaChevronDown color='#fff' fontSize={12} />
            </span>
            <ul className="dropdown-content">
              <li><a href="http://localhost:5173/sobre">Diário da união</a></li>
              <li><a href="http://localhost:5173/sobre">Código de Ética</a></li>
            </ul>
          </div>
          <div className="vertical-line"></div>
          <div className="items">
            <a href="http://localhost:5173/sobre">
              <p>SOBRE</p>
            </a>
          </div>
          <div className="vertical-line"></div>
          <div className="items">
            <a href="https://catalogo.drmeducacao.com.br/sessao-2?tutors=1184041">
              <p>CURSOS</p>
            </a>
          </div>
          <div className="vertical-line"></div>
          <div className="items">
            <a href="https://www.biblion.org.br/?utm_medium=google&utm_campaign=download_de_app_2022&utm_so">
              <p>BIBLIOTECA</p>
            </a>  
          </div>
          <div className="vertical-line"></div>
          <div className="items">
            <p>SERVIÇOS</p>
            <span id="btn">
              <FaChevronDown color='#fff' fontSize={12} />
            </span>
            <ul className="dropdown-content">
              <li><a href="#">Certidão de registro</a></li>
              <li><a href="https://www.cfepmembros.com.br/login">CFEP DIGITAL</a></li>
              <li><a href="https://zingy-bombolone-f16a1d.netlify.app/">Listas de Tarefas</a></li>
            </ul>
          </div>
          <div className="vertical-line"></div>
          <div className="items">
            <p>FALE CONOSCO</p>
          </div>
          <div className="vertical-line"></div>
          <div className="items">
            <p>PARCERIAS</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
