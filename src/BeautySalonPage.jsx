import React from 'react';

import styles from './BeautySalonPage.module.css';
import NavigationMenu from './components/NavigationMenu';
import AboutMeImage from './components/about-me-page.jsx';
import FirstPageCarousel from './components/carouselFirstPage.jsx';
import Interior from './components/interior-design.jsx'
import Exterior from './components/exterior-design.jsx'
import Testimonials from './components/testimonial.jsx'
import Footer from './footer/footer.jsx'

//import './beautySalonImageAnimation.js';

import aboutMePopUp from '/ig_img/Desktop - 3.png';
import akeno from '/ig_img/akeno.avif';
import rias from '/ig_img/rias-gremory.jpg'
import logoHeader from '/ig_img/ÍCONE VARIAÇÃO SEM FUNDO.png'

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const imgs = [aboutMePopUp, akeno, rias, logoHeader];

const BeautySalonPage = () => {
    return (
        <>
            <main className={styles.mainContainer + ' container-fluid p-0'}>
                <section id='home'>
                    {/*Cabeçalho do site*/}
                    <header className={styles.header + ' d-flex justify-content-between align-items-center'}>
                        <div className='ms-4'>
                             <a href='#home' className="navbar-brand" >
                                <img className={styles.logoImage} src={imgs[3]} alt="imagem logo" />
                            </a>
                        </div>

                        <div className="mx-auto">
                            <NavigationMenu />
                        </div>

                        <div></div>
                    </header>

                    <section className={styles.firstPage}>
                        <FirstPageCarousel />
                    </section>

                    <section className={styles.aboutMePage}>
                        <AboutMeImage />
                    </section>

                    <section className={styles.interiorPage}>
                        <Interior />
                    </section>

                    <section className={styles.exteriorPage}>
                        <Exterior />
                    </section>

                    <section className={styles.testimonialsCard}>
                        <Testimonials />
                    </section>
                </section>
            </main>
            
            <footer style={{ backgroundColor: '#1B1B1B', marginTop: '-2vh' }}>
                <Footer/>
            </footer>

        </>
    );
};

export default BeautySalonPage;