import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import MessageTimeLine from './MessageTimeline';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className='home-hero'>
        <h1>Віртуальний центр цифрової науки</h1>
        <h4>Виконується в рамках Програмно-цільової і конкурсної тематики Програма
          інформатизації НАН України{' '}
        </h4>
        <Link to='/signup' className='btn btn-primary'>
          Увійти
        </Link>
      </div>
    );
  }
  return (
    <div>
      {/* <MessageTimeLine
				profileImageUrl={currentUser.user.profileImageUrl}
				username={currentUser.user.username}
			/> */}
      <h1> Вітаємо Вас на нашому сайті </h1>
      <h4> Віртуальний центр цифрової науки </h4>
    </div>
  );
};

export default Homepage;
