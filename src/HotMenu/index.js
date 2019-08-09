import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol,MDBCard,MDBCardImage } from "mdbreact";
import Styles from './Styles.module.css';

const drinksImg = [ 
    {img: './images/Caremel-fra.jpg',title: 'caramel frappuccino', description: 'aksjhdaiusydau'},
    {img: './images/White-Chocolate-Mocha.jpg',title: 'White Mocha', description: 'aksjhdaiusydau'},
    {img: './images/Milo-Frappe.jpg',title: 'Milo Frappe', description: 'aksjhdaiusydau'},
 ]

function HotMenu() {
  

  return (

    <MDBContainer className={Styles.stylemargin}>
        <h2 className={Styles.X}>Hot Drinks</h2>
        <MDBRow >
        {drinksImg.map((drinks)=>(
        <MDBCol md="4" sm="6" xs="12"  >
            
    <MDBView hover zoom>
              <img
                src={drinks.img}
                className="img-fluid"
                alt=""
              />
              <MDBMask className={Styles.styles1}>
                <h4 className="white-text"><b>{drinks.title}</b></h4>
                <p className="white-text">{drinks.description}</p>
              </MDBMask>
            </MDBView>
            
            </MDBCol>
            ))}
            </MDBRow>
            
            </MDBContainer>
  );
}
export default HotMenu;