import React from 'react'
import './styles/global.css';
import Header from './components/Header';
import Switch from './components/Switch';
import TopCardList from './components/TopCardList';
import Overview from './components/Overview';

const cardListData = [
  {
    userName: '@thelilapson',
    followers: '1496',
    todayFollowers: 122,
    icon: "images/facebook.png",
    name: 'facebook'
  },
  {
    userName: '@thelilapson',
    followers: '28540',
    todayFollowers: 240,
    icon: "images/twitter.png",
    name: 'twitter'
  },
  {
    userName: '@thelilapson',
    followers: '4550',
    todayFollowers: 310,
    icon: "images/instagram.png",
    name: 'instagram'
  },
  {
    userName: '@thelilapson',
    followers: '4140',
    todayFollowers: -50,
    icon: "images/youtube.png",
    name: 'youtube'
  },
];

function App() {
  return (
    <>
      <Header cardListData={cardListData}>
        <Switch/>
      </Header>
      <TopCardList cardListData={cardListData}/>
      <Overview/>
    </>
  );
}

export default App;