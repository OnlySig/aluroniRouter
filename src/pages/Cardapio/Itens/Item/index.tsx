import styles from './Item.module.scss'; 
import InfoPratos from 'components/InfoPratos';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/ICardapio';

export default function Item(props: Prato) {
  const { title, description, photo, id } = props;
  const nav = useNavigate();
  return (
    <div className={styles.item} onClick={() => nav(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        /<InfoPratos {...props}/>
      </div>
    </div>
  );
}