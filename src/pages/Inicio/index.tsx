import cardapio from 'data/cardapio.json';
import styles from './style.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasaBanner from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/ICardapio';

export default function Inicio() {
  const nav = useNavigate();
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  const redirecionaDetalhes = (prato: Prato) => {
    nav(`/prato/${prato.id}`, { state: { ...prato }});
  };
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__recomendado}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao} onClick={() => redirecionaDetalhes(item)}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasaBanner} alt="Casa do alurone" />
        <div className={styles.nossaCasa__endereco}>
          Rua Verguiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}