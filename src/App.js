import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {searchItem, search} from './actions';
import { connect } from 'redux-zero/react';

const Item = ({item, index}) =>{ 
  return (
		<div key={index} className="">
			<div className="">
				{item.pl_name}
			</div>
			<div className="">
        Discovered in {item.pl_disc} with {item.pl_telescope}
			</div>
		</div>
	);
}

const App = ({items, query}) => 
{
  console.log("items", items.length);
  let list = "";
  if(items.length == 0)
    search();
  else
  {
    list = items.map((item, index) =>
    {
      console.log("item", item);
      return <Item key={index} item = {item} index={index} />;
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="App-intro">
          {list}
        </ul>
      </div>
    );
  
}

const mapToProps = ({items, query}) => ({items, query});

export default connect(mapToProps)(App);