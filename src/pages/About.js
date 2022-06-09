import React, { Component } from 'react';
import "./About.css";
import suit_pic from "../assets/suit_pic.jpg";

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
          src={suit_pic} alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Will Miranda</div>
        <div className="brief_description">
          Computer Science | Texas A&M University
        </div>
      </div>
    </div>
  </div></p> 
      </div>
    )
  }
}