
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Routes , Route } from 'react-router-dom';

export default class App extends Component {
  countryCode = "in"
  pageSize = 12
  render() {
    return (
      <>
      <NavBar/>
      <Routes> 
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country={this.countryCode} category="general"/>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country={this.countryCode} category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country={this.countryCode} category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country={this.countryCode} category="general"/>}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country={this.countryCode} category="health"/>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country={this.countryCode} category="science"/>}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country={this.countryCode} category="sports"/>}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country={this.countryCode} category="technology"/>}></Route>
      </Routes>
      
      </>
    )
  }
}



