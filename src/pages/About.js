import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p><div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src="suit_pic.png" alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Will Miranda</div>
        <div className="brief_description">
          // Details about you goes here
          Howdy! My name is Will, and I am a Computer Science major at Texas A&M University in College Station.
          In my free time I like to workout, cook (and eat), play games, and hang out with my roommates.
          In the future I'd like to work as a Software Developer!
        </div>
      </div>
    </div>
  </div></p> 
      </div>
    )
  }
}
