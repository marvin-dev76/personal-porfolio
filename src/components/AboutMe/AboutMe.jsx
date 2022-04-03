import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch("https://api.github.com/users/marvin-dev76");
      const data = await res.json();
      const user = {
        name: data.name,
        avatar: data.avatar_url,
        profile_url: data.html_url,
        bio: data.bio,
        jobs: "FrontEnd Web Developer",
      };
      setProfile(user);
    };

    getProfile();
  }, []);

  return (
    <div className="about-me" id="about-me">
      {profile === {} ? (
        <div>Loading</div>
      ) : (
        <div className="container">
          <h1>About Me</h1>
          <div className="about-me-container">
            <h2 className="about-me-name">{profile.name}</h2>
            <h3 className="about-me-jobs">{profile.jobs}</h3>
            <p className="about-me-bio">{profile.bio}</p>
            <div className="photo-technologies">
              <div className="photo-container">
                <img className="about-me-avatar" src={profile.avatar} alt="" />
              </div>
              <div className="technologies-container">
                <h3>Technologies</h3>

                <div className="technologies-list">
                  <i className="devicon-html5-plain-wordmark colored tech"></i>
                  <i className="devicon-css3-plain-wordmark colored tech"></i>
                  <i className="devicon-javascript-plain colored tech"></i>
                  <i className="devicon-react-original colored tech"></i>
                  <i className="devicon-redux-original colored tech"></i>
                  <i className="fl-archlinux tech arch"></i>
                  <i className="devicon-git-plain colored tech"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
