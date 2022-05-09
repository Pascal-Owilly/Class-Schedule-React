import './Announcement.css';
import React,{useState} from 'react';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import Button from 'react-bootstrap/Button';



const New = () => {
const [title, setTitle]= useState("");
const [message, setMessage]= useState("");
const [date_created, setDate]= useState("");
const [date_updated, setUpdateDate]= useState("");
const [user, setUser]=useState("");
const [success, setSuccess]=useState("");

async function submit() {
  let item ={title,message,date_created,date_updated,user}
  console.warn(item)

  let result = await  fetch("https://class-schedule-app00.herokuapp.com/api/announcements/", {
      method: "POST",
        body: JSON.stringify(item),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    });
    let res = await result.json();
      if (result.status === 200) {
            setTitle("");
            setMessage("");
            setDate("");
            setUpdateDate("");
            setUser("");
            setSuccess("Your announcement has been received!");
      } else {
        setSuccess("Your announcement has been received!");
      }
   

  };

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
<h2>| New Announcement</h2>
<div>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className='formcontrol' placeholder='Title' /><br />
        <input value={message} onChange={(e)=>setMessage(e.target.value)} style={{height:'50px'}} type="text" className='formcontrol' placeholder='Message' Row/><br />
        <input value={date_created} onChange={(e)=>setDate(e.target.value)} type="date" className='formcontrol' placeholder='Date' /><br />
        <input value={date_updated} onChange={(e)=>setUpdateDate(e.target.value)} type="date" className='formcontrol' placeholder='Date' /><br />
        <input value={user} onChange={(e)=>setUser(e.target.value)} type="number" className='formcontrol' placeholder='User' /><br />
        <Button onClick={submit} variant="flat" size="sm" type="submit">Submit</Button>
        <div style={{color:"#18183D"}} className="message">{success ? <p style={{color:"#18183D"}}>{success}</p> : null}</div>
             
    </div>
</Col>  
</Row>
</Container>



    );
};

export default New;

