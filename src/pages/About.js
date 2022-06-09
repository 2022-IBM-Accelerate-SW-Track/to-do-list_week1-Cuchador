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
          Computer Science Major | Texas A&M University
        </div>
      </div>
    </div>
  </div></p> 
      </div>
    )
  }
}
