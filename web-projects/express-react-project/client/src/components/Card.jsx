import React from 'react'
import {CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton} from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Card(props) {
    return (
        <CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src={"https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg"} />
  <CCardBody>
    <CCardTitle>{props.title}</CCardTitle>
    <CCardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
    )
}

export default Card