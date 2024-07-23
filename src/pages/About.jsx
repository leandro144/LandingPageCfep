import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaFilePdf } from "react-icons/fa";

const About = () => {
return (
<>
    <Header />

    <div className="container-about">
        <div className="about">
            <h2>Sobre o CFEP</h2>
            <div className="line"></div>
            <p>O Conselho Federal De Educadores e Pedagogos é uma instituição sem fins Lucrativos, devidamente
                registrada em 22/07/2016, que visa regular e reconhecer profissionais da área da Educação.
                <br /><br />
                Seu principal Objetivo é o reconhecimento do profissional educador e pedagogo associado, em busca do
                aprimoramento e da extensão de conhecimento, visando proporcionar qualidade de ensino a atendimentos à
                população.
                <br /><br />
                Várias foram as reivindicações dos educadores e pedagogos para a aprovação da lei especifica reguladora
                da profissão, conforme tramitou pela câmara dos deputados projetos de lei; 1998;4746 e senado federal
                projeto de lei; plc: 2009-10-02;196 dado a necessidade regulamentar profissional.
                <br /><br />
                Assim conforme estabelecido a lei 7546 de 10 de abril de 1987 e lei 10.406 de 10 de janeiro de 2002, com
                personalidade jurídica e autonomia administrativa, financeira e patrimonial, organizada de forma
                federativa como CFEP/CREPs.</p>
        </div>
        <br /><br />
        <div className="about">
            <h2>Missão</h2>
            <div className="line"></div>
            <p>Atuar com responsabilidade, promovendo o desenvolvimento dos associados inscritos, priorizando a ética e
                transparência, qualificando a sua atuação no exercício profissional e lutando pela valorização
                profissional e defesa dos direitos dos nossos associados inscritos.</p>
        </div>
        <br /><br />
        <div className="about">
            <h2>Visão</h2>
            <div className="line"></div>
            <p>Sermos reconhecidos como referência de Conselho em todo o território nacional, com grande
                representatividade na busca do reconhecimento do Profissional Educador e Pedagogo, integrados e
                comprometidos com a ética, aprimoramento contínuo e conscientes do compromisso com a responsabilidade
                social. </p>
        </div>
        <br /><br />
        <div className="about">
            <h2>Valores</h2>
            <div className="line"></div>
            <p>Relações Éticas e Morais; Orientação; Cooperação; Confiança; Transparência e Comprometimento; Justiça e
                Legalidade; Inovação e Qualidade; Responsabilidade Social; Aprimoramento Contínuo.</p>
        </div>
        <br /><br />
        <h1>Publicações</h1>
        <div className="line"></div>
        <div className="container-publication">
            <br /><br />
            <span>
                <a href="../downloads/ética" download='ética.pdf'>
                    <FaFilePdf fontSize={80} color='#003058' />
                </a>
                <h3>Código de Ética e Disciplina</h3>
            </span>
            <span>
                <a href="../downloads/acordo" download='acordo.pdf'>
                    <FaFilePdf fontSize={80} color='#003058' />
                </a>
                <h3>Acordo de Cooperação Técnica</h3>
            </span>
            <span>
                <a href="../downloads/codeunion" download='codeunion.pdf'>
                    <FaFilePdf fontSize={80} color='#003058' />
                </a>
                <h3>Código da União</h3>
            </span>
        </div>
    </div>
    <div className="footer">
        <Footer />
    </div>
    
</>
)
}

export default About