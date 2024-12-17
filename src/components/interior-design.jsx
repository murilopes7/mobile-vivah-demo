import React from 'react'

import design from './modules/design.module.css'

const img_wrapper = {
    src: '/ig_img/Aphrodite.webp', alt: 'Interior da Vivah'
};

export default function InteriorDesign() {
    return (
        <div style={{
            marginTop: 200,
            backgroundImage: 'linear-gradient(180deg, #E6E7E6, #f5efda)'
        }}
            className={design.containerImageDesign}>
            <div className={design.wrapperDesign}>
                <h1 className={design.number}>01</h1>
                <h2 className={design.design}>Interior Design</h2>

                <div className={design.imageContainer} style={{
                    backgroundColor: 'rgb(248, 196, 204)'
                }}>

                    <picture>
                        {/* <source srcSet={img_wrapper.webp} type="image/webp" />
                        <source srcSet={img_wrapper.jpg} type="image/jpeg" /> */}
                        <img src={'https://i.postimg.cc/15YxCWBB/Aphrodite.webp'} alt={img_wrapper.alt} className={design.imageDesign} />
                    </picture>

                </div>
            </div>
        </div >
    );
}
