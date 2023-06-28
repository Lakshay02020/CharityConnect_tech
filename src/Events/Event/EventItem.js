import React from 'react';

import './EventItem.css'




const EventItem = ({ eventDetails }) => {

    const { logo, altText, title, startDate, userJoined } = eventDetails;




    const handleJoinEvent = () => {

        // Handle the logic for joining the event here

        console.log(`Joining the event: ${title}`);

    };




    return (

        <div className="eventItem">

            <div className="eventItem-img">

                <img

                    src={logo}

                    alt={altText}

                />

            </div>

            <div className="eventItem-content">

                <h2>

                    {title}

                </h2>

                <div className="eventItem-bottom">

                    <div className="card-badge">

                        <img

                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-date-time-icon.svg"

                            alt="calendar"

                            loading="lazy"

                        />

                        <span>{startDate}</span>

                    </div>

                    <div className="card-badge">

                        <img

                            width="16"

                            height="16"

                            loading="lazy"

                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-team-size-icon.svg"

                            alt="people"

                        />

                        <span>{userJoined} Registered</span>

                    </div>

                </div>

                <div className="btn-section">

                    <button className="btn">Leaderboard</button>

                </div>

            </div>

        </div>

    );

};




export default EventItem;