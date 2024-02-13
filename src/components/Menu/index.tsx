import { Link } from 'react-router-dom';
import { ReactComponent as Logo  } from '../../assets/logo.svg';
import styles from './style.module.scss';

const Menu = () => {
  const rotas = [{
    label:'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  },{
    label: 'Sobre',
    to: '/sobre'
  }];
  return(
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map(rota => (<li className={styles.menu__link} key={rota.label}><Link to={rota.to}>{rota.label}</Link></li>))}
      </ul>
    </nav>
  );
};
export default Menu;