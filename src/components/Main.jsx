import React, { useState } from 'react';
import news1 from '../assets/news-1.jpg';
import news2 from '../assets/news-3.png';
import news3 from '../assets/news-3.jpg';
import news4 from '../assets/news-4.jpg';
import news5 from '../assets/news-5.jpg';
import news6 from '../assets/news-6.jpg';
import you1 from '../assets/you1.png';
import you3 from '../assets/you3.png';
import you4 from '../assets/you4.png';
import rosa from '../assets/rosa.png';
import azul from '../assets/azul.png';
import bege from '../assets/bege.png';

const Main = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const handleNavigate = () => {
window.location.href = 'https://www.cfepmembros.com.br/inscricao';
};

const handleOpenModal = () => {
setIsModalOpen(true);
};

const handleCloseModal = () => {
setIsModalOpen(false);
};

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
                <br />
                <div className="line"></div>
                <br />
                <a
                    href="https://www1.tce.pr.gov.br/noticias/tce-pr-indica-13-medidas-para-melhorar-educacao-oferecida-por-23-municipios/11523/N">
                    <img src={news6} alt="" />
                </a>
                <div className="info-news">
                    <small>CFEP</small>
                    <h3>TCE-PR indica 13 medidas para melhorar educação oferecida por 23 municípios</h3>
                    <p>O Pleno do Tribunal de Contas do Estado do Paraná (TCE-PR) homologou a emissão de 13
                        recomendações para 23 municípios. O objetivo das medidas, cujo prazo varia de três meses a dois
                        anos, é melhorar a qualidade da educação básica oferecida por essas prefeituras.</p>
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
                <div className="line"></div>
                <div className="news-item">
                    <a
                        href="https://www.gov.br/mec/pt-br/assuntos/noticias/2024/julho/prouni-aberta-inscricao-para-processo-seletivo-do-2o-semestre">
                        <img src={news2} alt="" />
                    </a>
                    <div className="info-news">
                        <small>CFEP</small>
                        <h3>Prouni: aberta inscrição para processo seletivo do 2º semestre</h3>
                        <p>candidatos interessados em participar do processo seletivo para o Programa Universidade para
                            Todos (Prouni) referente ao segundo semestre de 2024 já podem se inscrever a partir desta
                            terça-feira, 23 de julho. O prazo para inscrição ficará aberto até a próxima sexta-feira, 26
                            de julho, por meio do Portal Único de Acesso ao Ensino Superior. </p>
                    </div>
                </div>
                <div className="news-item">
                    <a
                        href="https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/sp-investe-r-7-mi-em-acessibilidade-e-melhorias-estruturais-para-escolas-de-bebedouro/">
                        <img src={news5} alt="" />
                    </a>
                    <div className="info-news">
                        <small>CFEP</small>
                        <h3>SP investe R$ 7 mi em acessibilidade e melhorias estruturais para escolas de Bebedouro</h3>
                        <p>O governador Tarcísio de Freitas entregou nesta segunda-feira (22) a reforma na Escola
                            Professor Domingos Madeira, em Bebedouro, no norte do estado. Além de mudanças estruturais,
                            o prédio ganhou adequações de acessibilidade em obras que custaram R$ 2,4 milhões.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="card-info">
        <div className="text-info">
            <h2>Não existe investimento <br />maior do que <span id='italic'>investir no <br />seu futuro.</span></h2>
            <p>#sejaCFEP</p>
            <button className="btn-sign" onClick={handleNavigate}>OBTER CERTIFICADO</button>
        </div>
    </div>
    <div className="identidade">
        <h1>Identidade Profissional</h1>
        <div className="line"></div>
        <p>A identidade profissional é documento exclusivo para o profissional da área da educação. Este documento
            servirá não só para identifica-lo mas também disponibilizara benefícios e vantagens em nossa rede de
            estabelecimentos conveniados.

            ​</p>
        <div className="cards-carteira">
            <img src={rosa} alt="" />
            <img src={azul} alt="" />
            <img src={bege} alt="" />
        </div>
        <button className="btn-pro" onClick={handleOpenModal}>Saiba Mais</button>
    </div>
    <div className="youtube">
        <h1>CFEP no YouTube</h1>
        <div className="line"></div>
        <div className="cards">
            <div className="cards-info">
                <a href="https://www.youtube.com/watch?v=hmnAfNxJG-s&t=417s">
                    <img src={you1} alt="" className="img-youtube" />
                    <h3>Podcast do CFEP, falando sobre o 17º CRESCER Congresso e Feira Educacional Crescer.</h3>
                </a>
            </div>
            <div className="cards-info">
                <a href="https://www.youtube.com/watch?v=Tfm_rrsKpi8&t=3s">
                    <img src={you3} alt="" className="img-youtube" />
                    <h3>Recado do CFEP para todo Educador e Pedagogo</h3>
                </a>
            </div>
            <div className="cards-info">
                <a href="https://www.youtube.com/watch?v=kVgcO61a6b8&t=5s">
                    <img src={you4} alt="" className="img-youtube" />
                    <h3>ANALISE E REPUDIO VIDEO DO SR. ITALO MARSILI</h3>
                </a>
            </div>
        </div>
    </div>
    {isModalOpen && (
    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Obtenha sua Carteira Profissional</h2>
            <h3>Quem pode fazer a inscrição?</h3>
            <p>Educador(a), Pedagogo(a) e Estagiário(a), das redes particulares e conveniadas junto as Secretarias de
                Educação Municipais e Estaduais.
            </p>
            <br />
            <h3>Quais as documentações necessárias para inscrever-se como Educador ou Pedagogo?</h3>
            <p>• Diploma ou Certificado de Conclusão do Curso Superior ou equivalente a licenciatura.
                <br />
                • Cópia do RG, CPF e titulo de eleitor;
                <br />
                • Comprovante de Residência Atual;
                <br />
                • 01 Foto 3x4 recente.</p>
            <br />
            <h3>Qual a documentação necessária para inscrever-se com Estagiário?</h3>
            <p>• Estar cursando a partir do 3° semestre do curso superior ou equivalente em Pedagogia;
                <br />
                • Declaração de matricula da Instituição de Ensino;
                <br />
                • Cópia do RG, CPF e título de eleitor;
                <br />
                • Comprovante de Residência Atual;
                <br />
                • 01 Foto 3x4 recente.</p>
                <br />
                <button className="btn-sign" onClick={handleNavigate}>OBTER CARTEIRA</button>
        </div>
    </div>
    )}
</>
);
};

export default Main;