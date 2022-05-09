import './Announcement.css';
import React, { useState, useEffect }  from 'react';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import List from './List';
import withListLoading from './withListLoading';



const Announcement = () => {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://class-schedule-app00.herokuapp.com/api/announcements/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((announcements) => {
        setAppState({ loading: false, announcements: announcements });
      });
  }, [setAppState]);
    return (
<Container fluid>

<Row>   
<Col className='links' sm={2} style={{background: "#18183D", color:"white",overflow: 'hidden',}}>
  <h3>All</h3>
  <h6><a style={{color: "white",textDecoration:"none"}}href="/new">New Announcement</a></h6> 
  <Card.Link className='links' style={{color: "white"}}href="/student">Courses</Card.Link>   
  <h6>Students</h6>
  <Card.Link className='links' style={{color: "white"}}href="/sessions">Sessions</Card.Link> 
  <h6><a style={{color: "white",textDecoration:"none"}}href="/comments">Comments</a></h6> 
</Col>
<Col sm={10}>
<h2>| Announcements</h2>
<div className='repo-container'>
      <ListLoading isLoading={appState.loading} announcements={appState.announcements} />
    </div>
</Col>  
</Row>
</Container>



    );
};

export default Announcement;

