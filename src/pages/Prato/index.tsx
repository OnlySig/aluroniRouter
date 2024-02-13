import styles from './style.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import InfoPratos from 'components/InfoPratos';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

const Prato = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const cardapioL = cardapio.find(item => item.id === Number(id));
  if(!cardapioL){
    return <NotFound/>;
  }
  return(
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => nav(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{cardapioL.title}</h1>
        <div className={styles.imagem}>
          <img src={cardapioL.photo} alt={cardapioL.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{cardapioL.description}</p>
          <InfoPratos {...cardapioL}/>
        </div>
      </section>
    </PaginaPadrao>
  );
};

export default Prato;