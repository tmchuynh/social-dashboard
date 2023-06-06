import React from 'react'
import '../styles/card.css'

function CardSmall({ growth, pageViews, icon }) {
    return (
        <div className="card-small">
            <p className="card-small-views">page views</p>
            <p className="card-small-icon">
                <img src={icon} />
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className="card-small-percentage">
                <span>
                    <img
                        className="card-today-icon"
                        src={growth > 0 ? 'images/up.png' : 'images/down.png'}
                        alt={growth > 0 ? 'Up' : 'Down'}
                    />
                    {growth}%
                </span>

            </p>
        </div>
    )
}

export default CardSmall