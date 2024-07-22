import React from 'react'
import news1 from '../assets/news-1.jpg'
import news2 from '../assets/news-2.jpg'
import news3 from '../assets/news-3.jpg'
import news4 from '../assets/news-4.jpg'

const Main = () => {

    const handleNavigate = () => {
        window.location.href = 'https://faita.edu.br/';
    }

return (
<>
    <div className="news">
        <h1>JORNAL DO CFEP</h1>
        <div className="line"></div>
        <div className="newsletter">
            <div className="news-left">
                <a
                    href="https://g1.globo.com/sp/sao-paulo/noticia/2024/02/20/tarcisio-lanca-programa-e-promete-alfabetizar-90percent-das-criancas-da-rede-publica-ate-2026.ghtml">
                    <img src={news1} alt="" />
                </a>
                <div className="info-news">
                    <small>CFEP</small>
                    <h3>Tarcísio lança programa e promete alfabetizar 90% das crianças da rede pública de SP até 2026!
                    </h3>
                    <p>O governador de São Paulo, Tarcísio de Freitas (Republicanos), prometeu nesta terça-feira (20)
                        alfabetizar 90% das crianças da rede pública do estado até o final de seu mandato, em 2026.</p>
                </div>
            </div>
            <div className="news-rigth">
                <div className="news-item">
                    <a
                        href="https://www.cnnbrasil.com.br/nacional/brasil-caminha-a-passos-lentos-para-adotar-educacao-inclusiva-diz-especialista/">
                        <img src={news3} alt="" />
                    </a>
                    <div className="info-news">
                        <small>CFEP</small>
                        <h3>Brasil caminha a passos lentos para adotar educação inclusiva, diz especialista</h3>
                        <p>À CNN Rádio, ele afirmou que a inclusão “significa mudança de atitude, crença, percepções e
                            adaptação do ambiente para acolhimento do aluno que apresenta diferenças quanto ao
                            desenvolvimento e aprendizagem.”
                            O especialista destaca que a luta pela educação inclusiva é “de longa data”, e que envolve
                            formação e capacitação dos docentes e de todos os envolvidos na escola.</p>
                    </div>
                </div>
                <div className="news-item">
                    <a href="">
                        <img src={news4} alt="" />
                    </a>
                    <div className="info-news">
                        <small>Fonte: Agência Câmara de Notícias!</small>
                        <h3>Comissão aprova projeto que prevê aulas presenciais e remotas na educação básica</h3>
                        <p>Conforme o substitutivo, o ensino híbrido é aquele que prevê a possibilidade de conexão
                            digital e uso transversal das tecnologias disponíveis para o alcance dos objetivos de
                            aprendizagem, incluindo atividades presenciais e não presenciais.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="card-info">
        <div className="text-info">
            <h2>Não existe investimento <br />maior do que <span id='italic'>investir no <br />seu futuro.</span></h2>
            <p>#sejaCFEP</p>
            <button className="btn-sign" onClick={handleNavigate}>Pós Graduações</button>
        </div>
    </div>
</>
)
}

export default Main