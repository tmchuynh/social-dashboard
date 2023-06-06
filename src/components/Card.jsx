import React from 'react'
import '../styles/card.css'

function Card({ userName, followers, todayFollowers, icon, name }) {
    const cardClass = `card ${name}`
    return (
        <article className={cardClass}>
            <p className="card-title">
                <img src={icon} />
                {userName}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img
                    src={todayFollowers > 0 ? 'images/up.png' : 'images/down.png'}
                    alt={todayFollowers > 0 ? 'Up' : 'Down'}
                    className="card-today-icon"
                />
                {Math.abs(todayFollowers)} Today
            </p>
        </article>
    )
}

export default Card;