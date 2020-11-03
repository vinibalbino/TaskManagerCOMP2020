import React from 'react';
import { FiGithub, FiTrash2 } from 'react-icons/fi'

import './styles.css';

function Index() {
  return (
    <>
      <header className="header-index">
        <h1>Organização Para Comp 2020</h1>
      </header>
      <section className="section-meet">
        <p>Links para as aulas</p>
        <div className="links-container">
          <ul className="links-ul">
            <li><a rel="noreferrer" href="https://meet.google.com/yif-azva-zzd" target="_blank">Link MD</a></li>
            <li><a rel="noreferrer" href="https://meet.google.com/vpc-sssm-foq" target="_blank">Link Inglês</a></li>
            <li>Link Cálculo</li>
            <li><a rel="noreferrer" href="https://meet.google.com/tyq-iizq-shd" target="_blank">Link Fisíca</a></li>
            <li><a rel="noreferrer" href="https://meet.google.com/pio-tpuo-iwq" target="_blank">Link AED</a></li>
            <li><a rel="noreferrer" href="https://meet.google.com/xkz-qrgo-bxv" target="_blank">Link GAAL</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container-tasks">
          <ul>
            <li className="list">
              <strong>Ativividade Ingles</strong>
              <p>Entregar Atividade do livro pagina 123, Cap 20, Todos os Exercicios.</p>
              <p className="data-limit">Data Limite: 10/11/2020</p>

              <button type="button">
                <FiTrash2 size={20} color="#e53170" />
              </button>
            </li>

            <li className="list">
              <strong>Ativividade Ingles</strong>
              <p>Entregar Atividade do livro pagina 123, Cap 20, Todos os Exercicios.</p>
              <p className="data-limit">Data Limite: 10/11/2020</p>

              <button type="button">
                <FiTrash2 size={20} color="#e53170" />
              </button>
            </li>

            <li className="list">
              <strong>Ativividade Ingles</strong>
              <p>Entregar Atividade do livro pagina 123, Cap 20, Todos os Exercicios.</p>
              <p className="data-limit">Data Limite: 10/11/2020</p>

              <button type="button">
                <FiTrash2 size={20} color="#e53170" />
              </button>
            </li>

          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="sub-footer">
          <strong>Desenvolvido por Vinicius Silva Balbino</strong>
          <a href="https://github.com/vinibalbino" target="_blanck"><FiGithub color="#fffffe" size={28} /></a>
        </div>
      </footer>
    </>
  );
}

export default Index;