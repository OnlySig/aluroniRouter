import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

const PaginaPadrao = ({ children } : {children?: ReactNode}) => {
  return(
    <>
      <Menu />
      <Header/>
      <div className={stylesTema.container}>
        {<Outlet/>}
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default PaginaPadrao;