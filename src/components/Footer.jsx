import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="info-footer">
          <h3>CFEP</h3>
          <p>Conselho Federal de <br />Educadores e Pedagogos</p>
        </div>
        <div className="info-footer">
          <h3>Links</h3>
          <a href="#">Home</a>
          <a href="https://www.cfepmembros.com.br/inscricao">inscrever-se</a>
        </div>
        <div className="info-footer">
          <h3>Links Úteis</h3>
          <a href="https://www.cfepmembros.com.br/seja-um-parceiro">Seja um Parceiro</a>
          <a href="https://www.cfepmembros.com.br/public/consulta-inscrito">Consulta de Membros</a>
        </div>
        <div className="info-footer">
          <h3>CFEP</h3>
          <a href="">© Todos os direitos reservados</a>
        </div>
      </footer>
    </>
  )
}

export default Footer