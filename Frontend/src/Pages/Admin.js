import React, { useEffect, useRef,useState } from 'react'
import { Row,Col, Navbar, Container } from "react-bootstrap";
import Response from '../components/Responce'
import { useParams } from 'react-router-dom';
import ManageFAQ from '../FAQPage/ManageFAQ';
 import Navbaradmin from '../components/Navbaradmin'



export default function Admin() {

  
  const{id} = useParams()
  useEffect(()=>{
    console.log(id) 
  })

  return (
    <>
    <Container>
      <Navbaradmin/>
      <Response/>
      <ManageFAQ/>
   </Container>
   </>
  )
}