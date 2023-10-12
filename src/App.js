
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Routes , Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as UpArrow} from './components/up_arrow.svg'

const App = () => {
  const countryCode = "in"
  const pageSize = 12
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [progress,setProgress] = useState(0)

 
  
  return (
    <>
    <NavBar/>
    <LoadingBar
      height={5}
      color='#f11946'
      progress={progress}
      
    />
    <ScrollToTop smooth component={<UpArrow/>}/>
    <Routes> 
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={countryCode} category="general"/>}></Route>
        <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={countryCode} category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={countryCode} category="entertainment"/>}></Route>
        <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={countryCode} category="general"/>}></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={countryCode} category="health"/>}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={countryCode} category="science"/>}></Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={countryCode} category="sports"/>}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={countryCode} category="technology"/>}></Route>
    </Routes>
    
    </>
  ) 
}

export default App;



