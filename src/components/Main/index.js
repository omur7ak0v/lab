import React from 'react';
import './Main.scss';

import Main_Img from '../../images/main_img.svg'
// import Main_Vector from '../../images/vec.svg'
import Main_Vector from '../../images/vectop.svg'

const Main = () => {
    return (

        <div className='Main'>

            <div className="absolute_top1"></div>
            <div className="absolute_top2"></div>

            <div className="container">

                {/* <div className="absolute_top1"></div>
                <div className="absolute_top2"></div> */}

                <div className="card">
                    <h1>
                        Патоморфологическая
                        Лаборатория
                    </h1>

                    <span>
                        Лаборатория оснащена новейшим оборудованием по стандартам США.
                    </span>

                    <div className="main_btns">
                        <a href='/login' className="main_btn main_btn1">
                            Войти
                        </a>

                        <a href='/login' className="main_btn main_btn2">
                            Зарегистрироваться
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={Main_Img} alt="Main" />
                    </div>
                </div>
            </div>

            <div className="Main_imgBackrgound">
                <img src={Main_Vector} alt="Main" />
            </div>
        </div>

    );
};

export default Main;