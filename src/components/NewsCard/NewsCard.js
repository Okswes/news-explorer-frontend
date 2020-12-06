import React from 'react';
import './NewsCard.css';

import emtyPic from '../../images/NewsCard/empty-logo.jpg'

export default function NewsCard (props) {
  const [mark, setmark] = React.useState(false);
  const [id, setId] = React.useState('');
  const [img, setImg] = React.useState(props.image)

  function setCardMarked () {
    setmark(!mark);
  }

  const formatDate = (item) => {
    const postDate = new Date(item);
    const formatedDate = `${postDate.toLocaleString("ru-RU", { month: 'long', day: 'numeric' })}, ${postDate.getFullYear()}`;
    return formatedDate;
  }

  const saveArticle = () => {
    const jwt = localStorage.getItem('jwt');

    props.saveArticleRequest(jwt, {
      keyword: props.data.keyword,
      title: props.title,
      text: props.text,
      date: props.date,
      source: props.source,
      link: props.data.url,
      image: props.image })
      .then((res) => {
        setId(res._id);
        localStorage.removeItem('saved');
        props.saveNews((prev) => {
          localStorage.setItem('saved', JSON.stringify([...prev, props.data.id]));
          return [...prev, props.data.id]
        });
        setCardMarked();
      })
      .catch(err => console.log(err));
  }

  const deleteArticle = () => {
    const jwt = localStorage.getItem('jwt');
    props.deleteArticle(jwt, id)
      .then((res) => {
        console.log(res);
        props.saveNews((prev) => {
          const result = prev.filter(item => item !== props.id);
          localStorage.removeItem('saved');
          localStorage.setItem('saved', JSON.stringify(result));
          return result;
        })
        setCardMarked();
      })
      .catch(err => console.log(err))
  }

  const checkImageUrl = () => {
     setImg(emtyPic);
  }


  React.useEffect(() => {
    const savedArticle = JSON.parse(localStorage.getItem('saved'));
    if (!savedArticle) return;
    if (savedArticle.find(item => item === props.id)) {
      setCardMarked();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='newscard' id={id} data-keyword={props.keyword}>
      {props.saved ? <button className={`newscard__icon newscard__icon_trash`} onClick={() => props.deleteArticle(props.id)}></button> : props.loggedIn ? <button className={`newscard__icon ${mark ? 'newscard__icon_marked' : ''}`} onClick={mark ? deleteArticle : saveArticle}></button> : <button className={`newscard__icon newscard__icon_not-loggedin`} onClick={() => props.openLogin(true)} ></button>}
      <span className={`newscard__keyword ${props.saved ? '' : 'newscard__keyword_hidden'}` }>{props.keyword}</span>
      <img onError={checkImageUrl} className='newscard__img' src={img} alt='Картинка новости'/>
      <div className='newscard__content'>
        <small className='newscard__date'>{formatDate(props.date)}</small>
        <h4 className='newscard__title'>{props.title}</h4>
        <p className='newscard__text'>{props.text}</p>
        <small className='newscard__source'>{props.source}</small>
      </div>
    </div>
  )
}
