import {useState,Component} from 'react'
import ActionAdduser from './ActionAdduser'
import React from 'react'
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {Button} from 'react-bootstrap';
import { deleteAll, deleteprod } from "./DeleteAll"
import {Container, Row, Input} from 'reactstrap';
import Modal from 'react-modal'
import axios from 'axios';
function Usersprod ({idx, selected, text}){
  
  const  deleteprod = (name) => {
    // console.log(id);
    let ninjas = users.filter(ninja => {
      return ninja.name !== name
    });
    setUsers(
      ninjas);
  }

   const  deleteAll = (name) => {
    // console.log(id);
    let ninjas = users.filter(ninja => {
      return ninja.name === name
    });
    setUsers(ninjas);
  }












 const handleChange = event => {
  setModname({ name: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:8080/Usersprod/${users.name}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }




  const [modalState, setModalState]= useState(false)
  const [modname, setModname] = useState('');
  const [modage, setModage] = useState('');
  const [modaddress, setModaddress] = useState('');
  const handelButton = () => {
    
    setUsers([...users,{name: modname, age : modage, address : modaddress} ])
    setModalState(false)
  };
  const[users,setUsers]=useState([{name:'salima',age:'26',address:' salima@gmail.com'},
  {name:'imène',age:'30',address:' imene@yahoo.fr'},
  {name:'fatma',age:'33',address:' fatma@gmail.com'}])
    return (
      <div>
     
        
            <h1   align="center">  table  of users     </h1>
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  {users.map((user, index) => (
  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.address}</td>
      <td> <div style={{ cursor: "pointer" }} onClick={()=>deleteprod(user.name)}>
        x
      </div> </td>
      </tr>
  </tbody>


))}
</table>
<Button  variant = 'dark' onClick = {()=>setModalState(true)
        }>add user</Button>  &nbsp;&nbsp;&nbsp;
          
           <Modal isOpen={modalState}>
             <div style ={{margin : 70}}>
             <Input placeholder="name" onChange={(e)=> setModname(e.target.value)}></Input><br/>
             <Input placeholder="age" onChange={(e)=> setModage(e.target.value)}></Input><br/>
             <Input placeholder="mail@" onChange={(e)=> setModaddress(e.target.value)}></Input><br/>
             
             <Button variant ='dark' onClick = {handelButton}>add</Button>
             </div>
             </Modal>
             <Button  variant = 'dark'><Link to ='/'> Return </Link></Button>   &nbsp;&nbsp;&nbsp;
             <Button  variant = 'dark' onClick = {deleteAll}>delete all</Button> 



             <form onSubmit={handleSubmit}>
          <label>
            name:
            <input type="text" name="id" onChange={handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
</div>
    )

}

//const mapStateToProps = ({ text, selected }) => ({
//  text,
 // selected
//});
//const mapDispatchToProps = dispatch => ({
 // deleteAll: () => dispatch(deleteAll()),
 // deleteprod: key => dispatch(deleteprod(key)),
//});
export default 
//connect(
 // mapStateToProps,
 // mapDispatchToProps
//)

  Usersprod



