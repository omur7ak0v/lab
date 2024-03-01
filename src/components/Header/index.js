import React from 'react';
import './Header.scss'
import Menu from '../custom/Menu';
import Logo from '../../images/logo.svg'

const Header = () => {

    const menuContents = [
        { title: 'О наc', content: <div style={{ width: '200px' }}><a href='/aboutLaboratory'><p>О лаборатории</p></a> <a href='/team'><p>Команда</p></a> <a href='/specialists'><p>Специалисты</p></a> <a href='/partners'><p>Наши партнеры</p></a> <a href='/reviews'><p>Отзывы</p></a> <a href='/vacancy'><p>Вакансии</p></a> <a href='/licenses_certificates'><p>Лицензии и сертификаты</p></a> </div> },
        { title: 'Пациентам', content: <div style={{ width: '200px' }}><a href='/cost'><p>Стоимость исследований</p></a> <a href='/services'><p>Услуги</p></a> <a href='/instructions'><p>Инструкция для пациента</p></a> <a href='/order'><p>Заказать исследование</p></a> <a href='/popular_questions'><p>Популярные вопросы</p></a></div> },
        { title: 'Врачам', content: <div style={{ width: '200px' }}><a href='/reminder'><p>Памятка для клиента</p></a> <a href='/cost'><p>Стоимость лабораторных услуг</p></a></div> },
    ]

    return (
        <header>
            <div className='Header'>
                <div className='Header__Logo'>
                    <img src={Logo} alt='logo' />
                </div>

                <div className="Header__Content">
                    <a href="/"><span className='Header_Content__Item'>Главная</span></a>
                    {menuContents.map(el => (
                        <Menu content={el.content}>{el.title}</Menu>
                    ))}
                    <span className='Header_Content__Item'>Контакты</span>
                </div>
                <div className='Header__MenuIcons'>
                    <img src="/images/profile_cion.svg" alt="" />
                    <img src="/images/search_icon.svg" alt="" />
                </div>
            </div>
        </header>

    );
};

export default Header;