import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { Route } from 'react-router-dom';
import pic1 from '../../images/image_08.png';
import pic2 from '../../images/image_04.png';
import pic3 from '../../images/image_07.png';
import pic4 from '../../images/image_08.png';
import pic5 from '../../images/image_04.png';
import pic6 from '../../images/image_07.png';
import pic7 from '../../images/image_04.png';
import pic8 from '../../images/image_07.png';

function NewsCardList() {
    const news1 = { state: 'search', loggedIn: false, img: pic1, date: '2 августа, 2019', title: 'Национальное достояние – парки', text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.', source: 'Лента.ру' };
    const news2 = { state: 'search', loggedIn: false, img: pic2, date: '2 августа, 2019', title: 'Лесные огоньки: история одной фотографии', text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.', source: 'Медуза' };
    const news3 = { state: 'search', loggedIn: true, img: pic3, date: '2 августа, 2019', title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка', text: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...', source: 'Риа' };

    const news4 = { state: 'saved', loggedIn: true, segment: 'Парки', img: pic4, date: '2 августа, 2019', title: 'Национальное достояние – парки', text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.', source: 'Лента.ру' };
    const news5 = { state: 'saved', loggedIn: true, segment: 'Природа', img: pic5, date: '2 августа, 2019', title: 'Лесные огоньки: история одной фотографии', text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.', source: 'Медуза' };
    const news6 = { state: 'saved', loggedIn: true, segment: 'Тайга', img: pic6, date: '2 августа, 2019', title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка', text: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...', source: 'Риа' };
    const news7 = { state: 'saved', loggedIn: true, segment: 'Природа', img: pic7, date: '2 августа, 2019', title: 'Лесные огоньки: история одной фотографии', text: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.', source: 'Медуза' };
    const news8 = { state: 'saved', loggedIn: true, segment: 'Тайга', img: pic8, date: '2 августа, 2019', title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка', text: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...', source: 'Риа' };
    
    return (
        <div className="NewsCardList">
            <Route exact path="/">
                <h2 className="newsCardList__title">Результаты поиска</h2>
                <div className="newsCardList__cards">
                    <NewsCard state={news1.state} loggedIn={news1.loggedIn} img={news1.img} date={news1.date} title={news1.title} text={news1.text} source={news1.source} />
                    <NewsCard state={news2.state} img={news2.img} date={news2.date} title={news2.title} text={news2.text} source={news2.source} />
                    <NewsCard state={news3.state} img={news3.img} date={news3.date} title={news3.title} text={news3.text} source={news3.source} />
                </div>
                <button className="newsCardList__button">Показать еще</button>
            </Route>
            <Route exact path="/saved-news">
                <div className="newsCardList__cards">
                    <NewsCard state={news4.state} loggedIn={news4.loggedIn} segment={news4.segment} img={news4.img} date={news4.date} title={news4.title} text={news4.text} source={news4.source} />
                    <NewsCard state={news5.state} loggedIn={news5.loggedIn} segment={news5.segment} img={news5.img} date={news5.date} title={news5.title} text={news5.text} source={news5.source} />
                    <NewsCard state={news6.state} loggedIn={news6.loggedIn} segment={news6.segment} img={news6.img} date={news6.date} title={news6.title} text={news6.text} source={news6.source} />
                    <NewsCard state={news7.state} loggedIn={news7.loggedIn} segment={news7.segment} img={news7.img} date={news7.date} title={news7.title} text={news7.text} source={news7.source} />
                    <NewsCard state={news8.state} loggedIn={news8.loggedIn} segment={news8.segment} img={news8.img} date={news8.date} title={news8.title} text={news8.text} source={news8.source} />
                </div>
            </Route>
        </div >
    )
}

export default NewsCardList