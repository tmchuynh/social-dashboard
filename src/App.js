import React from 'react'
import './styles/global.css';
import Header from './components/Header';
import Switch from './components/Switch';
import TopCardList from './components/TopCardList';
import Overview from './components/Overview';


function App() {
  return (
    <>
      <Header>
        <Switch/>
      </Header>
      <TopCardList/>
      <Overview/>
    </>
  );
}

export default App;