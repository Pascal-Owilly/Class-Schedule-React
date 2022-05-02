import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='activity'>All Activities</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
   
          <ul className='cards__items'>
            <CardItem
              src='images/student1.jpg'
              text='Join the family'
              label='Students Dashboard'
              path='/student'
            />
            <CardItem
              src='images/student2.jpg'
              text='Register students, make announcements and more'
              label='Staff Dashboard'
              path='/products'
            />
            <CardItem
              src='images/school1.jpg'
              text='See notifications here'
              label='Announcements'
              path='/announcement'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/school2.jpg'
              text='Check out all students sessions for the module'
              label='Sessions'
              path='/session'
            />
            <CardItem
              src='images/student3.jpg'
              text='A list of all courses we offer'
              label='Courses'
              path='/products'
            />
            <CardItem
              src='images/school4.jpg'
              text='See all, read all, know all'
              label='All activities'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
