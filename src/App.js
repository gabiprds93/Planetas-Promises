import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {searchItem, search} from './actions';
import { connect } from 'redux-zero/react';
import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

const Item = ({item, index}) =>{ 
  return (
		<Row key={index} className="items">
      <Col >
				<img src={item.image}/>
			</Col>
			<Col >
				{item.pl_name}
			</Col>
			<Col >
        Discovered in {item.pl_disc} with {item.pl_telescope}
			</Col>
		</Row>
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
      <Grid className="App">
        <Row className="App-header">
          <h1 className="App-title">Exoplanet Explorer</h1>
          <h4>Learn more about planets around other starts!</h4>
        </Row>
        <Row>
          <ul className="App-intro">
            {list}
          </ul>
        </Row>
      </Grid>
    );
  
}

const mapToProps = ({items, query}) => ({items, query});

export default connect(mapToProps)(App);