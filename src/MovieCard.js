import React , {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import Details from './Details';
import MovieList from './MovieList'
import Modal from 'react-modal'
import {Button} from 'react-bootstrap';



function MovieCard(props) {
   const [modalState, setModalState]= useState(false)
 const style = {height : 250,
          backgroundColor : "#181818",
                margin : 10}
                let title = props.title
                let trailer = props.trailer
                let description = props.description
                let delprod=props.delprod
                //const delprod = (e)=>{
  
                  //const title1=setTitle(e.target.value)
                  
                 //setMovies(movies.filter(i=>i.title!==title1))
                // setModalState1(false)
                 
                 //}
               
                 






    return (
      
       <>
       
         <Router>
       <Link to ='/details'>
   <div   style={style}>
      <img src = {props.poster}   height = "400" width = "300"/><br/> 
     <h6 style = {{float : "left", color : "BLACK"}}>{props.title}</h6>
     
     <StarRatingComponent
    name={"movie rate"} /* name of the radio input, it is required */
    value={props.rate} /* number of selected icon (`0` - none, `1` - first) */
    starCount={5} /* number of icons in rating, default `5` */
    starColor={"#ffb400"} /* color of selected icons, default `#ffb400` */
    emptyStarColor={"#333"} /* color of non-selected icons, default `#333` */
    editing={false} /* is component available for editing, default `true` *//>
    
    <span>{}</span>
 
    </div>
    </Link>
    
    
<Route path = "/details" render={(props) => (
   <Modal isOpen={true} backgroundColor = 'black'>
    <Details {...props} trailer={trailer} title= {title} description = {description}  />
    </Modal>
  )}/>
  
</Router>

       </> 
    );
}
export default MovieCard;
