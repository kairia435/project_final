import React, {useState} from 'react';
import StarRating from './StarRating'
import {Input} from 'reactstrap'
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route,Link} from'react-router-dom';

function Filter(props) {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(null)
   const handleRate =(ratingValue)=>{
        setRate(ratingValue)
    }
   
    return (
       <>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div class="container-fluid">
  <Link  to="/Parfun"  > <a class="navbar-brand" > <b>Parfun </b></a> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link  to="/Soincor" > <a class="navbar-brand" > <b>soin</b></a> </Link>
        
          
        </li>
        <li class="nav-item">
        <Link  to="/Maquillage" > <a class="navbar-brand" > <b>Make up</b></a> </Link> 
        </li>
         <li class="nav-item">
         <Link  to="/Usersprod" >    <a class="navbar-brand" > <b>Users </b></a>  </Link> 
        
        </li>
        <li class="nav-item">
        <Link  to="/Contact" > <a class="navbar-brand" > <b>Contact</b></a> </Link> 
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

       <h4 style = {{float : "left", color : "GREEN"}}   >   The Top 10 Best Beauty Products  </h4>
       <div style = {{paddingLeft : 500, paddingTop : 20}}>
       
       <StarRating handleRate={handleRate}/>
       <Input type = "text" onChange={(e)=>setTitle(e.target.value)} placeholder="Search product ..." style = {{background : "transparent",width:"250px" ,float:"left"}}></Input>
       <Button onClick={()=>props.findMovies(title, rate)} variant = 'dark'>Search</Button>
       
       </div>
       </> 
    );
}
export default Filter;