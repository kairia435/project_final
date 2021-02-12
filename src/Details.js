import React from 'react'
import {Link} from 'react-router-dom';
function Details (props){
    console.log(props)
    return (
        <>
        <iframe width="560" height="315" src={props.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h1 color = "white">{props.title}</h1>
            <h5>{props.description}</h5>
            <Link to="/">return</Link>
        </>
    )
}

export default Details;