import React from 'react'
import '../styles/header.css'
import './Switch'

function Header({ children, cardListData }) {
  
  const totalFollowers = cardListData.reduce(
    (total, cardData) => total + parseInt(cardData.followers),
    0
  );

  return (
    <header className="header" >
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers: {totalFollowers}</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header