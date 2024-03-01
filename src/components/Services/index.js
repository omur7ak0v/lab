import React from 'react';
import './Services.scss'

import Checklist from '../../images/Checklist.svg'
import Shield from '../../images/Shield.svg'
import servic3 from '../../images/servic3.svg'
import servic4 from '../../images/servic4.svg'
import DNA from '../../images/DNA.svg'
import Syringe from '../../images/Syringe.svg'

import MedicalIcons1 from '../../images/MedicalIcons1.svg'
import MedicalIcons2 from '../../images/MedicalIcons2.svg'
import MedicalIcons3 from '../../images/MedicalIcons3.svg'
import MedicalIcons4 from '../../images/MedicalIcons4.svg'
import MedicalIcons5 from '../../images/MedicalIcons5.svg'
import MedicalIcons6 from '../../images/MedicalIcons6.svg'

const Services = () => {
    return (
        <div className='Services'>

            {/* top */}
            <div className="Services_abs2"></div>
            {/* bottom */}
            <div className="Services_abs02"></div>

            <div className="container">
                <div className="Services_header">
                    <div className="Services_header_card">
                        <h1>Все услуги</h1>
                        <span>
                            Наша лаборатория предлагает патологические исследования.
                        </span>
                    </div>

                    <a href='/' className="Services_header_btn">
                        Увидеть все   <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="ServiceCards">

                    {/* top */}
                    <div className="Services_abs1"></div>

                    {/* 1 */}
                    <div className="Servicecard">
                        <div className="servicImg">
                            <img src={Checklist} alt="Гистологические исследования" />
                        </div>
                        <div className="servicName">
                            Гистологические исследования
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="Servicecard">
                        <div className="servicImg">
                            <img src={Shield} alt="Пересмотр стекол" />
                        </div>
                        <div className="servicName">
                            Пересмотр стекол
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="Servicecard">
                        <div className="servicImg">
                            <img src={servic3} alt="Цитологические исследования" />
                        </div>
                        <div className="servicName">
                            Цитологические исследования
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="Servicecard">
                        <div className="servicImg">
                            <img src={servic4} alt="Иммуногисто химические исследование" />
                        </div>
                        <div className="servicName">
                            Иммуногисто химические исследование
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="Servicecard">
                        <div className="servicImg">
                            <img src={DNA} alt="Генетические исследования" />
                        </div>
                        <div className="servicName">
                            Генетические исследования
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="Servicecard">
                        <div className="servicImg">
                            <img src={Syringe} alt="Ветеринария" />
                        </div>
                        <div className="servicName">
                            Ветеринария
                        </div>
                    </div>
                </div>

                <div className="Services_header">
                    <div className="Services_header_card Services_header_card2">
                        <h1>Все услуги</h1>
                        <span>
                            Наша лаборатория предлагает патологические исследования.
                        </span>
                    </div>

                </div>

                <div className="why">
                    {/* bottom */}
                    <div className="Services_abs01"></div>

                    {/* 1 */}
                    <div className="why_card">
                        <div className="whyImg">
                            <img src={MedicalIcons1} alt="Расширенный набор
лабораторных тестов" />
                        </div>
                        <div className="why_name">
                            Расширенный набор
                            лабораторных тестов
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="why_card">
                        <div className="whyImg">
                            <img src={MedicalIcons2} alt="Передовой опыт и
международные консультации" />
                        </div>
                        <div className="why_name">
                            Передовой опыт и
                            международные консультации
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="why_card">
                        <div className="whyImg">
                            <img src={MedicalIcons3} alt="Социальная значимость" />
                        </div>
                        <div className="why_name">
                            Социальная значимость
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="why_card">
                        <div className="whyImg">
                            <img src={MedicalIcons4} alt="Индивидуальный подход" />
                        </div>
                        <div className="why_name">
                            Индивидуальный подход
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="why_card">
                        <div className="whyImg">
                            <img src={MedicalIcons5} alt="Команда экспертов" />
                        </div>
                        <div className="why_name">
                            Команда экспертов
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="why_card">
                        <div className="whyImg">
                            <img src={MedicalIcons6} alt="Сокращение сроков анализа" />
                        </div>
                        <div className="why_name">
                            Сокращение сроков анализа
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Services;