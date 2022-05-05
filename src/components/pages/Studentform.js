import React, { Component } from 'react'
import axios from "axios"; 

 class studentform extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          id: '',
          student: '',
          course:''

       }
     }

        handleChange =(e) => {
            this.setState({
             [e.target.name]: e.target.value   
            })

        }

        handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('https://class-schedule-app00.herokuapp.com/students',this.state)
    this.state = {
      posts: []
      .then(response =>{
        console.log(response)
      })
   }
            console.log(e.target)
        }

  render() {
      const {id, student, course} = this.state
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>student Id</label>
                  <input 
                  type='text'
                  name='id'
                  value={id}
                  onChange = {this.handleChange}

                  ></input>
              </div>
        
              <div>
                  <label>student Name</label>
                  <input 
                  type='text'
                  name='student'
                  value={student}
                  onChange = {this.handleChange}

                  ></input>
              </div>

              <div>
                  <label>Course</label>
                  <input 
                  type='text'
                  name='course'
                  value={course}
                  onChange = {this.handleChange}

                  ></input>
              </div>
              <div>
                  <button type='submit'>Take Course</button>
              </div>

          </form>
      </div>
    )
  }
}

export default studentform