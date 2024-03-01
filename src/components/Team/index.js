import React from 'react';
import './Team.scss'

import Team1 from '../../images/Team1.svg'
import Team2 from '../../images/Team2.svg'
import Team3 from '../../images/Team3.svg'

const Team = () => {
    return (
        <div className='Team'>

            <div className="Services_abs01"></div>
            <div className="Services_abs02"></div>

            <div className="container">

                <div className="Services_header">
                    <div className="Services_header_card Services_header_card2">
                        <h1>Все услуги</h1>
                        <span>
                            Наша лаборатория предлагает патологические исследования.
                        </span>
                    </div>
                </div>

                <div className="TeamBlock">

                    {/* 1 */}
                    <div className="Team_card">
                        <div className="TeamImg">
                            <img src={Team1} alt="Расширенный набор лабораторных тестов" />
                        </div>
                        <div className="Team_SUbilte">
                            Общий хирург, гинеколог
                        </div>
                        <div className="Team_tilte">
                            Мазазолин Кирилл Сергеевич
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="Team_card">
                        <div className="TeamImg">
                            <img src={Team2} alt="Передовой опыт и международные консультации" />
                        </div>
                        <div className="Team_SUbilte">
                            Врач-уролог
                        </div>
                        <div className="Team_tilte">
                            Князев Игорь Алексеевич
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="Team_card">
                        <div className="TeamImg">
                            <img src={Team3} alt="Расширенный набор лабораторных тестов" />
                        </div>
                        <div className="Team_SUbilte">
                            Врач - уролог
                        </div>
                        <div className="Team_tilte">
                            Монолов Нурбек Кытайбекович
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Team;