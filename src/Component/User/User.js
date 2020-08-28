import React,{useState} from 'react';
import './User.css';
import fakeData from '..//../fakeData/fake';
import Course from './../Course/Course';
import Cart from '../Cart/Cart'


const User = () => {
 const firstFive = fakeData.slice(0,12);
const [course, setCourse] = useState(firstFive);
const [cart, setCart] = useState([]);
const handleEnrollButton = (course) =>{
    const newCart =[...cart,course]
    setCart(newCart)
}
    return (
       
     <div className="course-container">
         <div className="course-list">
         
    {course.map(course =><Course allCourse={course} handleEnrollButton={handleEnrollButton}></Course>)}
       

         </div>
         <div className="course-cart">
        <Cart cart={cart}></Cart>
         </div>
     </div>
        
    );
};

export default User;