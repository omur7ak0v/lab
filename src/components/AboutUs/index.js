import React from 'react';
import './AboutUs.scss'
import About from '../../images/about 1.svg'

const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className="container">
                <div className="card">
                    <h1>
                        О нас
                    </h1>

                    <span>
                        Наша лаборатория в Бишкеке предлагает быстрые анализы, широкий выбор тестов, международные консультации.
                    </span>
                    <span>
                        Наша клиника была основана с целью предоставить высококачественные медицинские услуги, ориентированные на потребности и комфорт наших пациентов.
                    </span>
                    <span>
                        Наша команда - это не только профессионалы, но и люди с сердцем, которые горят желанием помогать. Мы строим доверительные отношения с каждым пациентом, уделяя внимание не только их физическому здоровью, но и эмоциональному благополучию.
                    </span>
                </div>
                <div className="card">
                    <div className="cardimg">
                        <img src={About} alt=" О нас" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;