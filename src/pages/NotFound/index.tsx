import styles from './style.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const nav = useNavigate();
  return(
    <div className={`${styles.container} ${stylesTema.container}`}>
      <div className={styles.voltar}>
        <button  onClick={() => nav(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage/>
    </div>
  );
};
export default NotFound;