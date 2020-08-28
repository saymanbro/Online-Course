import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, price,Duration,Instruction} = props.allCourse;
    return (
  <div className='course-style'>
            <h3>Course: {name}</h3>
            <p>Fee: {price}</p>
            <p>Duration: {Duration}</p>
            <p>Instraction: {Instruction}</p>
            <button className='btn btn-info'  onClick={() => props.handleEnrollButton(props.allCourse)}>Enroll Now</button>
  </div>
    );
};

export default Course;