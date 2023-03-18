// import React, { useState } from 'react';
// import './Card.css';

// function Card(props) {
//   const [liked, setLiked] = useState(false);

//   function handleLike() {
//     setLiked(!liked);
//   }

//   return (
//     <div className="card">
//       <img src={props.image} alt={props.title} className="card-image" />
//       <div className="card-content">
//         <h2 className="card-title">{props.title}</h2>
//         <p className="card-text">{props.text}</p>
//         <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
//           {liked ? 'Liked' : 'disLike'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card;




import React, { useState } from 'react';
import './Card.css';

function Card(props) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
    // Make API call to store image in database
    fetch(`/api/images/${props.id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ liked: !liked })
    });
  }

  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          {liked ? 'Liked' : 'disLike'}
        </button>
      </div>
    </div>
  );
}

export default Card;

