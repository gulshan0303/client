import React, { useEffect, useState } from 'react';
import './Card.css';
import {useSelector,useDispatch} from 'react-redux'
import {imageSave} from "../../redux/features/authSlice"
function Card(props) {
  const [liked, setLiked] = useState(false);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  
  async function handleLike() {
    setLiked(!liked);
    console.log('user', user?.user?.name)
    const response = await fetch('https://dog.ceo/api/breeds/image/random/2');
    const data = await response.json();
    const imageUrl = data.message[0]; // Extract the first image URL from the API response

    const clickTime = new Date();

    await fetch('http://localhost:8282/api/v1/image/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user?.user?.email, clickTime: clickTime, image: imageUrl })
    });
    dispatch(imageSave({ email: user?.user?.email, clickTime: clickTime, image: imageUrl }))
    const img = localStorage.setItem('img',JSON.stringify({ email: user?.user?.email, clickTime: clickTime, image: imageUrl }));
    
  }

  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
}

export default Card;
