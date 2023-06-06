import React from 'react';
import Card from './Card';
import '../styles/card.css';
import { generate as id } from 'shortid';



function TopCardList({cardListData}) {
  return (
    <section className="top-card">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={id()} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
