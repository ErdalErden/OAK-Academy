import React from 'react';
import SingleComment from './SingleComment';
import profile1 from './images/1.jpeg';
import profile2 from './images/2.jpeg';
import profile3 from './images/3.jpeg';
import UserCard from './UserCard';

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>
          Hello my name is Sarah
        </div>
      </UserCard>
      <UserCard>   
      <SingleComment 
      name='Sarah' 
      date='Today at 5:00 PM'
      comment="It's amazing"
      image={profile1}
      />
      </UserCard>
      <UserCard>   
      <SingleComment 
      name='Richard' 
      date='Today at 7:30 PM'
      comment="Really nice"
      image={profile2}
      />
      </UserCard>
      <UserCard>
      <SingleComment 
      name='Bruce' 
      date='Today at 8:00 PM'
      comment="Congrats"
      image={profile3}
      />
      </UserCard>   

    </div>
  )
}

export default App

