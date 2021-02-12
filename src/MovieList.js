import React, { useState } from 'react';
import Filter from './Filter'
import {Container, Row, Input} from 'reactstrap';
import Modal from 'react-modal'
import MovieCard from './MovieCard';
import {Button} from 'react-bootstrap';



     
function MovieList() {
 
    const [modalState, setModalState]= useState(false)
    const [modalState1, setModalState1]= useState(false)
  const button = {
    
    height : 50,
    width : 200,
    float:"left",
    backgroundColor: "green",
    justifyContent: "center"
    
    
  }
    const [products, setProducts] = useState([
        {title : "ORGANIC", description:" Organic hair, skin, and makeup wonders that are as loved for what's in them ... Five years ago, if you wanted to use  natural beauty products.", 
    posterUrl:"https://image.freepik.com/vecteurs-libre/produit-cosmetique-bio-aux-fraises_1441-952.jpg", rate:5, trailer : "https://www.youtube.com/embed/R971LKLP-zc"},
    {title : "ALGOVITA", description:" algoVita Sérum antitaches est soin concentré en substances actives extraites des micro-algues des végétaux dépigmentant. C'est un soin de nuit destiné à .", 
    posterUrl:"https://www.viveznature.com/1886/serum-anti-chute-100ml-algovita.jpg", rate:5, trailer : "https://www.youtube.com/embed/6vJgCyuOnsA"},
    {title : "AQUAVITA", description:"It all happens in one go: enter our flagship product – the Ultimate Alkaline Water System, meticulously crafted in the USA. Our water's natural alkalinity promotes .", 
    posterUrl:"https://a.cdnsbn.com/images/products/l/14731927701.jpg", rate:4, trailer : "https://www.youtube.com/embed/0BEOcY0PAYk"},
    {title : "ARVEA", description:" ARVEA: La marque Nature, N°1 de la vente directe en Tunisie.", 
    posterUrl:"https://toparvea.com/wp-content/uploads/2020/07/gel-netoyant-arvea-new-look.jpg", rate:4, trailer : "https://www.youtube.com/embed/HyVeTDd_ttA"},
    {title : "FILORGA", description:" UNIVERSAL CREAM FACE, care Filorga multi purpose treatment hydrates, protects and repairs with hyaluronic acid.", 
    posterUrl:"https://www.prime-beaute.com/wp-content/uploads/2019/03/filorga-oxygene-glow-nouveau-soin-cosmetique.jpg", rate:3, trailer : "https://www.youtube.com/embed/1ZVTAAZqGIk"},
    {title : "THE TULIP", description:" a beauty executive based out of New York, find herself wading through the tulip fields of Holland in pursuit of the next big product line.", 
    posterUrl:"https://image.freepik.com/psd-gratuit/arrangement-produits-cosmetiques-bio_23-2148608240.jpg", rate:3, trailer : "https://www.youtube.com/embed/LLjAh0KC-_k"},
])
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [poster, setPoster] = useState('')
const [rate, setRate] = useState('')
const getData = (val,stars)=>{
    setProducts(products.filter(item=>item.title.includes(val.target.value)&& item.rate === stars )
  )}
  const handleTitleChange = (event)=>{
setTitle(event.target.value)
  }
const handleDescriptionChange = (event)=>{
    setDescription(event.target.value)
  }
  const handleURLChange = (event)=>{
    setPoster(event.target.value)
  }
  const handleRateChange = (event)=>{
    setRate(event.target.value)
  }

  const findProd = (title, rate)=> {
   setProducts(products.filter(p=> p.title.includes (title) && p.rate === rate ))
  }



  const addprod = (event)=>{
event.preventDefault();
setProducts([...products,{title :title, description : description, posterUrl : poster, rate : rate} ])
setModalState(false)

}

const deleteprod = (title) => {
  // console.log(id);
  let ninjas = products.filter(ninja => {
    return ninja.title !== title
  });
  setProducts(
    ninjas);
}



const delprod = (title)=>{
  //e.preventDefault();
 //const title1=e.target.value
 
 setProducts(products.filter(i=>{ return i.title!==title}))

setModalState1(false)
console.log(products)
}
    return (
       <>
      
       <Container fluid>
         <Filter findMovies = {findProd}>
          </Filter>
          <div style ={{padding : 10}}>
          <Button style = {button} variant = 'dark' onClick = {()=>setModalState(true)}>Add product</Button>
          <Button style = {button} variant = 'dark' onClick = {()=>setModalState1(true)}>delete product</Button>
       </div>
       <div style ={{padding : 10}}>
          
      
       </div>
          
          
          </Container>
          
         <br/>
       <Container fluid><Row>
       {products.map(movie => <MovieCard height = "200" width = "33%" title = {movie.title} description = {movie.description} poster = {movie.posterUrl} rate = {movie.rate} trailer = {movie.trailer}>
       
       </MovieCard>
         
       )}
      
      </Row>
      </Container>
      <Modal isOpen={modalState}>
        <div style ={{margin : 70}}>
        <Input placeholder="product name" onChange={handleTitleChange}></Input><br/>
        <Input placeholder="product Description" onChange={handleDescriptionChange}></Input><br/>
        <Input placeholder="product URL" onChange={handleURLChange}></Input><br/>
        <Input placeholder="Rate" onChange={handleRateChange}></Input><br/>
        <Button variant ='dark' onClick = {addprod}>Submit</Button>
        </div>
        </Modal> 
        <Modal isOpen={modalState1}>
        <div style ={{margin : 70 ,higth:20}}>
        <Input placeholder="product name"  onChange={handleTitleChange}></Input><br/>
        <Button variant ='dark' onClick = {delprod}>delete</Button>
        
        </div>
        </Modal> 

       
        
       </> 
    );
}
export default MovieList;