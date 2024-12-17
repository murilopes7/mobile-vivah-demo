import React from 'react';

import aboutMeStyles from './modules/about-me-image.module.css';
import instagramPost from './modules/instagram-post.module.css'

import Carousel_image from '../components/Carousel-source-image';
import "../components/modules/carousel-images.module.css";
import '../components/modules/carousel-instagram-style.css';

import imgPortfolio from '/ig_img/fabiana1.jpg'
import photo4 from '/ig_img/instagram-4.jpg'
import photo3 from '/ig_img/instagram-3.jpg'
import photo1 from '/ig_img/instagram-1.jpg'

const imgs = [photo3, photo4, photo1]

import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* Função onde é de fato colocado o post no site principal */
export const Carousel = () => {
    return (
        <div className="container-of-instagram margin-container bg-light rounded-4">
            <article className="instagram-post">
                {/* Cabeçalho do post */}
                <header className="instagram__header">
                    <figure><img src="https://assets.codepen.io/108082/jake-dog.png" alt="Jake Dog" width="42" height="42" />
                        <figcaption>
                            <h4 className='profile_name'>Fabiana Carvalho</h4>
                        </figcaption>
                    </figure>
                </header>

                {/* Aonde está realmente as fotos */}
                <section className="instagram__media">
                    <div className="img-instagram-media"></div>
                    <Carousel_image data={imgs} />
                </section>

                {/* Rodapé do post, onde está os ícones */}
                <footer className="instagram__buttons">
                    <div className="left">
                        <svg className="instagram__icon instagram__icon--heart" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
                            <path className="heart" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <svg className="instagram__icon instagram__icon--comment" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20.656 17.008C21.8711 14.9061 22.2795 12.4337 21.8048 10.0527C21.3301 7.67172 20.0048 5.54497 18.0765 4.06978C16.1482 2.59458 13.7488 1.87186 11.3266 2.0366C8.9043 2.20135 6.62486 3.24231 4.91408 4.96501C3.20329 6.68772 2.17817 8.97432 2.03024 11.3977C1.8823 13.821 2.62166 16.2153 4.1102 18.1334C5.59874 20.0514 7.73463 21.3619 10.1189 21.82C12.5031 22.2782 14.9726 21.8527 17.066 20.623L22 22L20.656 17.008Z"></path>
                        </svg>
                        <svg className="instagram__icon instagram__icon--message" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2L9.218 10.084 11.698 20.334Z"></path>
                        </svg>
                    </div>
                    <div className="right">
                        <svg className="instagram__icon instagram__icon--saved" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20 21L12 13.44L4 21V3H20V21Z"></path>
                        </svg>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export const InstagramPostSalao = () => {
    return (
        <>
            {/*Introdução do salão e do conteúdo*/}
            <article className={instagramPost.infoContent}>
                <h2 className={instagramPost.title} style={{whiteSpace: 'nowrap'}}>Conheça nosso salão</h2>
                <p className={instagramPost.description}>
                    Vivah Hair Therapy um salão de Beleza e bem-estar onde a proposta é cuidar do seu externo 
                    para refletir no seu interno.<br/> Sua beleza e autocuidado é algo essencial.
                </p>
            </article>

            {/* Carrossel de fotos baseado no instagram */}
            <div className={instagramPost.imageWrapper}>
                <Carousel />
            </div>
        </>
    );
}

export default function AboutMe() {
    return (
        <>
            <div className={aboutMeStyles.content + ' container-md mx-auto'}>
                <div className={aboutMeStyles.information}>
                    <small className={aboutMeStyles.sobre}>Sobre mim</small>
                    <h1 className={aboutMeStyles.conhecaEu}>Fabiana Carvalho</h1>
                    <p className={aboutMeStyles.informationContent}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                        <br />
                        Eum saepe, quae atipsum commodi in, deleniti molestias
                        eos repellendus placeat perferendis animi velit?

                        <br />

                        Commodi, nisi dolore? Ad, atque beatae. Ex?
                    </p>
                </div>
                <ul className={aboutMeStyles.qualities + ' container pb-5 '}>
                    <li
                        value={"0"}
                        style={{
                            height: "8.4em",
                            flexDirection: "column",
                            position: "relative",
                            alignContent: "space-evenly",
                            boxShadow: "0 3.2px 3px rgba(0, 0, 0, 0.15)",
                            borderRadius: "6px",
                        }}
                        className={aboutMeStyles.containerQuality + ' row row-cols-2 g-2'}>

                        <hr id={"index-" + 0}
                            style={{
                                width: "100%",
                                position: "absolute",
                                border: "2px double #3e684a",
                                top: "-5px"
                            }} className='col-md' />
                        <h1 style={{
                            fontFamily: "Anonymous Pro serif",
                            fontWeight: "100",
                            fontStyle: "normal",
                            color: "#000435",
                            marginLeft: '-1em'
                        }}
                            id={aboutMeStyles["item-0-title"]}
                            className={aboutMeStyles.titleQuality + ' col-md'}>

                            Tricologista

                        </h1>
                        <h2 style={{
                            //position: "absolute",
                            marginTop: "5rem",
                            marginLeft: "-8em",
                            fontSize: '1.32em',
                            width: '100%',
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexDirection: 'column'
                        }}
                            id={aboutMeStyles["item-0-paragraph"]}
                            className={aboutMeStyles.paragraphQuality + ' col-md'}>
                            <div className='d-flex justify-content-center'>
                                <hr
                                    style={{
                                        width: "95%",
                                        border: "3px solid #2c2e2d",
                                        marginRight: '10px',
                                        position: 'absolute',
                                        top: '3.2em',
                                        left: '6px'
                                    }}
                                    className={'col-md ' + aboutMeStyles.line} />
                                <br />
                            </div> Terapeuta capilar
                        </h2>
                    </li>

                    <li
                        value={"1"}
                        style={{
                            height: "8.4em",
                            flexDirection: "column",
                            position: "relative",
                            alignContent: "space-evenly",
                            boxShadow: "0 3.2px 3px rgba(0, 0, 0, 0.15)",
                            borderRadius: "6px",
                        }}

                        className={aboutMeStyles.containerQuality + ' row row-cols-2 g-2'}>

                        <hr id={"index-" + 1}
                            style={{
                                width: "100%",
                                position: "absolute",
                                border: "2px double #3e684a",
                                top: "-5px"
                            }} className='col-md' />
                        <h1 style={{
                            fontFamily: "Anonymous Pro serif",
                            fontWeight: "100",
                            fontStyle: "normal",
                            color: "#000435",
                            fontSize: "1.9em",
                            whiteSpace: "nowrap",
                            marginLeft: '-2.5em',
                            marginTop: '1em'
                        }}
                            id={aboutMeStyles["item-1-title"]}
                            className={aboutMeStyles.titleQuality + ' col-md'}>
                            <div className='d-flex ms-5 mt-4'>
                                Corte
                            </div>
                        </h1>
                    </li>

                    <li
                        value={"2"}
                        style={{
                            height: "8.4em",
                            flexDirection: "column",
                            position: "relative",
                            alignContent: "space-evenly",
                            boxShadow: "0 3.2px 3px rgba(0, 0, 0, 0.15)",
                            borderRadius: "6px",
                        }}

                        className={aboutMeStyles.containerQuality + ' row row-cols-2 g-2'}>

                        <hr id={"index-" + 2}
                            style={{
                                width: "100%",
                                position: "absolute",
                                border: "2px double #3e684a",
                                top: "-5px"
                            }} className='col-md' />
                        <h1 style={{
                            fontFamily: "Anonymous Pro serif",
                            fontWeight: "100",
                            fontStyle: "normal",
                            color: "#000435",
                            fontSize: "1.9em",
                            whiteSpace: "nowrap",
                            marginLeft: '-2.3em',
                            marginTop: '1em'
                        }}
                            id={aboutMeStyles["item-2-title"]}
                            className={aboutMeStyles.titleQuality + ' col-md'}>
                            <div className='d-flex ms-4 mt-4'>
                                Mechas
                            </div>
                        </h1>
                    </li>

                    <li
                        value={"2"}
                        style={{
                            height: "8.4em",
                            flexDirection: "column",
                            position: "relative",
                            alignContent: "space-evenly",
                            boxShadow: "0 3.2px 3px rgba(0, 0, 0, 0.15)",
                            borderRadius: "6px",
                        }}

                        className={aboutMeStyles.containerQuality + ' row row-cols-2 g-2'}>

                        <hr id={"index-" + 2}
                            style={{
                                width: "100%",
                                position: "absolute",
                                border: "2px double #3e684a",
                                top: "-5px"
                            }} className='col-md' />
                        <h1 style={{
                            fontFamily: "Anonymous Pro serif",
                            fontWeight: "100",
                            fontStyle: "normal",
                            color: "#000435",
                            fontSize: "1.9em",
                            whiteSpace: "nowrap",
                            marginLeft: '-2.3em',
                            marginTop: '1em'
                        }}
                            id={aboutMeStyles["item-3-title"]}
                            className={aboutMeStyles.titleQuality + ' col-md'}>
                            <div className='d-flex ms-4 mt-4'>
                                Colorista
                            </div>
                        </h1>
                    </li>
                </ul>
                <div className={aboutMeStyles.imageContainer}>
                    <img src={imgPortfolio} className={aboutMeStyles.imageAboutMe} alt="Foto minha - Fabiana Carvalho" />
                </div>
            </div>

            <section className={instagramPost.contentSection} >
                <InstagramPostSalao />
            </section>
        </>
    );
}