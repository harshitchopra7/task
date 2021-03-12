import React from 'react';
import './Banner.css';

import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';

import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';

function Banner() {
    return (
        <div>
            <div className="banner">
                <div id="carouselExampleIndicators" className="carousel slide banner_left" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img5} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img6} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img7} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="banner_right">
                    <img className="s2" src={s1} alt="" /> <br />
                    <img className="s1" src={s2} alt="" /> <br />
                    <img className="s1" src={s3} alt="" /> <br />
                </div>
            </div>
        </div>
    )
}

export default Banner;
