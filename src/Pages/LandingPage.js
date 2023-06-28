import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="photo-container">
        {/* Replace the image source with your desired photo */}
        <img src="https://financialtribune.com/sites/default/files/styles/telegram/public/field/image/12_NGO.png?itok=Onv97eKN" alt="Landing Page" className="photo" />
      </div>
      <div className="content-container">
        <h1>Welcome to Charity Connect</h1>
        <p>Join us in making a difference!</p>
        <div className="button-container">
          <a href="/ngoSignup"><button className="btn">Register as NGO</button></a>
          <a href='/ngoLogin'><button className="btn">Login as NGO</button></a>
          <a href='/signup'><button className="btn">Register as Volunteer</button></a>
          <a href='/login'><button className="btn">Login as Volunteer</button></a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
