import React from 'react';
import styles from './modules/NavigationMenu.module.css';
import 'react-bootstrap'

const NavigationMenu = () => {
  return (
    <nav className={'navbar navbar-expand-lg pt-4 align-items-center justify-content-center ' + styles.navigation}>
        <a href="#home" className={styles.navLink + ' nav-item nav-link active'} tabIndex="0">Home</a>
        <a href="#serviços" className={styles.navLink + ' nav-item nav-link'}>Serviços</a>
        <a href="#sobre" className={styles.navLink + ' nav-item nav-link'}>Sobre</a>
    </nav>
  );
};


export default NavigationMenu;