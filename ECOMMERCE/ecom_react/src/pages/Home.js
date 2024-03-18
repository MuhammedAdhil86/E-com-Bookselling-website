import React from 'react'
import Navbar from '../components/navbar'
import Session from '../components/session'
import Footer from '../components/footer'
import Socialmedia from '../components/socialmedia'
import { useState} from 'react'
import { useEffect } from 'react'
import Category from './category'
import { Link, useNavigate } from 'react-router-dom'
















export default function Home() {
  
const [data, setData] = useState([]);
 const navigate = useNavigate();

useEffect(()=> {

  fetch('http://127.0.0.1:8000/api/category/')
  .then(response => response.json())
  .then((data) => {setData(data);})
  .catch(error=>console.error('error:',error));
},[])

const handleCategory = (Category) => {
  navigate(`/category/${Category}`);
}

  return (
    <div>
     
      <Session/>
      <Socialmedia/>

      <div className=" row ml-5 mt-5 ">
{data.map(item =>(




  <div className="col-lg-3  ">
   <div className="box ">

<Link to={`/category/${item.name}`} onClick={() => handleCategory(item.name)} >

<div>     
<img
  src={item.image}
  alt={item.name}
  style={{ width: 200, height: 260 }}
  className="  rounded mt-5"
/>
</div>

</Link>


<div className="card-title">
  <h5 className="card-h5">{item.name}</h5>
</div>


  <p className="box-description">{item.discription}</p>

</div>

  </div>

))}



</div>
    <Footer/>
   

    
    </div>
  )
}



