import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol,MDBCard,MDBCardImage } from "mdbreact";
import Styles from './Styles.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

// const drinksImg = [ 
//     {img: './images/Caremel-fra.jpg',title: 'caramel frappuccino', description: 'aksjhdaiusydau'},
//     {img: './images/White-Chocolate-Mocha.jpg',title: 'White Mocha', description: 'aksjhdaiusydau'},
//     {img: './images/Milo-Frappe.jpg',title: 'Milo Frappe', description: 'aksjhdaiusydau'},
//  ]


class ColdMenu extends React.Component {
  state = {
    coldDrinks: null,
    
  }

  componentDidMount() {
  this.fetchColdDrinks();
  }

  fetchColdDrinks = async () => {
    const url = `https://firestore.googleapis.com/v1/projects/amjadfinal/databases/(default)/documents/coldDrinksImages/`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ coldDrinks: json.documents });
  } 
  
  render(){
    if(this.state.coldDrinks !== null){
      return (
        <MDBContainer className={Styles.stylemargin}>
          <h2 className={Styles.X}>Cold Drinks</h2>
          <MDBRow >
          {this.state.coldDrinks.map((drinks)=>(
          <MDBCol md="4" sm="6" xs="12"  >
              
          <MDBView hover zoom>
            <img
              src={drinks.fields.path.stringValue}
              className="img-fluid"
              alt=""
            />
            <MDBMask className={Styles.styles1}>
              <h4 className="white-text"><b>{drinks.fields.title.stringValue}</b></h4>
              {/* { <p className="white-text">{drinks.description}</p> } */}
            </MDBMask>
          </MDBView>
          
          </MDBCol>
          ))}
          </MDBRow>
                
        </MDBContainer>
      );
      }
    else{
      return(
        <div>
        <CircularProgress color="secondary" />
      </div>
      )
    }
}
}

export default ColdMenu;